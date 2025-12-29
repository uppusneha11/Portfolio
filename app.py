from flask import Flask, render_template, jsonify

app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = 'your-secret-key-here'

@app.route('/')
def home():
    """Render the main portfolio page"""
    return render_template('index.html')

@app.route('/api/skills')
def get_skills():
    """Return skills data organized by categories - order is preserved"""
    # Using a list to guarantee order preservation
    skills = [
        {'category': 'Programming', 'items': ['Python', 'R', 'SQL', 'Java']},
        {'category': 'Data Engineering', 'items': ['ETL', 'BeautifulSoup (Web Scraping)', 'Data Pipelines']},
        {'category': 'Data Science', 'items': ['Pandas', 'NumPy', 'Scikit-learn', 'Seaborn', 'PyTorch', 'Tensorflow', 'Keras', 'Matplotlib']},
        {'category': 'Databases', 'items': ['MySQL', 'PostgreSQL']},
        {'category': 'Tools & Platforms', 'items': ['Tableau', 'PowerBI', 'GitHub', 'Salesforce', 'Jira', 'Microsoft Excel', 'APIs', 'MATLAB', 'Docker', 'Firebase', 'fly.io']},
        {'category': 'IDEs', 'items': ['VS Code', 'Google Colab', 'Jupyter Notebook']},
        {'category': 'Soft Skills', 'items': ['Team Collaboration', 'Problem-Solving', 'Communication (Written & Verbal)', 'Time Management', 'Adaptability', 'Leadership']}
    ]
    return jsonify({'success': True, 'skills': skills})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

