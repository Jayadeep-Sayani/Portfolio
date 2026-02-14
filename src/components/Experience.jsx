import React from "react";
import { useMediaQuery } from "@mui/material";
import { Code, Palette } from "lucide-react";

export const Experience = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const experiences = [
    {
      date: "MAY 2025 - AUG 2025",
      role: "Full Stack Developer Intern",
      company: "CareLife",
      location: "Remote, Canada",
      description: [
        "Developed responsive web pages for the Care Life Portal using Angular and Ionic, enhancing client need tracking and user accessibility.",
        "Developed along with the backend team to create a JavaScript automation tool using REST APIs and file system operations to monitor 200+ fall detection cameras, which improved real-time incident tracking and reduced manual monitoring efforts.",
        "Enhanced system reliability by flagging cameras within 2 minutes of failure through notifications in JavaScript.",
        "Participated in sprint planning and code reviews using Agile workflow."
      ],
      skills: ["Angular", "Ionic", "JavaScript", "REST APIs", "Agile", "File System Operations"],
      icon: Code,
    },
    {
      date: "JAN 2025 - DEC 2025",
      role: "Freelance Website Designer",
      company: "Self-Employed",
      location: "Remote",
      description: [
        "Designed and developed websites for UNUHR Inc., including web page creation, SEO optimization, and implementation of design principles aligned with client requirements.",
        "Created and maintained website for Jamaican Canadian Bar Association (JCBA), ensuring responsive design and optimal user experience.",
        "Collaborated with clients to understand their vision and translate requirements into functional, visually appealing websites."
      ],
      skills: ["WordPress", "WordPress Plugins", "SEO", "Web Design", "Client Relations"],
      icon: Palette,
    },
  ];

  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="line-with-diamond">
        <div className="diamond"></div>
      </div>

      <div className="experience-cards-container">
        {experiences.map((exp, index) => {
          const IconComponent = exp.icon;
          return (
            <div key={index} className="experience-card">
              <div className="experience-card-icon">
                <IconComponent size={24} />
              </div>
              <div className="experience-card-content">
                <div className="experience-role">{exp.role}</div>
                <div className="experience-company">{exp.company}</div>
                {exp.location && (
                  <div className="experience-location">{exp.location}</div>
                )}
                <div className="experience-date">{exp.date}</div>
                
                {exp.description && (
                  <div className="experience-description">
                    <ul className="experience-bullets">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.skills && (
                  <div className="experience-skills">
                    <div className="experience-skills-label">Technologies:</div>
                    <div className="experience-skills-tags">
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="experience-skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
