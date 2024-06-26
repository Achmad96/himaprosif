type BlogType = {
  id: string;
  cover: string;
  title: string;
  description: string;
  author: AuthorType;
  tags: TagType[];
  published: boolean;
  slug: string;
  createdAt: string;
  updatedAt: string;
};

type TagType = {
  id: string;
  name: string;
};

type AuthorType = {
  id: string;
  avatar: string;
  name: string;
};

type BlogFormType = {
  blogs: BlogType[];
  hasMore: boolean;
  nextCursor: string | null;
};

export type { TagType, BlogType, AuthorType, BlogFormType };
