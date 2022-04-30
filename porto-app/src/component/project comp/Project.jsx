import React from 'react'
import "./project.css"
import prodVideo from "../../img/ProdVid.mp4"

const Project = () => {
  return (
    <div className="project-list">
        <div className="project-title">
            <div className="horizontal-bar"></div>
            <div className="horizontal-bar2"></div>
            <h1 className="proj-title">Latest Big Project I worked on</h1>
            <h2 className="proj-subtitle">Future Projects may be added.</h2>
            <div className="col-div">
                <div className="left-col">
                    <h1 className="title-desc">ViViPlayer</h1>
                    <h3 className="sub-desc">Leibniz Universität SWP (Software Project)</h3>
                    <p className="desc-pro">
                        Vision Video Player, or ViViPlayer in short, is a web-application developed
                        by <b style={{color: 'rgb(206, 151, 0)'}}>a team of 6 students</b> at Leibniz University. The main purpose of the application
                        is to help developer present their vision video better for the project owners.
                        ViViPlayer's main function is real-time video playback, which then shared
                        to multiple participants. The participants here are the developers and project owners.
                        ViViPlayer acts as a medium, where developers and project owners could share their
                        ideas and opinions, in order to increase the confidence of the project owners, and
                        at the same time increase the credibility of the developers.
                        <br></br>
                        <br></br>
                        Project owners can write User Stories and Commentaries in the provided input field
                        during the live playback.
                        The input will be recorded by the application and saved in the database.
                        After meeting session between the developers and project owners, the moderator of
                        the session could easily export the meeting data, which will be used by the
                        developer team.
                        <br></br>
                        <br></br>
                        This project involved the application of <b style={{color: 'rgb(206, 151, 0)'}}>HTML, CSS, JavaScript, and also RestAPI</b>, all together
                        inside a <b style={{color: 'lightblue'}}>React Framework</b>. The minimalistic design was made using AntDesign. The data was
                        stored and managed using SQLite, a database provided by Django, a python Framework for Web Development.
                    </p>
                </div>
                <div className="right-col">
                    <video className="prod-video" controls>
                        <source src={prodVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project