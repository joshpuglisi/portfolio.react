import React from 'react'
import "./intro.css"
import portoMe from "../../img/back.jpg"

const Intro = () => {
    return (
        <div className='flex-column'>
            <div className='flex-column-left'>
                <div className='left-wrapper'>
                    <h2 className='left-intro'>Hello there! My Name is</h2>
                    <h1 className='left-name'>Joshua Puglisi</h1>
                    <div className="left-title">
                        <div className="left-title-wrapper">
                            <div className="left-title-item">Computer Science Student</div>
                            <div className="left-title-item">Amateur Web Developer</div>
                            <div className="left-title-item">UI/UX Enthusiast</div>
                            <div className="left-title-item">Illustrator</div>
                        </div>
                    </div>
                    <p className="left-desc">
                        I am a student trying to learn my way into becoming a
                        professional Web Developer. I also do some illustrating
                        as a hobby. Nice to meet you!
                    </p>
                </div>
            </div>
            <div className='flex-column-right'>
                <img src={portoMe} alt="" className="right-img" />
                <div className="right-img-wrapper2"></div>
            </div>
        </div>
    )
}

export default Intro