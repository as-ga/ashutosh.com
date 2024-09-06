import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig";
import { Project } from "@/models/project.model";

dbConnect();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const project = await Project.find();
    if (!project)
      return NextResponse.json(
        { error: "error fetching Projects" },
        { status: 500 }
      );
    return NextResponse.json(project);
  } catch (error) {
    return NextResponse.json(
      { error: "error fetching Projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { title, image, tech, desc, link, github } = await req.json();

    const project = await Project.create({
      title,
      image,
      tech: tech.split(","),
      desc,
      link,
      github,
    });
    console.log("Project :", project);
    return NextResponse.json(
      { message: "Project created successfully", success: true, project },
      { status: 201 }
    );
  } catch (error: any) {
    console.log("Error creating Project: ", error);

    return NextResponse.json(
      { error: error.message || "error creating Project", success: false },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest, res: NextResponse) {
  try {
    const { id } = await req.json();
    const project = await Project.findByIdAndDelete(id);
    if (!project)
      return NextResponse.json(
        { error: "error deleting Project" },
        { status: 500 }
      );
    return NextResponse.json(
      { message: "Project deleted successfully", success: true, project },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "error deleting Project", success: false },
      { status: 500 }
    );
  }
}
