import express from "express";
import pdfRoutes from "./routes/pdf.routes.js";

const app = express();
app.use(express.json());

app.use("/api/pdf", pdfRoutes);

app.listen(3000, () => {
  console.log("🚀 Server running on port 3000");
});
