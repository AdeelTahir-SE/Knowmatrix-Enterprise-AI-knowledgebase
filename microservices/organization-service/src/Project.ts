import mongoose from "mongoose";
import type  { InferSchemaType,HydratedDocument } from "mongoose";
// includes
// projectName,

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Project", projectSchema);

type ProjectType = InferSchemaType<typeof projectSchema>;
export type ProjectDocument = HydratedDocument<ProjectType>;