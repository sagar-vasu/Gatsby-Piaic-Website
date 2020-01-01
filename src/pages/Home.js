import React from "react"
// import { Link } from "gatsby"
import HomeStyle from "./Styles/Home.module.scss"
import PresidentImg from "./../images/president.png"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import { ProgramSlider, Courses, Layout } from "../componets"
// import Paper from "@material-ui/core/Paper"
const Home = props => {
  return (
    <>
      {/* <div className={HomeStyle.section_a}> */}
      <Grid
        container
        justifyContent={"center"}
        style={{ backgroundColor: "rgb(231, 227, 228)" }}
      >
        <Grid item lg={4} sm={12} xs={12} xl={4} md={4}>
          <img
            src={PresidentImg}
            className={HomeStyle.presidentImg}
            alt="president"
          />
        </Grid>
        <Grid item xl={8} lg={8} md={8} sm={12} xs={12}>
          <div className={HomeStyle.innderSection_A}>
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", paddingTop: "40px" }}
            >
              Presidential Initiative
            </Typography>
            <p style={{ fontSize: 30 }}>
              for Artificial Intelligence & Computing (PIAIC)
            </p>
            <br />
            <br />
            <p>
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution. We want Pakistan to become a global hub for AI, data
              science, cloud native computing, edge computing, blockchain,
              augmented reality, and internet of things.
            </p>
            <br />
            <br />
            <br />

            <h1
              style={{ fontWeight: "bolder", width: "150px", float: "right" }}
            >
              65K+
              <span
                style={{ fontSize: 12, display: "flex", alignSelf: "flex-end" }}
              >
                Received Application
              </span>
            </h1>
            <br />
            <br />
            <br />

            <br />
            <h2 style={{ color: "grey", letterSpacing: 12 }}>
              Available Programs
            </h2>
          </div>
        </Grid>
      </Grid>

      <div>
        {/* <Courses /> */}
        <ProgramSlider />
      </div>
    </>
  )
}

export default Home
