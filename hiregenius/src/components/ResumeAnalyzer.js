import React, { useState } from 'react';
import { Box, Typography, Card, CircularProgress, Fade, Chip, Button } from '@mui/material';
import { getDocument, GlobalWorkerOptions } from 'pdfjs-dist';
import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';
import { useNavigate } from 'react-router-dom';

GlobalWorkerOptions.workerSrc = pdfjsWorker;

function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const ResumeAnalyzer = () => {
  const [skills, setSkills] = useState([]);
  const [missingSkills, setMissingSkills] = useState([]);
  const [fileName, setFileName] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleStartQuiz = () => {
    navigate('/quiz', { state: { skills } });
  };

  const skillKeywords = [
    'JavaScript', 'React', 'Node', 'Python', 'Java', 'SQL', 'AWS', 'Docker',
    'HTML', 'CSS', 'Angular', 'Vue.js', 'TypeScript', 'Git', 'GitHub', 'GitLab',
    'Jenkins', 'DevOps', 'Linux', 'Kubernetes', 'PHP', 'Ruby', 'Swift',
    'C++', 'C#', 'Go', 'Scala', 'R', 'Machine Learning', 'Data Science',
    'Artificial Intelligence', 'Data Structures', 'Algorithms', 'MySQL', 'PostgreSQL',
    'MongoDB', 'NoSQL', 'Redis', 'GraphQL', 'Firebase', 'AWS Lambda', 'Google Cloud',
    'Azure', 'Terraform', 'JIRA', 'Trello', 'Agile', 'Scrum', 'RESTful APIs',
    'Web Development', 'Mobile Development', 'Software Engineering', 'Problem Solving',
    'Leadership', 'Teamwork', 'Communication', 'Project Management', 'Time Management'
  ];

  const extractSkillsFromText = (text) => {
    const foundSkills = skillKeywords.filter(skill => {
      const safeSkill = escapeRegExp(skill);  // escape any regex special characters
      const regex = new RegExp(`\\b${safeSkill}\\b`, 'i');
      return regex.test(text);
    });
  
    const uniqueSkills = [...new Set(foundSkills)].sort();
    const missing = skillKeywords.filter(skill => !uniqueSkills.includes(skill));
  
    setSkills(uniqueSkills);
    setMissingSkills(missing);
    setLoading(false);
  };
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    setFileName(file.name);
    setLoading(true);

    if (file.type === 'application/pdf') {
      const fileReader = new FileReader();
      fileReader.onload = function () {
        const typedarray = new Uint8Array(this.result);

        getDocument(typedarray).promise.then((pdf) => {
          let textContent = '';
          const promises = [];

          for (let i = 1; i <= pdf.numPages; i++) {
            promises.push(
              pdf.getPage(i).then((page) =>
                page.getTextContent().then((text) => {
                  text.items.forEach((item) => {
                    textContent += item.str + ' ';
                  });
                })
              )
            );
          }

          Promise.all(promises).then(() => {
            extractSkillsFromText(textContent);
          });
        });
      };
      fileReader.readAsArrayBuffer(file);
    } else {
      alert('Please upload a PDF file.');
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        background: 'linear-gradient(135deg, #0a0f33, #1565C0)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: '60px',
        color: '#fff',
      }}
    >
      <Typography variant="h4" gutterBottom>Resume Analyzer</Typography>

      <input type="file" accept=".pdf" onChange={handleFileUpload} style={{ margin: '20px 0' }} />
      {fileName && <Typography variant="body1">Uploaded: {fileName}</Typography>}

      {loading ? (
        <CircularProgress sx={{ color: '#fff', marginTop: 4 }} />
      ) : (
        <Fade in={skills.length > 0}>
          <Card sx={{ p: 3, mt: 4, width: 600, backgroundColor: '#f5f5f5', color: '#333' }}>
            <Typography variant="h6" gutterBottom>Skills Found in Resume:</Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {skills.map((skill, index) => (
                <Chip key={index} label={skill} color="primary" variant="outlined" />
              ))}
            </Box>

            <Typography variant="body2" sx={{ mt: 2 }}>
              Missing recommended skills:
              <br />
              <em>{missingSkills.slice(0, 10).join(', ')}{missingSkills.length > 10 && '...'}</em>
            </Typography>

            {skills.length > 0 && (
  <Button onClick={handleStartQuiz} variant="contained" sx={{ mt: 3 }}>
    Start Quiz
  </Button>
)}

          </Card>
        </Fade>
      )}
    </Box>
  );
};

export default ResumeAnalyzer;
