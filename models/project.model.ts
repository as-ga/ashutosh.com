import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    image: { type: String, required: true },
    desc: { type: String, required: true },
    tech: { type: [String], defaut: [] },
    link: { type: String, required: true },
    github: { type: String, required: true },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.projects || mongoose.model("projects", projectSchema);

export { Project };
