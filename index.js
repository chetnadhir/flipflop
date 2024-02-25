const textToSpeechButton = document.getElementById('textToSpeechButton');
let isPaused = false;
let speech = null;
let utteranceIndex = 0;
let textChunks = [];

function selectNextChunk() {
    const range = document.createRange();
    const textNode = textChunks[utteranceIndex];
    if (textNode) {
        range.selectNodeContents(textNode);
        window.getSelection().removeAllRanges();
        window.getSelection().addRange(range);
    }
}

function startTextToSpeech() {
    const text = document.body.innerText;
    textChunks = text.split(' ').map(word => document.createTextNode(word + ' '));
    utteranceIndex = 0;

    if (!speech) {
        speech = new SpeechSynthesisUtterance();
        speech.text = text;
        speech.onend = () => {
            if (utteranceIndex < textChunks.length - 1) {
                utteranceIndex++;
                selectNextChunk();
                speechSynthesis.speak(speech);
            } else {
                isPaused = false;
                speech = null;
            }
        };
    }

    if (!isPaused) {
        speechSynthesis.speak(speech);
    } else {
        speechSynthesis.resume();
    }
}

function pauseTextToSpeech() {
    speechSynthesis.pause();
    isPaused = true;
}

textToSpeechButton.addEventListener('click', () => {
    if (!speech || isPaused) {
        startTextToSpeech();
    } else {
        pauseTextToSpeech();
    }
});

