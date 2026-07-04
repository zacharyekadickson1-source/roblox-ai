import express from "express";

const app = express();
app.use(express.json());

// health check (Render uses this)
app.get("/", (req, res) => {
    res.send("AI server is running");
});

// ✅ THIS IS THE IMPORTANT PART (ROBLOX AI ENDPOINT)
app.post("/chat", (req, res) => {
    const message = req.body.message;

    if (!message) {
        return res.json({ reply: "No message received." });
    }

    // simple test response (we can upgrade to real AI later)
    res.json({
        reply: "You said: " + message
    });
});

// start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
