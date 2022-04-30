import React from 'react'
import "./project.css"
import prodVideo from "../../img/ProdVid.mp4"

const Project = () => {
  return (
    <div className="project-list">
        <div className="project-title">
            <h1 className="proj-title">Latest Big Project I worked on</h1>
            <h2 className="proj-subtitle">Future Projects may be added.</h2>
            <div className="col-div">
                <div className="left-col">
                    <h1 className="title-desc">ViViPlayer</h1>
                    <h3 className="sub-desc">Leibniz Universität SWP (Software Project)</h3>
                    <p className="desc-pro">
                        Vision Video Player, or ViViPlayer in short,
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