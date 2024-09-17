// Generates and displays quote
// Activates when user clicks the "Generate" button
function displayQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = generate();
}

// Share button implemented using the Web Share API
function share() {
    const quoteElement = document.getElementById("quote");
    let quote = quoteElement.textContent;

    if (navigator.share) {
        const shareData = {
            title: document.title,
            url: document.location.href,
            text: quote
        }
        if (navigator.canShare(shareData)) {
            navigator.share(shareData)
            .then(() => console.log("Shared successfully!"))
            .catch((error) => console.error("Sharing failed: ", error));
        }
    }
    else {

    }
}

// Generates a quote
function generate() {
    let quote = "";
    let template = Math.floor(Math.random() * 3);

    switch(template) {
        case 0:
            quote = pickRandom("perpetrator") + pickRandom("intransitive") + " and " + pickRandom("transitive") + " " + pickRandom("target") + "!";
            break;

        case 1:
            quote = pickRandom("perpetrator") + "bringing " + pickRandom("adjective") + " " + pickRandom("big_bad") + " and " + pickRandom("adjective") 
                + " " + pickRandom("big_bad") + " into " + pickRandom("location") + "!";
            break;

        case 2:
            quote = pickRandom("perpetrator") + pickRandom("transitive") + " " + pickRandom("target") + " and " + pickRandom("intransitive") + " in " + pickRandom("location") + "!";
            break;
        
        default:
            quote = "error: invalid template";
            break;
    }

    return quote;
}

// Picks a random string from a specified array
function pickRandom(type) {
    let single_perpetrators = ["Kamala", "Joe Biden", "Hunter Biden", "Antifa", "Big Pharma", "ISIS", "The fake news media"];
    let plural_perpetrators = ["They", "The woke liberals", "Leftist anarchists", "Illegal aliens", "The elites", "The coastal elites", "Terrorists", "Drug cartels", 
        "The people in Washington"];
    let transitive_verb_phrases = ["teaching gender ideology to", "doing transgender surgeries on", "performing abortions on", "castrating"];
    let intransitive_verb_phrases = ["coming over the border", "eating the cats", "eating the dogs", "taking our guns", "CHEATING", "selling drugs", "killing babies"];
    let targets = ["our children", "unborn children", "prisoners", "Hannibal Lecter", "Hunter Biden's laptop", "Hillary's emails"];
    let big_bads = ["gender ideology", "terrorism", "abortion", "pronouns", "neopronouns", "deepfakes", "voter fraud", "fake news", "vaccines"];
    let adjectives = ["nonbinary", "terrorist", "woke", "AI", "illegal", "fake", "groomer", "transgender"];
    let locations = ["our country", "our schools", "women's sports", "Mexico", "America"];

    if (type == "perpetrator") {
        if (Math.floor(Math.random() * 2) == 0) {
            type = "single_perpetrator";
        }
        else {
            type = "plural_perpetrator";
        }
    }

    let returnString = "";

    switch(type) {
        case "single_perpetrator":
            returnString = single_perpetrators[Math.floor(Math.random() * single_perpetrators.length)] + " is ";
            break;
        
        case "plural_perpetrator":
            returnString = plural_perpetrators[Math.floor(Math.random() * plural_perpetrators.length)] + " are ";
            break;

        case "transitive":
            returnString = transitive_verb_phrases[Math.floor(Math.random() * transitive_verb_phrases.length)];
            break;

        case "intransitive":
            returnString = intransitive_verb_phrases[Math.floor(Math.random() * intransitive_verb_phrases.length)];
            break;

        case "target":
            returnString = targets[Math.floor(Math.random() * targets.length)];
            break;

        case "big_bad":
            returnString = big_bads[Math.floor(Math.random() * big_bads.length)];
            break;

        case "adjective":
            returnString = adjectives[Math.floor(Math.random() * adjectives.length)];
            break;

        case "location":
            returnString = locations[Math.floor(Math.random() * locations.length)];
            break;

        default:
            returnString = "error: invalid type";
            break;
    }

    return returnString;
}