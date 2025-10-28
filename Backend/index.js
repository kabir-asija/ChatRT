import express from "express";
import cors from "cors";
import axios from "axios";
import {config} from "dotenv";
config()

const app = express();
const PORT = process.env.PORT || 2000;

app.use(express.json());
app.use(cors());

app.post("/generate", async (req, res) => {
  try {
    const { question } = req.body;
    if (!question || !question.trim()) {
      return res.status(400).json({ error: "Invalid Question!" });
    }

    const response = await axios({
      method: "POST",
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.API_KEY}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        contents: [
          {
            parts: [
              {
                text: question,
              },
            ],
          },
        ],
        generationConfig: {
          thinkingConfig: {
            thinkingBudget: 0,
          },
        },
      },
    });

    const answer = response.data.candidates[0].content.parts[0].text;
    res.status(200).json({ answer });
  } catch (error) {
    console.error("Gemini API error:", error.message);
    res.status(500).json({ error: "Failed to generate answer." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});