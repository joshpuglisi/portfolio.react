import React from 'react'
import "./gallery.css"
import img1 from "../../img/novi350.png"
import img2 from "../../img/virgovr_350.png"
import img3 from "../../img/5th Anniv Giucelin.png"

const Gallery = () => {
  return (
    <div className="gallery-container">
        <ul>
            <li>
                <img src={img1} alt="" />
            </li>
  
            <li>
                <img src={img2} alt="" />
            </li>
            
            <li>
                <img src={img3} alt="" />
            </li>
        </ul>
    </div>
  )
}

export default Gallery