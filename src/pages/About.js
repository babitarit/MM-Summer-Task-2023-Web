import React from 'react'
import Layout from '../components/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
   <Layout>
   <Box sx={{
    my: 15,
    textAlign:'center',
    "& h3":{
      fontWeight:"bold",
      my:2,
      p:3,
  
    },
    "& p":{
      textAlign:"justify",
    },
    "@media(max-width:600px)":{
      mt:0,
      "& h3":{
fontSize:"2rem",
      },
    }
   }}>
    <Typography variant='h3'>
    NEWS WEBSITE AND TOP HEADLINES
      
    </Typography>
    <p> Tech experts have argued that the chatbot can, at times, 'hallucinate' and provide factually incorrect information with such confidence that the user might believe it to be true. Hence, ChatGPT can be used to spread misinformation, knowingly, or even unknowingly. And can even get people in trouble if they rely on the AI chatbot with blind eyes and do not double-check its responses.

Something similar happened with a lawyer in New York, who used ChatGPT for legal research purposes and is now facing trouble at a court hearing.</p>
<br/>
<p>Tech experts have argued that the chatbot can, at times, 'hallucinate' and provide factually incorrect information with such confidence that the user might believe it to be true. Hence, ChatGPT can be used to spread misinformation, knowingly, or even unknowingly. And can even get people in trouble if they rely on the AI chatbot with blind eyes and do not double-check its responses.

Something similar happened with a lawyer in New York, who used ChatGPT for legal research purposes and is now facing trouble at a court hearing.</p>

   </Box>
   </Layout>
  )
}

export default About