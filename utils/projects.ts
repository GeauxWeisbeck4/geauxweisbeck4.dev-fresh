import { extract } from "$std/encoding/front_matter.ts";
import { join } from "$std/path/posix.ts";

const DIRECTORY = "./projects";

export interface Project {
    slug: string;
    title: string;
    image: string;
    completed: Date;
    snippet: string;
    content: string;
    tag: string;
}

// Get Projects
export async function getProjects(): Promise<Project[]> {
    const files = Deno.readDir(DIRECTORY);
    const promises = [];
    for await (const file of files) {
        const slug = file.name.replace(".md", "");
        promises.push(getProject(slug));
    }
    const projects = await Promise.all(promises) as Project[];
    projects.sort((a, b) => b.completed.getTime() - a.completed.getTime());
    return projects;
}

// Get Project.
export async function getProject(slug: string): Promise<Project | null> {
    const text = await Deno.readTextFile(join(DIRECTORY, `${slug}.md`));
    const { attrs, body } = extract(text);
    return{
        slug,
        title: attrs.title,
        image: attrs.image,
        completed: new Date(attrs.completed),
        content: body,
        snippet: attrs.snippet,
        tag: attrs.tag,
    };
}
