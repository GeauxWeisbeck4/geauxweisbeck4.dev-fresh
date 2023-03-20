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
        <main className="max-w-screen-md px-4 pt-16 mx-auto">
            <h1 className="text-5xl font-bold">Projects</h1>
            <div className="mt-8">
                {projects.map((project) => <ProjectCard project={project} />)}
            </div>

        </main>
        <Footer /></>
    );
}

function ProjectCard(props: { project: Project }) {
    const { project } = props;
    return (
        <div class="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <img class="object-cover w-full h-64" src={project.image} alt={project.snippet} />
            <div class="p-6">
                <div>
                    <span class="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{project.tag}</span>
                    <a href={`/projects/${project.slug}`} class="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{project.title}</a>
                    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{project.content}</p>
                </div>

                <div class="mt-4">
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
