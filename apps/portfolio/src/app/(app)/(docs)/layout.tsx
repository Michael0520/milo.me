export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto border-x border-line md:max-w-3xl">
      <div className="stripe-divider screen-line-bottom" />

      {children}
    </div>
  );
}
