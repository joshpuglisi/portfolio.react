import React from 'react'
import "./hobby.css"
import Gallery from "../gallery comp/Gallery.jsx"
import logobutton from "../../img/logo.png"

const Hobby = () => {
  return (
    <div className="h-col">
        <div className="line-bg"></div>
        <div className="h-col-left">
            <Gallery/>
        </div>
        <div className="h-col-right">
            <h1 className="hobby-title">Hobby Projects</h1>
            <h3 className="hobby-sub">Online Digital Illustrator</h3>
            <p className="hobby-desc">
                One of my hobbies is drawing. I have been drawing as a hobby since
                my childhood. Nowadays in my freetime, when I am not learning web development,
                I spent my time doing commissions on online platforms. Not only I am able
                to earn side incomes while preparing myself for bigger projects such as internship
                or bachelor thesis, drawing is great for my stress management. If you are interested,
                you can check out my Fiverr Page linked down below.
            </p>
            <a href='https://www.fiverr.com/joshpug/draw-you-an-anime-styled-profile-photos' target="_blank" rel="noopener noreferrer" className='button-wrapper'>
                <img src={logobutton} alt="" className="button-logo" />
            </a>
        </div>
        <div className="line-bg2"></div>
    </div>
  )
}

export default Hobby