import React from 'react'
import "./about.css"
import aboutMe from "../../img/porto.jpg"

const About = () => {
  return (
    <div className='ab-column'>
        <div className="ab-col-left">
            <div className="ab-card bg"></div>
            <div className="ab-card">
                <img src={aboutMe} alt="" className="card-img" />
            </div>
        </div>
        <div className="ab-col-right">
            <h1 className="ab-title">About Me</h1>
            <p className="ab-sub">
                Currently a 10th Semester Computer Science Student at
                Gottfried Wilhelm Leibniz Universität Hannover.
            </p>
            <p className="ab-desc">
                My full name, is Joshua Giuseppe Puglisi. It starts from an adoration
                when I was a 7th grader. The task given that day was to create a simple
                HTML page. I realized that I could one day design a web page that could
                be seen by many people. Then come highschool years. I once again learned
                more about HTML and this time also CSS. Fast forward to my uni years, about 2 to 3 years
                ago, I was tasked to create an HTML page and design it with CSS, while adding
                some functions using JavaScript. Last January, I finished a Uni Project together
                in a team of 6. We developed a web-app, using exactly what I have learned all these
                years, using React as framework. Learning React was a challenge for me, but it has helped
                me becoming a better developer than before. It is nice meeting you!!
            </p>
        </div>
    </div>
  )
}

export default About