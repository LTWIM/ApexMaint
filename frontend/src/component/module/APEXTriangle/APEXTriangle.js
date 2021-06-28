import React from 'react'
import './styles.scss'

export default function APEXTriangle(props){

  const triangle_width = () => {
    let num = props.size.match(/\d/g)
    num = num.join("");
    num /= 2
    num = num.toString()
    return (num + 'px')
  }
  const triangle_whiteline_height = () => {
    let num = props.size.match(/\d/g)
    num = num.join("");
    num -= 15;
    num = num.toString()
    return (num + 'px')
  }
  const triangle_whiteline_weight = () => {
    let num = props.size.match(/\d/g)
    num = num.join("");
    num = num / 2 - 10
    num = num.toString()
    return (num + 'px')
  }
  return(
    <div className="APEXTriangle-cont" style={{
      width:`${props.size}`,
      height:`${props.size}`
    }} >
      <div className="APEXTriangle-cont__outter-triangle"style={{
        width:'0',
        height:'0',
        backgroundImage: `linear-gradient(to bottom, #ffa0ba, #81beff)`,
        borderTop:` 0px transparent`,
        borderLeft:`solid ${triangle_width()} #faf3e7`,
        borderRight:`solid ${triangle_width()} #faf3e7`,
        borderBottom:`${props.size} solid transparent`,
      }}>
        <div className="APEXTriangle-cont__white-line"style={{
        width:'0',
        height:'0',
        left:`-${triangle_whiteline_weight()}`,
        top:'10px',

        backgroundImage: `linear-gradient(to bottom, #ffa0ba, #81beff)`,
        borderTop:` 0px transparent`,
        borderLeft:`solid ${triangle_whiteline_weight()} transparent`,
        borderRight:`solid ${triangle_whiteline_weight()} transparent`,
        borderBottom:`${triangle_whiteline_height()} solid white`
        }}>
          <div className="APEXTriangle-cont__inner-triangle" style={{

            
          }}>
            
          </div>
        </div>
      </div>

    </div>
  )
}