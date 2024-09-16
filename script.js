function displayQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = generate();
}

function generate() {
    let quote = "";
    let template = Math.floor(Math.random() * 3);

    switch(template) {
        case 0:
            quote = pickRandom("scapegoat");
            break;

        case 1:
            quote = "lol";
            break;

        case 2:
            quote = "gahahah";
            break;
        
        default:
            quote = "error: invalid template";
            break;
    }

    return quote;
}

function pickRandom(type) {
    let scapegoats = ["1", "2", "3"];

    let returnString = "";

    switch(type) {
        case "scapegoat":
            returnString = scapegoats[Math.floor(Math.random() * scapegoats.length)];
            break;

        default:
            returnString = "error: invalid type";
            break;
    }

    return returnString;
}