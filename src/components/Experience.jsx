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
    <div className='experience'>
    <h1>Experience</h1>
    <div class="line-with-diamond">
        <div class="diamond"></div>
    </div>

    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot variant="outlined" sx={{ borderColor: '#FF7130' }} />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
            <AnimatedGradientBorder>
                <div className="experience-box">
                    <div>2017 - 2020</div>
                    <div>Software Engineer</div>
                    <div>ABC Corp.</div>
                </div>
            </AnimatedGradientBorder>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent><div>e</div></TimelineContent>
      </TimelineItem>
    </Timeline>
  
</div>
  )
}
