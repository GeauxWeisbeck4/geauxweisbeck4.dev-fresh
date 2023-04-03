import { Handlers, PageProps } from "$fresh/server.ts";
import { getProjects, Project } from "@/utils/projects.ts";
import { Head } from "$fresh/runtime.ts";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

export const handler: Handlers<Project[]> = {
    async GET(_req, ctx) {
        const projects = await getProjects();
        return ctx.render(projects);
    },
};

export default function ProjectsPage(props: PageProps<Project[]>) {
    const projects = props.data;
    return (
        <>
        <Head>
            <title>GeauxWeisbeck4.dev | Projects</title>
        </Head>
        <Navbar />
        <main className="w-[80] px-4 pt-16 mx-12 grid grid-cols-5 gap-3 mb-10">
            <div>
                <h2 class="text-xl font-semibold">Project Categories</h2>
                <ul>
                    <li><a class="hover:text-teal-400" href="/projects/web-development">Web Development</a></li>
                    <li><a class="hover:text-teal-400" href="/projects/writing">Writing</a></li>
                    <li><a class="hover:text-teal-400" href="/projects/design">Design</a></li>
                </ul>
            </div>
            <div class="col-span-4">
                <h1 className="text-5xl font-bold mb-4">Projects</h1>
                <p class="text-large">These are some projects that I'm either currently working on or have completed in the past. Let me know if you have any questions about my portfolio!</p>
                <div className="mt-8">
                    {projects.map((project) => <ProjectCard project={project} />)}
                </div>
            </div>

        </main>
        <Footer /></>
    );
}

function ProjectCard(props: { project: Project }) {
    const { project } = props;
    return (
        <div class="w-full overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mt-8">
            <img class="object-cover w-full h-72" src={project.image} alt={project.snippet} />
            <div class="p-6">
                <div>
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{project.tag}</span>
                    <a href={`/projects/${project.slug}`} class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{project.title}</a>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.content}</p>
                </div>

                <div class="mt-4 w-10">
                    <div class="flex items-center">
                        <div class="flex items-center">
                            <img class="object-cover h-10 rounded-full" src="https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=48&q=60" alt="Avatar" />
                            <a href={`/projects/${project.slug}`} class="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabindex="0" role="link">Andrew Weisbeck</a>
                        </div>
                        <span class="mx-1 text-xs text-gray-600 dark:text-gray-300">{project.completed}</span>
                        </div>
                    </div>
                </div>
            </div>
    );
};
