from moviepy.config import try_cmd
import speech_recognition as sr
import moviepy.editor
from pydub import AudioSegment
from flask import Flask
from ibm_watson import SpeechToTextV1
from ibm_cloud_sdk_core.authenticators import IAMAuthenticator
import subprocess
import os


app = Flask(__name__)


@app.route("/transcribe/<filename>")
def transcribevideo(filename):

    video = moviepy.editor.VideoFileClip(filename)
    receiveaudio = video.audio
    audiofile = filename[0:-4] + ".wav"
    receiveaudio.write_audiofile(audiofile)

    getRecognizer = sr.Recognizer()

    with sr.AudioFile(audiofile) as source:
        getRecognizer.adjust_for_ambient_noise(source)
        print("Converting Audio File to Text------")
        audio = getRecognizer.record(source, 60)

        try:
            print("Converted Audio is :" + getRecognizer.recognize_google(audio))

        except Exception as e:
            print(e)


if __name__ == "__main__":
    transcribevideo(filename="file.mp4")
