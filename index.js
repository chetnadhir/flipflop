/*let isPaused = false;
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


