import "./rectangle.scss"

const Rectangle = (props) => {
  return(
    <div className="rectangle_container">           
                 <div className="rectangle_heading"><p>{props.wordsOne}</p></div>
                <ul>
                   {props.wordsArray.map(word => <li>{word}</li>)}
                </ul>
                 </div>
  )
    }
     
   
     export default Rectangle;