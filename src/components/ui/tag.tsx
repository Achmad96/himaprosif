import { TagType } from '@/types';

interface ITagComponent {
  tag: TagType;
}
export default function TagComponent({ tag }: ITagComponent) {
  const { name }: TagType = tag;
  return (
    <div>
      <p>#{name.toLowerCase()}</p>
    </div>
  );
}
