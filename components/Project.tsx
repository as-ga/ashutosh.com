import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FaGithub } from "react-icons/fa6";
import { BiLinkExternal } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/project`
  );
  const data = await res.json();
  return data.project;
};
const Project = async () => {
  const projects = await getData();

  return (
    <div id="projects" className="pt-5">
      <h1 className="text-center text-3xl font-bold mt-10 mb-5">
        Project & Work
      </h1>
      <div className="flex flex-wrap mx-16 ">
        {projects.length > 0 &&
          projects.map((project: any) => (
            <Card
              className="w-[350px] m-5 rounded-none rounded-t-2xl"
              key={project.title}
            >
              <CardHeader className="p-0 pb-3">
                <Image
                  className="rounded-t-2xl "
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={100}
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="text-justify">
                  {project.desc}
                </CardDescription>
                <div className="flex flex-wrap mt-2">
                  {project.tech.map((t: string) => (
                    <Badge key={t} className="m-2 p-1.5" variant="secondary">
                      {t}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end pb-1">
                <Link className="mr-2" href={project.link}>
                  <BiLinkExternal size={30} />
                </Link>
                <Link href={project.github}>
                  <FaGithub size={30} />
                </Link>
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
};
export default Project;
