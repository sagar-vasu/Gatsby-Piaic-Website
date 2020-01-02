import React from "react"
import Styles from "./Courses.module.scss"
const Card = props => (
  <div className={Styles.card}>
    <div
      className={Styles.card_top_border}
      style={props.style}
      className={Styles.card_1}
    ></div>

    <div className={Styles.card_name}>
      <span
        className={Styles.title_1}
        style={{ color: props.color, fontWeight: "bold" }}
      >
        {props.heading}
      </span>
    </div>

    <div className={Styles.overlay} style={props.style}>
      <div className={Styles._text}>
        <h5 className={Styles.title_heading}>{props.heading}</h5>
        <span className={Styles.title_descripation}>{props.description}</span>
      </div>
    </div>
  </div>
)

export default Card
