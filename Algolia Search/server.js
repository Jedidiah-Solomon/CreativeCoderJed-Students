import express from "express";
import path from "path";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import morgan from "morgan"; // Import Morgan

dotenv.config();

// For ES Modules compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Load Algolia credentials from the environment
// We'll use the SEARCH_API_KEY for the frontend in this example.
// It's generally safer to use an Admin API Key on the backend for indexing.
const ALGOLIA_APP_ID = process.env.ALGOLIA_APP_ID;
const ALGOLIA_SEARCH_API_KEY = process.env.ALGOLIA_SEARCH_API_KEY;
const ALGOLIA_INDEX_NAME = process.env.ALGOLIA_INDEX_NAME;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/autocomplete", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "autocomplete.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
