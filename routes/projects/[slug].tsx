import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { getProject, Project } from "@/utils/projects.ts";
import { CSS, render } from "https://deno.land/x/gfm@0.1.26/mod.ts";
import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

export const handler: Handlers<Project> = {
    async GET(_req, ctx) {
        const project = await getProject(ctx.params.slug);
        return ctx.render(project as Project);
    },
};

export default function ProjectPage(props: PageProps<Project>) {
    const project = props.data;
    return (
        <>
          <Head>
            <style dangerouslySetInnerHTML={{ __html: CSS}} />
          </Head>
          <Navbar />
          <main class="max-w-screen-md px-4 py-10 mx-auto">
            <h1 class="text-5xl font-bold pb-8">{project.title}</h1>
            <div class="border-solid border-gray-900 border-2 p-2 rounded-md">
              <img class="w-50 h-auto" src={project.image} alt="{project.snippet}"/>
            </div>

            <time class="text-gray-500 py-8">
                {new Date(project.completed).toLocaleDateString("en-us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </time>
            <div
            class="mt-8 markdown-body"
            dangerouslySetInnerHTML={{ __html: render(project.content) }}
            />

          </main>
          <Footer />
        </>
    );
}
