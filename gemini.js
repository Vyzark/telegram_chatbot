// GEMINI API Integration

const { GoogleGenerativeAI } = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 2,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function createChar(charType) {
    const parts = [
        {
            text: "Write a character design in a fantasy-themed game set in a world of fantasy with magic, sorcerers and monsters. Base this world's lore, character basics and general narrative on Dungeons and Dragons 5e worlds, lore, magic and monsters.",
        },
        { text: "input: Main Character (Female)" },
        {
            text: "output: **Name:** Haenyeo\n\n**Appearance:**\n\n* **Age:** Mid-twenties\n* **Height:** 5'7\"\n* **Weight:** 130 lbs\n* **Build:** Athletic and agile\n* **Hair:** Long, black hair worn in a practical braid\n* **Eyes:** Piercing hazel eyes that reflect the sea's depths\n* **Clothing:**\n    * Loose, dark-colored pants tucked into sturdy leather boots\n    * A lightweight cotton shirt with a low neckline, trimmed with intricate embroidery\n    * A leather vest with multiple pockets for tools and supplies\n* **Accessories:**\n    * A broad-brimmed hat to shield her face from the sun\n    * A pair of silver earrings in the shape of anchors\n    * A leather belt with a small pouch for valuables\n\n**Personality:**\n\n* **Determined:** Haenyeo is a fearless and tenacious pirate, driven by a strong sense of justice and a desire for adventure.\n* **Resourceful:** Her time spent as a haenyeo (Korean female diver) has honed her survival instincts and adaptability.\n* **Empathetic:** Despite her pirate lifestyle, Haenyeo has a compassionate heart and a soft spot for those in need.\n* **Intelligent:** She is quick-witted and observant, able to assess situations and make decisions swiftly.\n* **Independent:** Haenyeo values her freedom and relies on her own abilities rather than seeking help from others.\n\n**Skills:**\n\n* **Diving:** Haenyeo is an expert diver, capable of holding her breath for extended periods and navigating underwater with ease.\n* **Swimming:** Her exceptional swimming abilities allow her to navigate the treacherous ocean currents and avoid danger.\n* **Spearfishing:** She is a skilled spearfisher, using her knowledge of marine life to locate and catch prey underwater.\n* **Seamanship:** As a pirate, Haenyeo is familiar with the basics of sailing and ship navigation.\n* **Hand-to-Hand Combat:** While not an expert fighter, she is proficient in basic self-defense techniques, using her agility and knowledge of pressure points to subdue opponents.\n\n**Background:**\n\nHaenyeo was raised on a coastal village and learned the ways of the haenyeo from a young age. However, when her village was attacked by bandits, she witnessed firsthand the brutality of war and decided to fight back.\n\nJoining a pirate crew, Haenyeo has proven herself as a valuable member, using her diving skills to scout for enemy ships and gather underwater resources. Her determination and compassion have also earned her the respect of her crewmates.",
        },
        { text: "input: Main Character (A third gender)" },
        {
            text: "output: ## Name:  Anya \n\n**Appearance:** \n\n* **Age:** 28\n* **Height:** 5'10\"\n* **Weight:** 145 lbs\n* **Build:** Lean and toned, with powerful shoulders and a defined physique\n* **Hair:** Close-cropped, shaved on one side, and dyed a vibrant emerald green. \n* **Eyes:** Sharp, bright turquoise, that can seem almost otherworldly\n* **Clothing:** Anya favors loose-fitting, comfortable attire, perfect for movement. This often includes:\n    * A linen tunic with intricate geometric embroidery on the sleeves\n    * Leather pants with a silver buckle and functional pockets\n    * Heavy boots with ankle protection\n    * A thick cloak of deep purple that contrasts their bright hair\n* **Accessories:**\n    * Several layered leather bracelets with metal accents\n    * An intricately crafted silver ring on their thumb\n    * A worn leather pouch attached to their belt, filled with important items\n\n**Personality:** \n\n* **Charming:** Anya has a natural warmth and wit that draws people to them.\n* **Intuitive:**  Possessing a deep connection to the magic in the world, they have a knack for sensing emotions and reading people.\n* **Pragmatic:** While deeply idealistic, Anya values practical solutions and isn't afraid to get their hands dirty.\n* **Enigmatic:** With their otherworldly features and penchant for secrecy, they often seem shrouded in mystery.\n* **Resilient:**  Anya has overcome many challenges, possessing a tenacity that makes them impossible to underestimate.\n\n**Skills:** \n\n* **Magic:**  Anya is a skilled sorceror, possessing an innate talent for manipulating elemental magic, specifically water and earth. \n* **Healing:** Anya's magic can be used to soothe injuries and calm ailments, making them an invaluable member of any group.\n* **Alchemy:** Anya has learned to manipulate magical ingredients, crafting potions and tonics. \n* **Leadership:**  Despite being quiet, Anya inspires others with their courage and decisiveness.\n* **Swordsmanship:** They are proficient with a short sword, wielding it with an agility that belies their size. \n\n**Background:** \n\nAnya comes from a nomadic tribe that reveres nature and the interconnectedness of life. Their identity was always fluid, accepted and celebrated by their community. Raised in a culture of magical understanding, Anya learned to channel the raw magic within, specializing in the calming and nurturing elements of water and earth. They are drawn to a life of adventure, believing in helping those in need, but also determined to forge their own path and protect those they love. \n\n**General Narrative:**\n\nAnya's journey will be one of self-discovery, embracing their magical abilities and their identity. They will encounter prejudice and discrimination, challenging societal norms as they champion compassion and acceptance. Along their journey, Anya's powers will evolve and grow, leading them towards a fate tied to the world's balance of magic and the struggle for peace.",
        },
        { text: "input: Monster (any)" },
        {
            text: 'output: ## The Gloom Stalker\n\n**Name:**  "The Shadow\'s Claws"\n\n**Appearance:** \n\n* **Type:**  A large, monstrous spider, a terrifying hybrid of Drow and spider anatomy. \n* **Size:**  As big as a pony, with long, spindly legs covered in barbed hairs.\n* **Coloration:**  Jet black chitin with subtle shimmer, almost appearing like a velvet fabric, contrasting with its iridescent crimson eyes. \n* **Distinguishing Features:**\n    * The head region bears a thin, flowing black carapace that drapes over its back like a cape.\n    * Two massive fangs extrude from its jaws, glistening with venom.\n    * Several "arms" extend from its abdomen, lined with hooks and ending in web-like structures.\n\n**Abilities:**\n\n* **Deadly Venom:**  Its fangs inject a potent paralyzing toxin that quickly incapacitates victims.\n* **Silent Stalker:**  Move silently through shadows, able to track prey by scent, vibration, and even emotions.\n* **Shadow Weaving:**  Creates a veil of shadow around itself, appearing to vanish and reappear with chilling suddenness.\n* **Web Mastery:**  Manages webs not as traps, but for both offensive and defensive purposes - throwing a grappling net of shimmering shadow or enveloping itself in an opaque cocoon.\n\n**Lore:**\n\nLegends tell of an ancient pact between a powerful drow sorceress and a primordial spider spirit,  whose dark energies bled into the spider\'s lineage. This monstrous creation emerged, a nightmare from the Underdark that lurks in the shadows of the world.  Its primary purpose is unknown, but whispers hint at a terrifying agenda of collecting souls and corrupting the natural balance of life.\n\n**Inspiration:**\n\n* **D&D Monster:**  Drow Elite Warrior mixed with Spider\n* **Appearance:**  Combination of Drow aesthetic (jet black skin, pointed ears) and the grotesque features of a spider\n* **Personality:**  Cunning, intelligent, and deeply cruel\n\n**Encounters:** \n\n* Gloom stalkers typically inhabit damp and shadowy areas like caves, dungeons, and abandoned settlements.\n* They often ambush travelers at night, appearing like an obsidian cloud that emerges from the shadows.\n* If a creature is heavily wounded or slain, the Gloom Stalker will try to drag it away into its lair. \n* Their intelligence makes them excellent assassins, able to carefully plan and manipulate their victims for maximum terror. \n\n**Narrative Potential:**\n\n* A Gloom Stalker could serve as the terrifying climax to a dungeon crawl.\n* It might be a minion or agent for a powerful drow lord, hired to assassinate a rival or key figure in the narrative.\n* The monster could possess some kind of ancient relic, attracting those who seek its power.\n\n**Note:** This is just a sample monster, using D&D 5e rules as a basis for its creation. The lore, abilities, and appearance can be tailored and expanded upon further.',
        },
        { text: "input: Main Character (Male)" },
        {
            text: "output: ## Name:  Aric \n\n**Appearance:** \n\n* **Age:** 24\n* **Height:** 6'1\"\n* **Weight:** 180 lbs\n* **Build:**  Muscular, athletic build. Tall and broad-shouldered, lean but strong\n* **Hair:** Short, messy, and dark brown, often dishevelled from travel. He sometimes ties it back with a simple leather strap. \n* **Eyes:** Deep-set, striking blue, full of intelligence and a hint of weariness. \n* **Clothing:** Aric favours practicality over fashion:\n    * Leather jerkin with multiple pouches and buckles.  Often has worn patches or repairs.\n    * Worn linen tunic beneath the jerkin.\n    * Well-worn brown trousers secured by a thick leather belt.\n    * Sturdy, ankle-high boots made of thick leather. \n* **Accessories:** \n    * A silver locket worn on a leather cord around his neck, containing a small vial of clear liquid. \n    * A pair of well-worn leather gauntlets he keeps on most of the time, emblazoned with the symbol of a shield and an arrow. \n\n**Personality:** \n\n* **Charismatic:** Aric has a natural charm, easily drawing people into conversation.  He is witty and likes to tell stories. \n* **Observant:** He notices details others often miss and uses this keen observation to his advantage in any situation. \n* **Courageous:** While cautious, he is not afraid to step into danger when necessary. \n* **Humorous:** Aric has a dry sense of humour and enjoys making light of situations, even in stressful times.\n* **Conflicted:** He carries a deep sense of inner conflict,  holding secrets he is reluctant to share. \n\n**Skills:**\n\n* **Archery:** Aric is an expert archer with incredible accuracy and speed. He is proficient with bows and arrows of various sizes, preferring a simple longbow. \n* **Survivalism:**  Aric has spent many years in the wilds and is a master of wilderness survival,  able to track, hunt, build shelters, and navigate difficult terrain.\n* **Tracking:** He is exceptionally skilled at following trails and using environmental clues to find his way.\n* **Hand-to-Hand Combat:** While preferring his bow, Aric is trained in close-combat techniques and proficient with a dagger.\n* **Leadership:** Despite his carefree persona, Aric has the innate charisma and decision-making skills to inspire trust and leadership in others. \n\n**Background:**\n\nAric grew up on the outskirts of a forest bordering a larger human city. He honed his skills in the wild, living a nomadic life until fate forced him to leave his home and seek out a new path. He possesses a mysterious past, often hinting at traumatic experiences that haunt him, leaving a veil of unspoken sorrow around his outward charm.  He is fiercely protective of his loved ones, often putting himself at risk to shield others from danger.\n\n**General Narrative:** \n\nAric's journey might follow him as he unravels the secrets of his past, facing down personal demons and dangers he has been trying to outrun. He may find himself entangled with powerful organizations or factions, facing the complex choices that define right and wrong in a world of magic and shadow.  His personal struggles are likely intertwined with his actions, revealing a depth of character that may be surprising to those who judge him by his outward demeanor.",
        },
        { text: `input: ${charType}` },
        { text: "output: " },
    ];

    const result = await model.generateContent({
        contents: [
            {
                role: "user",
                parts: [
                    {
                        text: "System prompt: You are an experienced Dungeons and Dragons 5e Dungeon Master with many years of experience creating the best and most epic adventures. You are well versed in the game's mechanics and have a deep understanding of the world around you. Your goal is to create the best and most epic characters to adventure in the world's you create.",
                    },
                ],
            },
            {
                role: "model",
                parts: [{ text: "Understood." }],
            },
            { role: "user", parts },
        ],
        generationConfig,
    });
    // console.log(result.response.text());
    return result.response.text();
}

module.exports = {
    createChar,
};
