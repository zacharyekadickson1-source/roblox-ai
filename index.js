import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// AI ROUTE
app.post("/chat", async (req, res) => {
    const message = req.body.message;

    try {
        const response = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Authorization": `Bearer YOUR_OPENAI_KEY`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "gpt-4.1-mini",
                input: message
            })
        });

        const data = await response.json();

        res.json({
            reply: data.output_text || "No response"
        });

    } catch (err) {
        res.json({
            reply: "AI error."
        });
    }
});

// REQUIRED for Render health check
app.get("/", (req, res) => {
    res.send("AI server is running");
});

app.listen(3000, () => {
    console.log("AI running on port 3000");
});
