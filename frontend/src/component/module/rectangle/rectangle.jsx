import React from 'react'

import "./rectangle.scss"

const Rectangle = (props) => {
  const {backgroundImageUrl, textColor} = props
  return(
    <div className="rectangle_container" style={{backgroundImage: `url(${backgroundImageUrl})`}}>           
                 <div className="rectangle_heading"><p style={{color: textColor}}>{props.wordsOne}</p></div>
                <ul>
                   {props.wordsArray.map(word => <li style={{color: textColor}}>{word}</li>)}
                </ul>
                 </div>
  )
    }
     
   
     export default Rectangle;