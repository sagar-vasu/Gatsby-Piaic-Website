import React from "react"
import coursesStyle from "./Courses.module.scss"
const Courses = () => {
  return (
    <div className={coursesStyle.container}>
      <div style={{ borderRadius: 5, backgroundColor: "rgb(72, 91, 137)" }}>
        <div className={coursesStyle.box} id={coursesStyle.a}>
          <p style={{ backgroundColor: "rgb(29, 43, 80)" }}></p>
          <div
            className={coursesStyle.courseName}
            style={{ color: "rgb(29, 43, 80)" }}
          >
            Artificial Inteligence
          </div>
        </div>
      </div>

      <div style={{ borderRadius: 5, backgroundColor: "rgb(234, 100, 161)" }}>
        <div className={coursesStyle.box}>
          <p style={{ backgroundColor: "rgb(225, 45, 129)" }}></p>
          <div
            className={coursesStyle.courseName}
            style={{ color: "rgb(225, 45, 129)" }}
            id="b"
          >
            Cloud Native and Mobile Web
          </div>
        </div>
      </div>
      <div style={{ borderRadius: 5, backgroundColor: "rgb(247, 221, 145)" }}>
        <div className={coursesStyle.box}>
          <p style={{ backgroundColor: "rgb(246, 202, 63)" }}></p>
          <div
            className={coursesStyle.courseName}
            style={{ color: "rgb(246, 202, 63)" }}
            id="c"
          >
            Blockchain
          </div>
        </div>
      </div>

      <div style={{ borderRadius: 5, backgroundColor: "rgb(111, 216, 212)" }}>
        <div className={coursesStyle.box}>
          <p style={{ backgroundColor: "rgb(66, 161, 158)" }}></p>
          <div
            className={coursesStyle.courseName}
            style={{ color: "rgb(66, 161, 158)" }}
            id="d"
          >
            Internet of Things and AI
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses
