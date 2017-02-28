import {
    SpeechRecognition,
    SpeechRecognitionOptions,
    SpeechRecognitionTranscription
} from 'nativescript-speech-recognition';

let speechRec = new SpeechRecognition();

export function start() {
    speechRec.available().then((result: boolean) => {
        if (!result) {
            alert('no recognition');
            return;
        }

        speechRec.startListening({
            locale: "en-US",
            onResult: (transcript: SpeechRecognitionTranscription) => {
                alert(transcript.text);
            }
        })        

    })
}

export function stop() {
    speechRec.stopListening();
}