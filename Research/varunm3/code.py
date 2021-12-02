from flask import Flask
app = flask (__name__)
@app.route("/transcribe/<filename>")
def transcribevideo(filename):

    video = moviepy.editor.VideofileClip(filename)
    receiveaudio = video.audio
    audiofile = filename [0: -4] + ".mp3"
    receiveaudio.write_audiofile(audiofile)

    getRecognizer = sr.Recognizer()

    with sr.AudioFile(audiofile) as source:
        print("Converting audio to text")
        audio = getRecognizer.record(source)

        try:
            print("Converted audio is :" +getRecognizer.recognize_google(audio))
        
        except Exception as e:
            print(e)