import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) return notFound();

  const { meta, content } = post;

  return (
    <article className="space-y-6">
      <header className="space-y-2">
        <div className="text-sm opacity-70">{meta.date}</div>
        <h1 className="text-3xl font-semibold tracking-tight">{meta.title}</h1>
      </header>

      <div className="space-y-4 leading-7">
        <MDXRemote
          source={content}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>
    </article>
  );
}
