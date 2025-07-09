import express from "express";
import { sendMail } from "../mail/mailService";

const router = express.Router();

router.post("/send", async (req, res) => {
    await sendMail(req.body);

    res.json({ success: true });
});

export default router;
