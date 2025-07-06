import React from 'react';

const skills = [
  { name: 'HTML', level: 90 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 70 },
  { name: 'PHP', level: 75 },
  { name: 'React.Js', level: 75 },
  { name: 'Node.Js', level: 70 },
  { name: 'MYSQL & MONGODB', level: 75 },
];

function Skill() {
  return (
    <section className="skills-section" id="skills">
      <h2 className="skills-title">My <span className="blue-txt">Skills</span></h2>
      <p className="hero-subtitle">Here is my skills to represent my Expertise</p>

      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill-circle" key={index}>
            <svg viewBox="0 0 36 36" className="circular-chart">
              <path
                className="circle-bg"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                className="circle"
                strokeDasharray={`${skill.level}, 100`}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <text x="18" y="20.35" className="percentage">{skill.level}%</text>
            </svg>
            <p className="skill-name">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skill;
