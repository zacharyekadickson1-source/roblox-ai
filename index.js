import express from "express";

const app = express();
app.use(express.json());

app.post("/chat", async (req, res) => {
    const message = req.body.message;

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
});

app.listen(3000, () => console.log("AI running"));
