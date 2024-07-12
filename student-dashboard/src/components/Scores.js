import React from 'react';
import './Scores.css'; // Importing the CSS file for styling

const Scores = () => {
  const dummyScores = [
    { subject: 'Math', quarterly: 'A', halfYearly: 'B', final: 'A' },
    { subject: 'Science', quarterly: 'A', halfYearly: 'A', final: 'A' },
    { subject: 'English', quarterly: 'B', halfYearly: 'B', final: 'C' },
    { subject: 'History', quarterly: 'A', halfYearly: 'C', final: 'B' },
    { subject: 'Geography', quarterly: 'B', halfYearly: 'B', final: 'B' },
    { subject: 'Physics', quarterly: 'A', halfYearly: 'A', final: 'A' },
    { subject: 'Chemistry', quarterly: 'B', halfYearly: 'A', final: 'A' },
  ];

  const kpiData = {
    GradeA: 10,
    GradeB: 8,
    GradeC: 3,
    GradeD: 2
  };

  return (
    <div className="scores">
      <div className="kpi-cards">
        {Object.keys(kpiData).map((key) => (
          <div key={key} className="kpi-card">
            <h3>{key}</h3>
            <p>{kpiData[key]}</p>
          </div>
        ))}
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Subject</th>
            <th>Quarterly Exam</th>
            <th>Half-Yearly Exam</th>
            <th>Final Exam</th>
          </tr>
        </thead>
        <tbody>
          {dummyScores.map((score, index) => (
            <tr key={index}>
              <td>{score.subject}</td>
              <td>{score.quarterly}</td>
              <td>{score.halfYearly}</td>
              <td>{score.final}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Scores;