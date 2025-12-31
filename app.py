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
    skills = [
        {'category': 'Programming', 'items': ['Python', 'R', 'SQL', 'Java', 'HTML/CSS']},
        {'category': 'Data Engineering', 'items': ['ETL Pipelines', 'BeautifulSoup (Web Scraping)', 'Apache Airflow', 'Docker', 'Data Validation']},
        {'category': 'Data Visualization', 'items': ['Tableau','Power BI','Plotly', 'Matplotlib', 'Seaborn']},
        {'category': 'Data Science', 'items': ['Pandas', 'NumPy', 'Scikit-learn', 'PyTorch', 'Tensorflow', 'Keras', 'API']},
        {'category': 'Databases & Cloud', 'items': ['MySQL', 'PostgreSQL', 'Google Firebase', 'Firestore', 'AWS']},
        {'category': 'Tools & Platforms', 'items': ['GitHub', 'Microsoft Office', 'Salesforce', 'Jira', 'MATLAB', 'fly.io']},
        {'category': 'IDEs', 'items': ['VS Code', 'Google Colab', 'Jupyter Notebook']},
        {'category': 'Soft Skills', 'items': ['Team Collaboration', 'Problem-Solving', 'Communication (Written & Verbal)', 'Time Management', 'Adaptability', 'Leadership']}
    ]
    return jsonify({'success': True, 'skills': skills})

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)

