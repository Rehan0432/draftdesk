import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { fileURLToPath } from "node:url";

dotenv.config({ path: fileURLToPath(new URL("./.env", import.meta.url)) });

const { default: emailRoutes } = await import("./routes/emailRoutes.js");

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigin = process.env.FRONTEND_ORIGIN || "http://localhost:5173";

app.use(cors({ origin: allowedOrigin }));
app.use(express.json({ limit: "20kb" }));

app.get("/", (_req, res) => {
  res.json({ success: true, message: "DraftDesk AI server is running." });
});

app.use("/api/email", emailRoutes);

app.use((err, _req, res, _next) => {
  console.error("Server error:", err.message);
  res.status(500).json({
    success: false,
    message: "Something went wrong on the server."
  });
});

app.listen(PORT, () => {
  console.log(`DraftDesk AI backend running at http://localhost:${PORT}`);
});
