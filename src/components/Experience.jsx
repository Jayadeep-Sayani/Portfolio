import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import { useMediaQuery } from "@mui/material";
import AnimatedGradientBorder from "../misc/AnimatedGradientBorder";
export const Experience = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <div className="line-with-diamond">
        <div className="diamond"></div>
      </div>

      <Timeline position={isMobile ? "right" : "alternate"}>
        
          
        {[
          {
            date: "DEC 2024 - PRESENT",
            role: "Computer Team",
            company: "UVic Satellite Design",
          },
          {
            date: "SEPT 2024 - DEC 2024",
            role: "Director of IT",
            company: "UVic Engineering and Computer Science Society",
          },
          {
            date: "JUL 2024 - SEPT 2024",
            role: "Fellowship",
            company: "Headstarter",
          },
          {
            date: "2022 - 2024",
            role: "Ambassador",
            company: "HighTechU",
          },
          {
            date: "2022 - 2024",
            role: "Team Generalist",
            company: "FTC Robotics Team",
          },
        ].map((exp, index) => (
          <TimelineItem key={index}>
            {isMobile && (<TimelineOppositeContent style={{ flex: "0.1", paddingLeft: "0px" }} ></TimelineOppositeContent>)}
            <TimelineSeparator>
              <TimelineDot sx={{ backgroundColor: "#3aff7c" }} />
              {index !== 4 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent
              sx={{
                display: "flex",
                justifyContent: isMobile ? "flex-start" : index % 2 === 0 ? "flex-start" : "flex-end",
              }}
            >
              <AnimatedGradientBorder>
                <div className="experience-box">
                  <div className="experience-date">{exp.date}</div>
                  <div className="experience-role">{exp.role}</div>
                  <div className="experience-company">{exp.company}</div>
                </div>
              </AnimatedGradientBorder>
            </TimelineContent>

          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};
