import { Event } from '@mui/icons-material'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

const TimeLine = ({ timelines = [] }) => {
  return (
    <div>
        <Timeline position="alternate">
        {timelines.map((item,index) => (
            <TimelineItem key={index}>
 <TimelineOppositeContent
  sx={{ m: "auto 0" }}
  align="right"
  variant="body2"
  color="text.secondary">
              1/2/2002
            </TimelineOppositeContent>

            <TimelineSeparator>
              <TimelineConnector/>
            <TimelineDot>
                <Event />
              </TimelineDot>
              <TimelineConnector />
              </TimelineSeparator >
                
              <TimelineContent sx={{ py: "12px", px: 2 }}>
              <Typography variant="h6">Title</Typography>
              <Typography>description</Typography>
            </TimelineContent>
                
                </TimelineItem>



                
        ))}
    
        </Timeline>
    </div>
  )
}

export default TimeLine;