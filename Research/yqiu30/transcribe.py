from moviepy.config import try_cmd
import speech_recognition as sr
import moviepy.editor
video = moviepy.editor.VideoFileClip('file.mp4')
au = video.audio
str = "file.wav"
aa = au.write_audiofile(str)


def main():
    sound = str
    r = sr.Recognizer()

    with sr.AudioFile(sound) as source:
        r. adjust_for_ambient_noise(source)
        print("Converting Audio File to Text------")
        audio = r.record(source)

        try:
            print("Converted Audio is " + r.recognize_google(audio))

        except Exception as e:
            print(e)


if __name__ == "__main__":
    main()
