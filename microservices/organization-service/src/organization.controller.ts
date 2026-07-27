import Project from "./Project.ts";
import type { ProjectDocument } from "./Project.ts";
export async function createProject(project:ProjectDocument){
    await project.save();
}