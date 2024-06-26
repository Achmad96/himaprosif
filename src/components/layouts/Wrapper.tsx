interface WrapperProps {
  children: React.ReactNode;
}
export default function Wrapper({ children }: WrapperProps) {
  return <article className="flex h-auto w-full flex-col">{children}</article>;
}
