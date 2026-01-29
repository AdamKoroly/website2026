import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export async function SiteShell({ children }: { children: React.ReactNode }) {
  const posts = await getAllPosts();
  const recent = posts.slice(0, 10);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          <Link href="/" className="hover:opacity-80">
            Adam Koroly
          </Link>
        </h1>
        <p className="mt-2 opacity-80">Finance • Economics • Mathematics • Policy</p>
      </header>

      <div className="grid gap-10 md:grid-cols-[1fr_280px]">
        <main>{children}</main>

        <aside className="space-y-8">
          <nav className="space-y-2 text-sm">
            <div className="font-semibold">Menu</div>
            <div className="flex flex-col gap-1">
              <Link className="hover:opacity-70" href="/">Blog</Link>
              <Link className="hover:opacity-70" href="/introduction">Introduction</Link>
              <Link className="hover:opacity-70" href="/books">Books</Link>
              <Link className="hover:opacity-70" href="/contact">Contact</Link>
            </div>
          </nav>

          <div className="space-y-2 text-sm">
            <div className="font-semibold">Recent posts</div>
            <ul className="space-y-1">
              {recent.map((p) => (
                <li key={p.slug}>
                  <Link className="hover:opacity-70" href={`/blog/${p.slug}`}>
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <footer className="pt-6 text-xs opacity-70 border-t">
            <p>© {new Date().getFullYear()} Adam Koroly</p>
          </footer>
        </aside>
      </div>
    </div>
  );
}
