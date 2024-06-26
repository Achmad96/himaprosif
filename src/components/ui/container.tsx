export default function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <main className={`min-h-[90vh] max-w-full ${className}`}>{children}</main>;
}
