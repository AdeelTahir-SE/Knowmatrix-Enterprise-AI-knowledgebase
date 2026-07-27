import mongoose from "mongoose";

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
