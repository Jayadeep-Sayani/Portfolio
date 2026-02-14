import React, { useState } from 'react'

export const Projects = () => {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    {
      image: "/Portfolio/ScholarLog.PNG",
      alt: "ScholarLog",
      type: "WEB PROJECT",
      title: "ScholarLog",
      description: "Empowered 300+ students to track GPAs by developing a web platform through React and Node.js. Designed a user-friendly interface across 10+ pages using TailwindCSS and ShadCN for a smooth experience. Implemented core application logic using JavaScript and TypeScript, improving code maintainability, type safety, and overall development reliability.",
      tech: ["React", "JavaScript", "TypeScript", "Node.js", "CSS", "TailwindCSS", "ShadCN"],
      link: "https://github.com",
      linkText: "View Project →"
    },
    {
      image: "/Portfolio/AbsoluteSafety.PNG",
      alt: "Absolute Safety",
      type: "SAFETY PROJECT",
      title: "Absolute Safety",
      description: "A safety-first navigation application that analyzes multiple safety factors to route users through non-isolated, well-lit, low crime areas. The system uses Dijkstra's algorithm with custom safety weights prioritizing crime rate, street lighting, and distance. Safety is prioritized over speed, choosing slightly longer routes to avoid high-risk areas. Our mission is to reduce street assaults by empowering people with smarter, safety-first navigation. Navigate with confidence. Arrive safely.",
      tech: ["React", "Python", "Flask", "MapLibre", "NetworkX", "OpenStreetMap", "Dijkstra's Algorithm"],
      link: "https://www.youtube.com/watch?v=eUmAh5nbjgM",
      linkText: "View Demo →"
    },
    {
      image: "/Portfolio/NoStutta.jpg",
      alt: "NoStutta",
      type: "HACKATHON PROJECT",
      title: "NoStutta",
      description: "A tool designed to help over 70 million people worldwide who live with diagnosed stuttering practice speaking in a safe, judgment-free environment. When a stutter occurs, the tool provides real-time visual cues to slow down and breathe, helping reinforce calm and controlled speech patterns through repetition. The tool offers accessible practice anytime, anywhere, supporting both diagnosed and undiagnosed stutterers with a scalable way to bring therapy-inspired techniques into daily practice.",
      tech: ["Python", "Flask", "Gemini API", "Whisper"],
      link: "https://github.com/CodingUser14/Stutter_Support",
      linkText: "View Project →",
      achievement: "3rd Place - TELUS AI for Innovation Hackathon"
    },
    {
      image: "/Portfolio/AI Interview Coach.PNG",
      alt: "AI Interview Coach",
      type: "HACKATHON PROJECT",
      title: "AI Interview Coach",
      description: "Built an AI-powered interview coach at uOttaHack that simulates real interview pressure and provides actionable, personalized feedback. Users enter a target company and job description, and Gemini generates tailored interview questions. The system features a live mock interview with an AI interviewer powered by ElevenLabs for human-like voice interaction. Real-time performance analysis includes body language and eye contact tracking with OpenCV, plus speech behavior analysis using AssemblyAI. All signals are scored and fed into Gemini to generate detailed feedback, delivered both visually and verbally.",
      tech: ["Python", "Flask", "Gemini", "ElevenLabs", "OpenCV", "AssemblyAI", "Sentry"],
      link: "https://lnkd.in/gKPq5rFk",
      linkText: "View Project →"
    },
    {
      image: "/Portfolio/studybuddies.png",
      alt: "StudyBuddies",
      type: "A.I. PROJECT",
      title: "StudyBuddies",
      description: "Aimed towards elementary school students, the app provides a fun and interesting way to test your knowledge. You just have to input a topic as the prompt and the app connects to OpenAI API for some multiple choice questions. You can recieve coins for completing quizzes, and even buy pets!",
      tech: ["React", "OpenAI API", "Node.js", "Vite", "Git"],
      link: "https://github.com/PABLO-HACKERS/studybuddies",
      linkText: "View Project →",
      achievement: "2nd Place - VikeLabs Hackathon"
    }
  ];

  return (
    <div className='projects' id="projects">
      <h1>My Works</h1>
      <div className="line-with-diamond">
        <div className="diamond"></div>
      </div>
      <div className="projects-list-container">
        {projects.map((project, index) => (
          <div key={index} className={`project-item ${index % 2 === 1 ? 'reverse' : ''}`}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.alt} />
            </div>
            <div className="project-content">
              <div className="project-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                  <div className="project-type-badge">{project.type}</div>
                  {project.achievement && (
                    <div className="project-achievement-badge">
                      ⭐ {project.achievement}
                    </div>
                  )}
                </div>
                <h3 className="project-title">{project.title}</h3>
              </div>
              <div className="project-description-wrapper">
                <p className={`project-description ${expanded[index] ? 'expanded' : 'collapsed'}`}>
                  {project.description}
                </p>
                <button 
                  className="project-read-more"
                  onClick={() => toggleExpand(index)}
                >
                  {expanded[index] ? 'Read less' : 'Read more'}
                </button>
              </div>
              <div className="project-footer">
                <div className="project-tech-stacks">
                  <div className="project-tech-stacks-label">Technologies:</div>
                  <div className="project-tech-stacks-tags">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                  {project.linkText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
  </div>
  )
}
