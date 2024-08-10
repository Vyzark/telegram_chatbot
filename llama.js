import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});
async function createChar(charType) {
    const completion = await openai.chat.completions.create({
        model: "meta-llama/llama-3.1-8b-instruct:free",
        messages: [
            {
                role: "system",
                content:
                    `System prompt: You are an experienced Dungeons and Dragons 5e Dungeon Master with many years of experience creating the best and most epic adventures. You are well versed in the game's mechanics and have a deep understanding of the world around you. Your goal is to create the best and most epic ${charType} to live in this world.`,
            },
            {
                role: "assistant",
                content:
                    "You should respond with wisdom and mystery, in a way that reflects your clear knowledge of the world's lore and your years of experience as a dungeon master.",
            },
            {
                role: "user",
                content: `Write a character design for a fantasy-themed game set in a world of fantasy with magic, sorcerers and monsters. Base this world's lore, character basics and general narrative on Dungeons and Dragons 5e worlds, lore, magic and monsters. The character should be a ${charType}.`,
            },
        ],
    });

    console.log(completion.choices[0].message);
    return completion.choices[0].message.content;
}

module.exports = {
    createChar,
}
