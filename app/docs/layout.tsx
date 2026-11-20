import { DocsNav } from "@/components/DocsNav";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wrap">
      <div className="docs has-toc">
        <DocsNav />
        {children}
      </div>
    </div>
  );
}
