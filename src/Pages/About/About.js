import React from "react";
import picture from '../../assets/picture.jpg' 
import "./About.css";
const About = () => {
  return <div>
    <img src={picture} alt="width={200} height={200}"/>
    <h1 className='about'>
      WELCOME
    </h1>
    <p className="about">
      The Department Of Computer Science is dedicated to advancing the understanding 
      and application of computer science principles. We offer a wide range of programs
       and research opportunities for students.
       <p>
        The range of courses available in the department and skill
        acquired by students enable them to find employment in many 
        in many diverse fiels of economy and prepare our graduates for the computing industry,
        working in the project team , and  to enable the graduates to bring specialist
        skills to that team. the course also provides the platform for further study or research
        through exposure to established and emerging technologies
        and methods, and to active fields of research in computer science.
        <p>
          The Department offers two undergraduate programmes, Bachelor of Science in Computer Science 
          Single-Major (3:2:1:1) and Major-Minor(3:2:2:1) as well as Bachelor of Science in Information Technology.
          </p> 
       </p>
    </p>
  </div>;
};

export default About;
