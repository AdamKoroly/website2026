import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export function PostListItem({ post }: { post: PostMeta }) {
  return (
    <article className="space-y-1">
      <div className="text-sm opacity-70">{post.date}</div>

      <h2 className="text-2xl font-semibold tracking-tight">
        <Link href={`/blog/${post.slug}`} className="hover:opacity-70">
          {post.title}
        </Link>
      </h2>

      {post.summary ? <p className="opacity-90">{post.summary}</p> : null}

      <div>
        <Link
          href={`/blog/${post.slug}`}
          className="text-sm underline underline-offset-4 hover:opacity-70"
        >
          Read it…
        </Link>
      </div>
    </article>
  );
}
