const phrases = ["A Developer,", "A Web Designer,", "A Markup Engineer &", "A Musician."];
let currentPhraseIndex = 0;
const typedTextElement = document.getElementById("typed-text");

function typePhrase() {
    typedTextElement.textContent = phrases[currentPhraseIndex];
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
}

setInterval(typePhrase, 2000); // Change text every 2 seconds
typePhrase(); // Initial call
