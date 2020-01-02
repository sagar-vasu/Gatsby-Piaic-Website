import React from "react"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import "./ProgramSlider.scss"
export default class Posts extends React.Component {
  render() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1, // optional, default to 1.
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
      },
    }
    return (
      <div
        style={{
          marginTop: "5%",
          width: "94%",
          float: "right",
        }}
      >
        <div style={{ border: "1.5px solid", width: 100 }}></div>
        <p className="title">{this.props.title}</p>
        <Carousel
          showDots={true}
          responsive={responsive}
          className="slider_section"
        >
          {this.props.slides &&
            this.props.slides.map((v, i) => {
              return (
                <div className={v.background} key={i}>
                  {v.name}
                </div>
              )
            })}
        </Carousel>
      </div>
    )
  }
}
