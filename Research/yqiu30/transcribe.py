import speech_recognition as sr
r = sr.Recognizer()

job = sr.AudioFile("harvard.wav")
with job as source:
    audio = r.record(source)
print(r.recognize_google(audio))
