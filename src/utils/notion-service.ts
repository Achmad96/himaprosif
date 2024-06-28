import type { AuthorType, BlogFormType, BlogType, TagType } from '@/types';

import { Client } from '@notionhq/client';
import { cache } from 'react';
import { NotionToMarkdown } from 'notion-to-md';
import { MdStringObject } from 'notion-to-md/build/types';
import { formatDate, formatDescription } from '@/utils/format-util';

const client = new Client({ auth: process.env.NEXT_PUBLIC_NOTION_API_KEY });
const notionToMarkdown = new NotionToMarkdown({ notionClient: client });

const getCover = (page: any): string => {
  return !page.cover ? '' : page.cover.type === 'file' ? (page.cover.file.url as string) : (page.cover.external.url as string);
};

const transformPageToBlogForm = async (page: any): Promise<BlogType> => {
  const { properties } = page;
  const { Title, Description, Tags, Author, Published, Slug, CreatedAt, UpdatedAt } = properties;
  return {
    id: page.id as string,
    cover: getCover(page),
    description: formatDescription(Description) as string,
    title: Title.title[0].plain_text as string,
    tags: Tags.multi_select as TagType[],
    author: await getAuthorById(Author.created_by.id),
    published: Published.checkbox as boolean,
    slug: Slug.formula.string as string,
    createdAt: formatDate(CreatedAt.created_time) as string,
    updatedAt: formatDate(UpdatedAt.last_edited_time) as string,
  };
};

const getAuthorById = async (user_id: string): Promise<AuthorType> => {
  const response = await client.users.retrieve({ user_id });
  return {
    id: response.id,
    name: response.name as string,
    avatar: response.avatar_url as string,
  };
};

const getPublishedBlogs = cache(async (pageSize: number, startCursor: string | undefined = undefined): Promise<BlogFormType> => {
  const response = await client.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
    start_cursor: startCursor,
    page_size: pageSize,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'CreatedAt',
        direction: 'ascending',
      },
    ],
  });

  const blogs = await Promise.all(response.results.map(transformPageToBlogForm));
  const { has_more, next_cursor } = response;
  return {
    blogs,
    hasMore: has_more,
    nextCursor: next_cursor,
  };
});

type SingleBlogPageResponseType = {
  blog: BlogType;
  markdown: MdStringObject;
  hasMore: boolean;
  nextCursor: string;
};

const getSingleBlogPage = cache(async (slug: string) => {
  const response = await client.databases.query({
    database_id: process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string,
    filter: {
      and: [
        {
          property: 'Slug',
          rich_text: {
            equals: slug,
          },
        },
        {
          property: 'Published',
          checkbox: {
            equals: true,
          },
        },
      ],
    },
  });
  if (!response.results[0]) return { error: 'Sorry, there was an error' };
  const page = response.results[0];
  const markdownBlocks = await notionToMarkdown.pageToMarkdown(page.id);
  const markdown = notionToMarkdown.toMarkdownString(markdownBlocks);
  const blog = await transformPageToBlogForm(page);
  return {
    blog,
    markdown,
  };
});

export { getPublishedBlogs, getSingleBlogPage, type SingleBlogPageResponseType };
