import React from "react"
import "./../program-cards/program-cards.scss"

const programCards = props => (
  <div>
    <div
      className="program-cantainer"
      style={{ backgroundColor: props.color, color: props.fontcolor }}
    >
      <div className="para-program">
      <h1>{props.title}</h1>
        <p>{props.des}</p>
      </div>
    </div>
  </div>
)

export default programCards
