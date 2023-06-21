import BlogCard from "@/components/post/blog-card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-12">
      <header>
        <h1>TheKims Blog</h1>
      </header>

      <div>
        <aside></aside>

        <ul className="grid lg:grid-cols-3 gap-5">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </ul>
      </div>
    </div>
  );
}
