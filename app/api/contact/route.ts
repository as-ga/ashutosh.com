import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/db/dbConfig";
import { Contact } from "@/models/contact.model";

dbConnect();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const contact = await Contact.find();
    if (!contact) {
      return NextResponse.json(
        { error: "Error fetching messages" },
        { status: 500 }
      );
    }
    return NextResponse.json(contact);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }
    const contact = await Contact.create({
      name,
      email,
      subject,
      message,
    });
    if (!contact) {
      return NextResponse.json(
        { error: "Error sending message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully", success: true, contact },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        error: `Error sending message : ${error?.message || error}`,
        success: false,
      },
      { status: 500 }
    );
  }
}
