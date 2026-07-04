import express from "express";

const app = express();
app.use(express.json());

// 🟢 Basic check (Render uses this to see if server is alive)
app.get("/", (req, res) => {
    res.send("AI server is running");
});

// 🧠 CHAT ROUTE (THIS IS WHAT ROBLOX CALLS)
app.post("/chat", async (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.json({ reply: "No message received." });
    }

    try {
        // 🤖 TEMP AI (works without OpenAI first)
        // This confirms everything is working before upgrading
        const reply = `You said: ${message}`;

        res.json({
            reply: reply
        });

    } catch (err) {
        res.json({
            reply: "Server error."
        });
    }
});

// 🚀 Start server
app.listen(3000, () => {
    console.log("AI running on port 3000");
});
