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
// Check if SpeechRecognition is available in the browser
if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    // Request permission for speech recognition
    navigator.permissions.query({ name: 'microphone' }).then((result) => {
        if (result.state === 'granted') {
            // Permission already granted, initialize SpeechRecognition
            const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
            recognition.lang = 'en-US'; // Set language
            // Other recognition settings...

            // Start recognition...
        } else if (result.state === 'prompt') {
            // Permission not yet granted, prompt the user
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then(() => {
                    // Permission granted, initialize SpeechRecognition
                    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
                    recognition.lang = 'en-US'; // Set language
                    // Other recognition settings...

                    // Start recognition...
                })
                .catch((error) => {
                    console.error('Permission denied for audio playback or speech synthesis:', error);
                });
        }
    });
} else {
    console.error('SpeechRecognition is not supported in this browser.');
}

