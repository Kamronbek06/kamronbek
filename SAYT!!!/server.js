const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/chat", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const MessageSchema = new mongoose.Schema({
    text: String,
    company: String,
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.model("Message", MessageSchema);

app.post("/send", async (req, res) => {
    const { text, company } = req.body;
    const message = new Message({ text, company });
    await message.save();
    res.json({ success: true });
});

app.get("/messages", async (req, res) => {
    const messages = await Message.find().sort({ timestamp: 1 });
    res.json(messages);
});

app.listen(3000, () => {
    console.log("Server 3000-portda ishlayapti...");
});