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
  const range = document.createRange();
    range.selectNodeContents(document.body);
    window.getSelection().removeAllRanges(); // Clear previous selection
    window.getSelection().addRange(range); // Select the new text
});
