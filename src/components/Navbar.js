   import React from 'react'

export default function Navbar(props) {
  return (
    <div>
      <ul>
        <li>{props.link1}</li>
        <li>{props.link2}</li>
        <li>{props.link3}</li>
      </ul>  
    </div>
  )
}
