import React from 'react'

function Links(props) {
  return (
    <div>
        <p className="text-blue">{props.title}</p>
        <ul className="list-links">
            <li onClick={props.link1action}>{props.link1}</li>
            <li onClick={props.link2action}>{props.link2}</li>
           { props.link3 && <li onClick={props.link3action}>{props.link3}</li>}
           { props.link4 && <li onClick={props.link4action}>{props.link4}</li>}
        </ul>
    </div>
  )
}

export default Links