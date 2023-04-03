import { Handlers, PageProps } from "$fresh/server.ts";
import { getPost, getPosts, Post } from "@/utils/posts.ts";
import { Head } from "$fresh/runtime.ts";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";


export const handler: Handlers<Post[]> = {
    async GET(_req, ctx) {
        const posts = await getPosts();
        return ctx.render(posts);
    },
};

export default function BlogPage(props: PageProps<Post[]>) {
    const posts = props.data;
    return (
        <>
        <Head>
            <title>GeauxWeisbeck4.dev | Blog</title>
        </Head>
        <Navbar />
        <main class="max-w-screen-md px-4 pt-16 mx-auto">
            <h1 class="text-5xl font-bold mb-4">All Posts</h1>
            <div class="relative max-w-lg">
                <input aria-label="Search articles" type="text" onChange={(e) => setSearchValue(e.target.value)} placeholder="search articles" class="block w-full rounded-md border border-gray-600 bg-white px-4 py-2 text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100" />
                <svg
              className="absolute right-3 top-3 h-5 w-5 text-gray-6d00 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            </div>
            <hr />
            <div class="mt-8">
                {posts.map((post) => <PostCard post={post} />)}
            </div>

        </main>
        <Footer /></>
    );
}

function PostCard(props: { post: Post }) {
    const { post } = props;
    return (
        <div class="py-8 border(t gray-200)">
            <a href={`/blog/${post.slug}`} class="sm:col-span-2">
                <h3 class="text(3xl gray-900) font-bold">
                    {post.title}
                </h3>
                <time class="text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <div class="mt-4 text-gray-900">
                    {post.snippet}
                </div>
            </a>
        </div>
    );
}
