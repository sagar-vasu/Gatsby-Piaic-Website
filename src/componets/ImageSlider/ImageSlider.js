import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import Styles from "./ImageSlider.module.scss"
import slide1 from "./../../images/slide1.jpg"
import slide2 from "./../../images/slide2.jpg"
import slide3 from "./../../images/slide3.jpg"
import Grid from "@material-ui/core/Grid"

export default class ImageSlider extends React.Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    }
    return (
      <div className={Styles.main_container}>
        <p className={Styles.title}>Images</p>
        <Carousel
          showDots={true}
          responsive={responsive}
          className={Styles.main_section}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
        >
          {this.props.slider &&
            this.props.slider.map((v, i) => {
              return (
                <Grid container justifyContent="center">
                  <Grid lg={7} xl={6} md={6} sm={12} xs={12}>
                    <img src={v.url} />
                  </Grid>
                  <Grid lg={5} xl={6} md={6} sm={12} xs={12}>
                    <div className={Styles.slide_content}>
                      <h3>{v.heading}</h3>
                      <p>{v.description}</p>
                    </div>
                  </Grid>
                </Grid>
              )
            })}
        </Carousel>
      </div>
    )
  }
}
