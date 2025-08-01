# AI Resume Scanner for Skill Validation & Best Job Fit

## Overview

This project introduces an AI-powered platform that automates resume parsing, validates claimed skills via adaptive quizzes, and recommends jobs accordingly. Built with state-of-the-art NLP techniques, it bridges the gap between candidate-reported skills and actual expertise, ensuring better hiring outcomes for recruiters and a more targeted job search for candidates.

### Prerequisites:
- Install Python 3.9+, Node.js, PostgreSQL
- Setup Docker and VS Code

### Backend Setup:
bash
cd backend
python -m venv venv
source venv/bin/activate  # or venv\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
### Frontend Setup:
bash
cd frontend
npm install
npm start
