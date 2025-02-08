import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import AnimatedGradientBorder from '../misc/AnimatedGradientBorder';

export const Experience = () => {
  return (
    <div className='experience' id='experience'>
      <h1>Experience</h1>
      <div class="line-with-diamond">
        <div class="diamond"></div>
      </div>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#3aff7c' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <AnimatedGradientBorder>
              <div className="experience-box">
                <div className="experience-date">DEC 2024 - PRESENT</div>
                <div className="experience-role">Computer Team</div>
                <div className="experience-company">UVic Satelite Design</div>
              </div>
            </AnimatedGradientBorder>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#3aff7c" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <AnimatedGradientBorder>
                <div className="experience-box">
                  <div className="experience-date">SEPT 2024 - DEC 2024</div>
                  <div className="experience-role">Director of IT</div>
                  <div className="experience-company">UVic Engineering and Computer Science Society</div>
                </div>
              </AnimatedGradientBorder>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#3aff7c' }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <AnimatedGradientBorder>
              <div className="experience-box">
                <div className="experience-date">JUL 2024 - SEPT 2024</div>
                <div className="experience-role">Fellowship</div>
                <div className="experience-company">Headstarter</div>
              </div>
            </AnimatedGradientBorder>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: "#3aff7c" }} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <AnimatedGradientBorder>
                <div className="experience-box">
                  <div className="experience-date">2022-2024</div>
                  <div className="experience-role">Ambassador</div>
                  <div className="experience-company">HighTechU</div>
                </div>
              </AnimatedGradientBorder>
            </div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot sx={{ backgroundColor: '#3aff7c' }} />
          </TimelineSeparator>
          <TimelineContent>
            <AnimatedGradientBorder>
              <div className="experience-box">
                <div className="experience-date">2022 - 2024</div>
                <div className="experience-role">Team Generalist</div>
                <div className="experience-company">FTC Robotics Team</div>
              </div>
            </AnimatedGradientBorder>
          </TimelineContent>
        </TimelineItem>


      </Timeline>



    </div>
  )
}
