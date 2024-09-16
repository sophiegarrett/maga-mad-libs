function displayQuote() {
    const quoteElement = document.getElementById("quote");
    quoteElement.textContent = generate();
}

function generate() {
    const quotes = ["Test1", "hi!", "This is a test!!!"];

    let quote = quotes[Math.floor(Math.random() * quotes.length)];

    return quote;
}