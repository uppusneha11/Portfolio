from flask import Flask, render_template, jsonify
import requests
from datetime import datetime

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'

@app.route('/')
def home():
    """Render the main portfolio page"""
    return render_template('index.html')

@app.route('/api/github/<username>')
def github_repos(username):
    """Fetch GitHub repositories for a user"""
    try:
        response = requests.get(f'https://api.github.com/users/{username}/repos')
        if response.status_code == 200:
            repos = response.json()
            # Get top 6 most recently updated repos
            sorted_repos = sorted(repos, key=lambda x: x['updated_at'], reverse=True)[:6]
            return jsonify({
                'success': True,
                'repos': sorted_repos
            })
        return jsonify({'success': False, 'error': 'User not found'}), 404
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/quote')
def get_quote():
    """Fetch an inspiring quote"""
    try:
        response = requests.get('https://api.quotable.io/random?tags=technology|inspirational')
        if response.status_code == 200:
            return jsonify({
                'success': True,
                'quote': response.json()
            })
        return jsonify({'success': False, 'error': 'Could not fetch quote'}), 500
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/skills')
def get_skills():
    """Return skills data"""
    skills = [
        {'name': 'Python', 'level': 90, 'category': 'backend'},
        {'name': 'JavaScript', 'level': 85, 'category': 'frontend'},
        {'name': 'HTML/CSS', 'level': 95, 'category': 'frontend'},
        {'name': 'Bootstrap', 'level': 88, 'category': 'frontend'},
        {'name': 'Flask', 'level': 85, 'category': 'backend'},
        {'name': 'React', 'level': 80, 'category': 'frontend'},
        {'name': 'SQL', 'level': 82, 'category': 'backend'},
        {'name': 'Git', 'level': 87, 'category': 'tools'},
    ]
    return jsonify({'success': True, 'skills': skills})

if __name__ == '__main__':
    app.run(debug=True, port=5000)

