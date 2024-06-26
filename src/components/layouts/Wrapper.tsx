import { ReactNode } from 'react';
interface WrapperProps {
  children: ReactNode;
}
export default function Wrapper({ children }: WrapperProps) {
  return <article className="flex h-auto w-full flex-col">{children}</article>;
}
