import express from "express";
import cors from "cors";
import { db } from "db/client";
import { authMiddleware } from "./middleware";


const app = express();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}))


app.post("/project", authMiddleware, async (req, res) => {
  const { prompt } = req.body;
  const userId = req.userId;

  //add a logic to have a useful description with AI
  const description = prompt.split("\n")[0];
  const project = await db.project.create({
    data: {
      description,
      userId
    }
  });

  res.json({ projectId: project.id });

})


app.get("/projects", authMiddleware, async (req, res) => {
  const userId = req.userId;
  const projects = await db.project.findMany({
    where: { userId: userId }
  });

  res.json({ projects })
})


app.listen(3001, () => {
  console.log("Server is running on port 3001")
})
