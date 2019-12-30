// ===============Quarter card================/

import React from "react"
import "./cards.scss"

const Cards = props => (
  <div style={{margin:"15px"}}>
    <div
      class="Rectangle-68 d1"
      style={{ backgroundColor: props.color, color: props.fontcolor,padding:10,height:272,widht:289}}
    >
      <div>
        <h1>{props.title}</h1>
        <p>{props.des}</p>
      </div>
    </div>
    </div>
)

export default Cards
