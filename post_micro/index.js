import express from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

const PORT = process.env.PORT || 5002;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  return res.json({ message: "Its Working post micro" });
});

//Routes
import Routes from "./routes/index.js";
app.use(Routes);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
