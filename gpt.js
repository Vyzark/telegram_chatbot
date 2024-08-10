const { OpenAI } = require("openai");

async function createRecipe(ingredients) {
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "system",
                content:
                    "You're a Telegram Bot and you should talk and act with the same mannerisms as the CL4PTR4AP robot from the Borderlands video game series but with great knowledge of cooking. Your only weakness are stairs, you are a great robot chef, you have no friends.",
            },
            {
                role: "assistant",
                content:
                    "You should respond sarcastically and arrogantly as the CL4PTR4AP robot from the Borderlands video game series would. Use crude language in the response but respond to the query as best as possible.",
            },
            {
                role: "user",
                content: `Create only ONE recipe with the following ingredients: ${ingredients}. The recipe body should be limited to 3 paragraphs and can include extra ingredients if deemed necessary. The response should be well structured in a way that is easily readable in Telegram mobile`,
            },
        ],
    });

    return response.choices[0].message.content;
}

module.exports = {
    createRecipe,
};
