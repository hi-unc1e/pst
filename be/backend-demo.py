import os
from flask import Flask, request, jsonify, send_from_directory

app = Flask(__name__, static_folder='../fe/dist', static_url_path='')

@app.route('/generate-payload', methods=['POST'])
def generate_payload():
    ip = request.json['ip']
    port = request.json['port']
    result = f"Generated Payload: {ip}:{port}"
    return jsonify({'result': result})

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve_vue_app(path):
    if path and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
