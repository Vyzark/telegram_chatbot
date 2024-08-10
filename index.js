const express = require("express");
const { Telegraf } = require("telegraf");
const axios = require("axios").default;

// const { createRecipe } = require("./gpt");
// const { createChar } = require("./gemini");
const { createChar } = require("./llama");

// Require dotenv and execute it
require("dotenv").config();

// Execute the express app
const app = express();

// Init Telegram BOT
const bot = new Telegraf(process.env.BOT_TOKEN);
// Config Telegram BOT
app.use(bot.webhookCallback("/telegram-bot"));
bot.telegram.setWebhook(`${process.env.BOT_URL}/telegram-bot`);

//Define ROUTES
app.post("/telegram-bot", (req, res) => res.send("Working"));

//* BOT COMMANDS
bot.command("test", async context => {
    console.log(context.message);
    await context.reply("Aaaaaaaaaaaaaaaaaaaaaaaaaaaannnnnd WORKING!");
    await context.reply("🤯");
    await context.replyWithMarkdownV2(`
        *Bold title text with MarkDown*
        _Italic text_
        __underlined__
        ~Strike Through~
        [Inline URL Example](http://www.test-url.com/)
        \`\`\`JavaScript
        console.log("Message in code formatting")\`\`\`
        `);
});

bot.command("weather", async ctx => {
    const city = await ctx.message.text.substring(9);
    try {
        const { data } = await axios(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},es&appid=${process.env.WEATHER_API_ID}&units=metric&lang=english`
        );

        await ctx.replyWithPhoto(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
        await ctx.replyWithMarkdownV2(
            `*__Weather Report \\- ${data.name}__*

    🌡️ *Temperature:* ${sanitizeTemp(data.main.temp)}C°

    🔥 *Max Temperature:* ${sanitizeTemp(data.main.temp_max)}C°

    ❄️ *Min Temperature:* ${sanitizeTemp(data.main.temp_max)}C°

    💦 *Humidity:* ${sanitizeTemp(data.main.humidity)}%`
        );
        await ctx.replyWithLocation(data.coord.lat, data.coord.lon);
    } catch ({ response: { data: error } }) {
        console.log(error);
        await ctx.reply("An error occurred, please try again.");
    }
});

// bot.command("recipe", async ctx => {
//     try {
//         const ingredients = ctx.message.text.substring(8);
//         const botResponse = await createRecipe(ingredients);
//         ctx.reply(botResponse);
//     } catch (error) {
//         console.log(error);
//     }
// });

bot.command("new_character", async ctx => {
    try {
        const charType = ctx.message.text.substring(15);
        const botResponse = await createChar(charType);
        ctx.reply(botResponse);
    } catch (error) {
        console.log(error);
    }
});

// Config PORT
const PORT = process.env.PORT || 3000;

// Initiate listener at PORT
app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

//* AUXILIARY FUNCTIONS
function sanitizeTemp(temp) {
    return String(temp).replaceAll(".", ",");
}
