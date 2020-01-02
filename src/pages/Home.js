import React from "react"
// import { Link } from "gatsby"
import HomeStyle from "./Styles/Home.module.scss"
import PresidentImg from "./../images/president.png"
import Grid from "@material-ui/core/Grid"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import {
  ProgramSlider,
  Courses,
  ImageSlider,
  VedioSection,
  MainFooter,
} from "../componets"

// import Paper from "@material-ui/core/Paper"
const Home = () => {
  let all_Data = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        nodes {
          heading
          subHeading
          programTitle
          description {
            json
          }
          receivedApplications
          button

          availablePrograms {
            programs {
              description
              title
              heading
              color
              background
            }
          }
          developmentPrograms {
            title
            Programs {
              name
              background
            }
          }
          gallery {
            title
            slider {
              description
              heading
              url
            }
          }
          videos {
            title
            VideoSlider {
              imageUrl
              shortInfo
              title
              videoUrl
            }
          }
          teamPartners {
            partnersImages {
              address
              height
              url
              width
            }
            title
          }
        }
      }
    }
  `)
  const data = all_Data.allContentfulHomePage.nodes[0]
  console.log(data, "===")
  return (
    <>
      <div className={HomeStyle.container}>
        <Grid
          container
          justifyContent={"center"}
          style={{
            backgroundColor: "rgb(231, 227, 228)",
            padding: "2%",
            paddingTop: 0,
          }}
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
              <p className={HomeStyle.title}>{data.heading}</p>
              <p className={HomeStyle.info}>{data.subHeading}</p>
              <br />
              <p style={{ border: "2px solid" }}>
                {/* {data.description.description} */}
              </p>
              <br />
              <br />
              <br />

              <table style={{ fontWeight: "bolder", float: "right" }}>
                <tr>
                  <td style={{ borderRight: "2px solid" }} rowSpan="2">
                    <button className={HomeStyle.apply_btn}>
                      {data.button}
                    </button>
                  </td>
                  <td className={HomeStyle.total_student}>
                    {data.receivedApplications}
                  </td>
                </tr>
                <tr>
                  <td style={{ fontSize: 12 }}>Application Received</td>
                </tr>
              </table>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </Grid>
        </Grid>
      </div>

      <div>
        <div className={HomeStyle.card_div}>
          <h2
            style={{
              color: "grey",
              letterSpacing: 12,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {data.programTitle}
          </h2>
          {/* ********************************* courses section *********************************** */}
          <div className={HomeStyle.row}>
            {data.availablePrograms &&
              data.availablePrograms.programs.map((v, i) => {
                return (
                  <Courses
                    style={{ backgroundColor: v.background }}
                    heading={v.title}
                    description={v.description}
                    heading={v.heading}
                    color={v.color}
                  />
                )
              })}
          </div>
          {/* **************** Program section vedio section and image gallery section *************** */}
        </div>
        <ProgramSlider
          title={data.developmentPrograms.title}
          slides={data.developmentPrograms.Programs}
        />
        <VedioSection slider={data.videos.VideoSlider} title={data.videos.title} />
        <ImageSlider slider={data.gallery.slider} title={data.gallery.title} />
      </div>
      {/* ********************************* Strategic Partners section *********************************** */}

      <div className={HomeStyle.strategic_partners_section}>
        <h1 style={{ textAlign: "center" }}>{data.teamPartners.title}</h1>
        <div className={HomeStyle.partners}>
          {data.teamPartners
            ? data.teamPartners.partnersImages.map((val, i) => {
                return (
                  <a
                    href={val.address}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      alt="img"
                      src={val.url}
                      width={val.width}
                      height={val.height}
                      className={HomeStyle.images}
                    />
                  </a>
                )
              })
            : null}
        </div>
      </div>
      {/* ********************************* Main footer *********************************** */}
      <div>{/* <MainFooter /> */}</div>
    </>
  )
}

export default Home
