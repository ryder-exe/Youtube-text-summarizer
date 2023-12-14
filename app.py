from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import pipeline
from youtube_transcript_api import YouTubeTranscriptApi

app = Flask(__name__)
CORS(app)

summarizer = pipeline('summarization')

@app.route('/')
def index():
    return "Hello, Flask is running!"

@app.route('/test', methods=['POST'])
def test():
    global summarizer
    data = request.get_json()
    youtube_video = data.get('ytlink')

    video_id = youtube_video.split("=")[1]

    transcript = YouTubeTranscriptApi.get_transcript(video_id)

    result = ""
    for i in transcript:
        result += ' ' + i['text']

    num_iters = int(len(result) / 1000)
    summarized_text = []
    for i in range(0, num_iters + 1):
        start = i * 1000
        end = (i + 1) * 1000
        out = summarizer(result[start:end])
        out = out[0]
        out = out['summary_text']
        summarized_text.append(out)

    return jsonify({'summarized_text': summarized_text})

if __name__ == "__main__":
    app.run(debug=True)
