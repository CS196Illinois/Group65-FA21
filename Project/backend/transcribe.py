# from moviepy.config import try_cmd
# import speech_recognition as sr

# import moviepy.editor

# from flask import Flask
# app = Flask(__name__)


# @app.route("/transcribe/<filename>")
# def transcribevideo(filename):

#     video = moviepy.editor.VideoFileClip(filename)
#     receiveaudio = video.audio
#     audiofile = filename[0:-4] + ".wav"
#     receiveaudio.write_audiofile(audiofile)

#     getRecognizer = sr.Recognizer()

#     with sr.AudioFile(audiofile) as source:

#         print("Converting Audio File to Text------")
#         audio = getRecognizer.record(source)

#         try:
#             print("Converted Audio is :" + getRecognizer.recognize_google(audio))

#         except Exception as e:
#             print(e)


# if __name__ == "__main__":
#     transcribevideo(filename="file.mp4")

from moviepy.config import try_cmd
import moviepy.editor

"""from moviepy.config import try_cmd
import moviepy.editor
import speech_recognition as s
from flask import Flask
import speech_recognition as sr

import moviepy.editor

from flask import Flask
app = Flask(__name__)


@app.route("/transcribe/<filename>")
def transcribevideo(filename):

    video = moviepy.editor.VideoFileClip(filename)
    receiveaudio = video.audio
    audiofile = filename[0:-4] + ".wav"
    receiveaudio.write_audiofile(audiofile)

    getRecognizer = sr.Recognizer()

    with s.AudioFile(audiofile) as source:
        getRecognizer.adjust_for_ambient_noise(source)

        print("Converting Audio File to Text------")
        audio = getRecognizer.record(source)

# importing libraries
import speech_recognition as sr
import os
from pydub import AudioSegment
from pydub.silence import split_on_silence

# create a speech recognition object
r = sr.Recognizer()

# a function that splits the audio file into chunks
# and applies speech recognition


def transcribevideo(path):
    video = moviepy.editor.VideoFileClip(path)
    receiveaudio = video.audio
    audiofile = path[0:-4] + ".wav"
    receiveaudio.write_audiofile(audiofile)
    """
    Splitting the large audio file into chunks
    and apply speech recognition on each of these chunks
    """
    # open the audio file using pydub
    sound = AudioSegment.from_wav(audiofile)
    # split audio sound where silence is 700 miliseconds or more and get chunks
    chunks = split_on_silence(sound,
                              # experiment with this value for your target audio file
                              min_silence_len=500,
                              # adjust this per requirement
                              silence_thresh=sound.dBFS-14,
                              # keep the silence for 1 second, adjustable as well
                              keep_silence=500,
                              )
    folder_name = "audio-chunks"
    # create a directory to store the audio chunks
    if not os.path.isdir(folder_name):
        os.mkdir(folder_name)
    whole_text = ""
    # process each chunk
    for i, audio_chunk in enumerate(chunks, start=1):
        # export audio chunk and save it in
        # the `folder_name` directory.
        chunk_filename = os.path.join(folder_name, f"chunk{i}.wav")
        audio_chunk.export(chunk_filename, format="wav")
        # recognize the chunk
        with sr.AudioFile(chunk_filename) as source:
            audio_listened = r.record(source)
            # try converting it to text
            try:
                text = r.recognize_google(audio_listened)
            except sr.UnknownValueError as e:
                print("Error:", str(e))
            else:
                text = f"{text.capitalize()}. "

        except Exception as e:
            print(e)
"""
# importing libraries
import speech_recognition as sr
import os
from pydub import AudioSegment
from pydub.silence import split_on_silence

# create a speech recognition object
r = sr.Recognizer()

# a function that splits the audio file into chunks
# and applies speech recognition


def transcribevideo(path):
    video = moviepy.editor.VideoFileClip(path)
    receiveaudio = video.audio
    audiofile = path[0:-4] + ".wav"
    receiveaudio.write_audiofile(audiofile)
    """
    Splitting the large audio file into chunks
    and apply speech recognition on each of these chunks
    """
    # open the audio file using pydub
    sound = AudioSegment.from_wav(audiofile)
    # split audio sound where silence is 700 miliseconds or more and get chunks
    chunks = split_on_silence(sound,
                              # experiment with this value for your target audio file
                              min_silence_len=500,
                              # adjust this per requirement
                              silence_thresh=sound.dBFS-14,
                              # keep the silence for 1 second, adjustable as well
                              keep_silence=500,
                              )
    folder_name = "audio-chunks"
    # create a directory to store the audio chunks
    if not os.path.isdir(folder_name):
        os.mkdir(folder_name)
    whole_text = ""
    # process each chunk
    for i, audio_chunk in enumerate(chunks, start=1):
        # export audio chunk and save it in
        # the `folder_name` directory.
        chunk_filename = os.path.join(folder_name, f"chunk{i}.wav")
        audio_chunk.export(chunk_filename, format="wav")
        # recognize the chunk
        with sr.AudioFile(chunk_filename) as source:
            audio_listened = r.record(source)
            # try converting it to text
            try:
                text = r.recognize_google(audio_listened)
            except sr.UnknownValueError as e:
                print("Error:", str(e))
            else:
                text = f"{text.capitalize()}. "
                whole_text += text
    # return the text for all chunks detected
    return whole_text

                whole_text += text
    # return the text for all chunks detected
    return whole_text

print(transcribevideo(path="video.mp4"))