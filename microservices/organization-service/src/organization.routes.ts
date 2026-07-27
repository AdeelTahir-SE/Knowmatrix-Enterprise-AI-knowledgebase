import Router from "express";

const router = Router();


// Organization routes
router.post("/create-organization", (req, res) => {
  res.send("Organization created");
});
router.get("/get-organization", (req, res) => {
  res.send("Organization fetched");
});
router.put("/update-organization", (req, res) => {
  res.send("Organization updated");
});
router.delete("/delete-organization", (req, res) => {
  res.send("Organization deleted");
});



// Project routes

router.post("/create-project", (req, res) => {
  res.send("Project created");
});
router.get("/get-project", (req, res) => {
  res.send("Project fetched");
});
router.put("/update-project", (req, res) => {
  res.send("Project updated");
});
router.delete("/delete-project", (req, res) => {
  res.send("Project deleted");
});


export default router;