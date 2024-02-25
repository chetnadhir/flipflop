let isPaused = false;
let speech = null;

document.getElementById('textToSpeechButton').addEventListener('click', () => {
    const text = document.body.innerText;
    if (!speech) {
        speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    } else {
        if (isPaused) {
            speechSynthesis.resume();
            isPaused = false;
        } else {
            speechSynthesis.pause();
            isPaused = true;
        }
    }
});

// Mobile
document.body.addEventListener('click', () => {
    if (!speech) {
        // Trigger speech synthesis on the first user interaction
        const text = document.body.innerText;
        speech = new SpeechSynthesisUtterance(text);
        speechSynthesis.speak(speech);
    }
});
