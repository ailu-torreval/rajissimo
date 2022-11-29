import React from 'react'
import Btn from './Btn'

function SectionContent(props) {
  return (
    <div className="flex flex-col justify-around">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <Btn 
        class={props.btnClass}
        content={props.btnContent}
        action={props.btnAction}
         />
    </div>
  )
}


export default SectionContent