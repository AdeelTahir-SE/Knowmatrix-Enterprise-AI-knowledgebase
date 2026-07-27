import mongoose from "mongoose";

// includes 
// organizationName,
// organizationEmail, 
// people, 
// organizationImage, 
// Projects
const organizationSchema = new mongoose.Schema(
  {
    organizationName: {
      type: String,
      required: true,
    },
    organizationEmail: {
      type: String,
    },
    people: [
      {
        type: mongoose.Schema.Types.ObjectId,
        role: {
          type: String,
          enum: ["admin", "member"],
        },
      },
    ],
    organizationImage: {
      type: String,
    },
    Projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Organization", organizationSchema);
