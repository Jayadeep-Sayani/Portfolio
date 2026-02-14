import React from "react";
import { useMediaQuery } from "@mui/material";
import { GraduationCap, BookOpen } from "lucide-react";

export const Education = () => {
  const isMobile = useMediaQuery("(max-width:768px)");

  const educationData = [
    {
      date: "SEPT 2024 - APRIL 2028",
      major: "Computer Science",
      option: "Graphics and Gaming",
      institution: "University of Victoria",
      icon: GraduationCap,
      progress: 54,
    },
    {
      date: "SEPT 2024 - APRIL 2028",
      major: "Mathematics",
      option: "Graph Theory",
      institution: "University of Victoria",
      icon: BookOpen,
      progress: 50,
    },
  ];

  return (
    <div className="education" id="education">
      <h1>Education</h1>
      <div className="line-with-diamond">
        <div className="diamond"></div>
      </div>

      <div className="education-grid">
        {educationData.map((edu, index) => {
          const IconComponent = edu.icon;
          return (
            <div key={index} className="education-card">
              <div className="education-card-header">
                <div className="education-icon-wrapper">
                  <IconComponent size={28} />
                </div>
                <div className="education-institution">{edu.institution}</div>
              </div>
              <div className="education-card-body">
                {/* Major is the main focus - incorporates BSc */}
                <div className="education-major-main">BSc. in {edu.major}</div>
                
                {/* Date is 2nd most important */}
                <div className="education-date-main">{edu.date}</div>
                
                {/* Option if exists - above progress */}
                {edu.option && (
                  <div className="education-option">
                    <span className="education-label">Option:</span> {edu.option}
                  </div>
                )}
                
                {/* Progress bar for university degrees - at the bottom */}
                {edu.progress && edu.progress < 100 && (
                  <div className="education-progress-container">
                    <div className="education-progress-label">
                      <span>Progress</span>
                      <span className="education-progress-percent">{edu.progress}%</span>
                    </div>
                    <div className="education-progress-bar">
                      <div 
                        className="education-progress-fill" 
                        style={{ width: `${edu.progress}%` }}
                      ></div>
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
