import { getProjects } from "@/sanity/sanity-utlis"
import { Project } from "@/types/Projects";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();
  
  return (
    <div>
      <h1 className="text-7xl font-xetrabold">
        Hello I&apos;m{" "}
        <span className="bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
          Ushie Abu
        </span>
        !
      </h1>
      <p className="mt-3 text-lg text-grey-600">
        Hello everyone! check out my projects!
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">
        My Projects
      </h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project: Project) => (
        <div key={project._id} className="border border-gray-200 rounded-lg p-3">
          {project.image && (
              <Link
                href={`/projects/${project.slug}`}
                key={project._id}
                className="border-2 border-gray-500 rounded-lg p-1 hover:scale-105 hover:border-blue-500 transition"
              >
                <Image
                  src={project.image}
                  alt={project.image}
                  width={700}
                  height={100}
                  className="object-cover rounded-lg border border-gray-200 w-full"
                /> 
              </Link>
            )}
          <div className="font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent">
            {project.name}
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}
