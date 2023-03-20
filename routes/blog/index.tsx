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
        <main className="max-w-screen-md px-4 pt-16 mx-auto">
            <h1 className="text-5xl font-bold">From the Blog</h1>
            <div className="mt-8">
                {posts.map((post) => <PostCard post={post} />)}
            </div>

        </main>
        <Footer /></>
    );
}

function PostCard(props: { post: Post }) {
    const { post } = props;
    return (
        <div className="py-8 border(t gray-200)">
            <a href={`/blog/${post.slug}`} className="sm:col-span-2">
                <h3 className="text(3xl gray-900) font-bold">
                    {post.title}
                </h3>
                <time class="text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <div className="mt-4 text-gray-900">
                    {post.snippet}
                </div>
            </a>
        </div>
    );
}
