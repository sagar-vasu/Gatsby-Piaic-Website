import React from "react"
import { Layout } from "../componets"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import Styles from "./Styles/Artificial.module.scss"
import git_icon from "./../images/git.png"
import python_icon from "./../images/python.png"
import statistics_icon from "./../images/statistics.png"
import anaconda_icon from "./../images/anaconda.png"
import datascience_icon from "./../images/datascience.png"
import keras_icon from "./../images/keras.png"
import linux_icon from "./../images/linux.png"
import docker_icon from "./../images/docker.png"
import microservices_icon from "./../images/microservices.png"
import container_icon from "./../images/container.png"
import ai_icon from "./../images/ai.png"
import "./Styles/index.scss"
import Cards from "../componets/artificialinteligence/cards/cards"
import { useStaticQuery, graphql } from "gatsby"

const ArificialInteligence = props => {
  // const data = useStaticQuery(graphql`
  // query {
  //   allContentfulCourses {
  //     nodes {
  //       shortInfo
  //       slug
  //       courseDetail {
  //         quater1 {
  //           heading
  //           info
  //           subQuaters {
  //             description
  //             title
  //             url
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // `)

  // console.log(data.allContentfulCourses.nodes[0])

  return (
    <Layout>
      <Grid container justifyContent="center">
        <Grid lg={12} xl={12} md={12} sm={12} xs={12}></Grid>
      </Grid>

      <div>
        <div class="Rectangle-67 d-flex justify-content-center align-items-center">
          <div class="SliderData">
            <h1 class="Artificial-Intelligence">Artificial Intelligence</h1>
            <p>
              A ONE YEAR AI PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
              <br /> GETTING PAKISTAN READY FOR THE NEW ERA OF COMPUTING ENABLED
              BY THE RISE OF AI.
            </p>
          </div>
        </div>
        <div class="line2">
          <h1 class="program">Program Structure</h1>A four-quarter AI program in
          Data Science, Machine Learning, and Deep Learning.
        </div>
        <div style={{ padding: 20 }}>
          {/* ******************programme structure************************ */}
          <Grid container justifyContent="center">
            <Grid lg={3} xl={3} md={3} sm={12} xs={12}>
              <Cards
                color="#ffffff"
                title="Quarter 1"
                des="All Foundation"
                fontcolor="#192a56"
              />
            </Grid>

            <Grid lg={3} xl={3} md={3} sm={12} xs={12}>
              <Cards
                color="#8b94aa"
                title="Quarter 2"
                des="Introduction to Data Science & Deep Learning"
                fontcolor="#ffffff"
              />
            </Grid>

            <Grid lg={3} xl={3} md={3} sm={12} xs={12}>
              <Cards
                color="#525f80"
                title="Quarter 3"
                des="Deploying AI Solutions"
                fontcolor="#ffffff"
              />
            </Grid>

            <Grid lg={3} xl={3} md={3} sm={12} xs={12}>
              <Cards
                color="#192a56"
                title="Quarter 4"
                des="AI In Practice"
                fontColor="white"
              />
            </Grid>
          </Grid>
        </div>
      </div>

      {/* ****************** Detailed Program Structure ************************ */}
      <hr />
      <br />
      <h3 style={{ textAlign: "center" }}>Detailed Program Structure</h3>
      <br />
      <br />

      <Grid container justifyContent={"center"}>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span className={Styles.counter}>1A</span>
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6 className={Styles.title}>Version Control with Git</h6>
              <p className={Styles.discription}>
                <img src={git_icon} className={Styles.program_icons} />
                You won't find a top programmer, web developer, or AI engineer
                who doesn't use version control. This is true because version
                control helps developers produce better results and makes
                collaboration easy. Around the world, in teams both large and
                small, Git is an essential part of the toolchain. This module
                covers Git and Github
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        ></Grid>

        {/* section 2 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span className={Styles.counter}>1B</span>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={Styles.right_Side_box}
        >
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Object Oriented and Functional Programming using Python</h6>
              <p className={Styles.discription}>
                <img src={python_icon} className={Styles.program_icons} />
                In the second module of the program, students will learn about
                basic programming concepts such as lists, dictionaries, classes,
                functions and loops, and practice writing clean and readable
                code with exercises for each topic. Students will also learn how
                to make programs interactive and how to test code safely before
                adding it to a project. It is a fast-paced, thorough
                introduction to programming with Python 3.6 that will have
                students writing programs, solving problems, and making things
                that work in no time.
              </p>
            </Paper>
          </Grid>
        </Grid>

        {/* section 3 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span className={Styles.counter}>1C</span>
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Introduction to Linear Algebra and Statistics</h6>
              <p className={Styles.discription}>
                <img src={statistics_icon} className={Styles.program_icons} />
                In this module, students will learn the basic mathematical and
                statistical concepts that are needed to practice data science
                and understand deep learning. Students will also implement these
                concepts in Python and TensorFlow.
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        ></Grid>

        {/* section 4 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(139, 148, 170)",
              borderColor: "rgb(139, 148, 170)",
              color: "white",
            }}
          >
            2A
          </span>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={Styles.right_Side_box}
        >
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Advanced Python Libraries with Anaconda</h6>
              <p className={Styles.discription}>
                In this module, students will be introduced to Anaconda, the
                leading open data science platform powered by Python. The open
                source version of Anaconda is a high performance distribution of
                Python and R and includes over 100 of the most popular Python
                and R packages for data science, such as NumPy, Matplotlib, etc.{" "}
                <img src={anaconda_icon} className={Styles.program_icons} />
              </p>
            </Paper>
          </Grid>
        </Grid>

        {/* section 5 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(139, 148, 170)",
              borderColor: "rgb(139, 148, 170)",
              color: "white",
            }}
          >
            2B
          </span>
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Data Science Essentials</h6>
              <p className={Styles.discription}>
                <img src={datascience_icon} className={Styles.program_icons} />
                In this module, students will learn key concepts and techniques
                used to perform data science; including statistical analysis,
                data cleansing and transformation, and data visualization with
                Python.
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        ></Grid>

        {/* section 6 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(139, 148, 170)",
              borderColor: "rgb(139, 148, 170)",
              color: "white",
            }}
          >
            2C
          </span>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={Styles.right_Side_box}
        >
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>
                The Fundamentals of Deep Learning with Keras with TensorFlow
                Backend
              </h6>
              <p className={Styles.discription}>
                <img src={keras_icon} className={Styles.program_icons} />
                efore implementing deep-learning algorithms, students will first
                become familiar with the mathematical blocks of the neural
                networks theory. Students will get a chance to get their hands
                dirty writing some simple Keras code right away! Then they will
                move on to advanced deep learning concepts. This module will
                also cover some essential advantages of Keras to prove it’s the
                deep-learning library of choice.
              </p>
            </Paper>
          </Grid>
        </Grid>

        {/* section 7 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(82, 95, 128)",
              borderColor: "rgb(82, 95, 128)",
              color: "white",
            }}
          >
            3A
          </span>
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Introduction to Linux and Bash</h6>
              <p className={Styles.discription}>
                <img src={linux_icon} className={Styles.program_icons} />
                Linux containers are poised to take over the world. In this
                module, students will begin learning with an introduction of
                Linux and the command line interface. For many non-technical
                people, the command line (also referred to as CLI, Terminal,
                bash, or shell) is a place of mystery. However, knowledge of
                only a handful of basic commands is enough to start feeling
                comfortable. In this module, we will cover the basic commands to
                get you started.
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        ></Grid>

        {/* section 8 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(82, 95, 128)",
              borderColor: "rgb(82, 95, 128)",
              color: "white",
            }}
          >
            3B
          </span>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={Styles.right_Side_box}
        >
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Docker Deep Dive</h6>
              <p className={Styles.discription}>
                <img src={docker_icon} className={Styles.program_icons} />
                This module provides a soup-to-nuts learning experience for core
                Docker technologies, including the Docker Engine, Images,
                Containers, Registries, Networking, Storage, and more. All of
                the behind the scenes theory is explained, and all concepts are
                clearly demonstrated on the command line. No prior knowledge of
                Docker or Linux is required.
              </p>
            </Paper>
          </Grid>
        </Grid>

        {/* section 9 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(82, 95, 128)",
              borderColor: "rgb(82, 95, 128)",
              color: "white",
            }}
          >
            3C
          </span>
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Python Microservices Development</h6>
              <p className={Styles.discription}>
                <img
                  src={microservices_icon}
                  className={Styles.program_icons}
                />
                In recent years, REST (REpresentational State Transfer) has
                emerged as the standard architectural design for web services
                and web APIs. In this module, students will learn how easy it is
                to create a RESTfulweb service using Python and Flask.
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderLeft: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        ></Grid>

        {/* section 10 */}
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          style={{ borderRight: "2px solid", borderColor: "rgb(25, 42, 86)" }}
          className={Styles.vertical_line}
        >
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(82, 95, 128)",
              borderColor: "rgb(82, 95, 128)",
              color: "white",
            }}
          >
            3D
          </span>
        </Grid>
        <Grid
          item
          xl={6}
          lg={6}
          md={6}
          sm={6}
          xs={12}
          className={Styles.right_Side_box}
        >
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Build AI Microservices for ContainerDeployments</h6>
              <p className={Styles.discription}>
                <img src={container_icon} className={Styles.program_icons} />
                In this module, students will learn to use containers to
                simplify AI solution deployments and implement continuous
                integration and deployment strategies.
              </p>
            </Paper>
          </Grid>
        </Grid>

        {/* section 11 */}
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}>
          <span
            className={Styles.counter}
            style={{
              backgroundColor: "rgb(25, 42, 86)",
              borderColor: "rgb(25, 42, 86)",
              color: "white",
            }}
          >
            4
          </span>
          <Grid
            xl={12}
            lg={12}
            sm={12}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "80px",
            }}
          >
            <Paper className={Styles.paper}>
              <h6>Artificial Intelligence (AI) in Practice</h6>
              <p className={Styles.discription}>
                <img src={ai_icon} className={Styles.program_icons} />
                This module is structured around a series of practical code
                examples, demonstrating on real world problems. PIAIC strongly
                believes in the value of teaching using concrete examples,
                anchoring theoretical ideas into actual results and tangible
                code patterns. These examples all rely on Keras, the Python deep
                learning library. Students will learn Deep Learning for computer
                vision, text and sequences, finance, and advanced neural network
                design.
              </p>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xl={6} lg={6} md={6} sm={6} xs={12}></Grid>
      </Grid>
      {/* ------------------------- end Program Structure ------------------------ */}
    </Layout>
  )
}

export default ArificialInteligence
