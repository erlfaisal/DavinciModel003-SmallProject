const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;
const configuration = new Configuration({
    organization: "org-GNCM9Dzzg8LRtuV6IIM1W1ts",
    apiKey: "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"
});

const openai = new OpenAIApi(configuration);

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.post("/", async (req, res) => {
    const message = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 7,
        temperature: 0,
    });

    let text = response.data.choices[0].text;
    if (text) {
        res.json({message: text});
    }
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
