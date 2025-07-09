import express from "express";
import mailRoute from "./routes/mail";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/mail", mailRoute);

const PORT = process.env.SERVER_PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
