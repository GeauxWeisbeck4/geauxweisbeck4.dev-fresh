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
        <div class="py-8 border(t gray-200)">
            <a href={`/projects/${project.slug}`} class="sm:col-span-2">
                <h3 class="text(3xl gray-900) font-bold">
                    {project.title}
                </h3>
                <img class="w-38 h-auto" src={project.image} alt={project.snippet} />
                <time class="text-gray-500">
                    {new Date(project.publishedAt).toLocaleDateString("en-us", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
                <div className="mt-4 text-gray-900">
                    {project.snippet}
                </div>
            </a>
        </div>
    );
};
