import React from "react"
import Classes from "./Footer.module.scss"
import footer_logo from "../../images/footer_logo.png"
import { useStaticQuery, graphql } from "gatsby"
const Footer = () => {
  const all_Data = useStaticQuery(graphql`
    query {
      allContentfulFooter {
        nodes {
          image {
            file {
              url
            }
          }
          title
        }
      }
    }
  `)
  return (
    <>
      <div className={Classes.footer}>
        <span className={Classes.footContent}>
          {all_Data.allContentfulFooter.nodes[0].title}
        </span>
        <div style={{ position: "absolute", right: 0 }}>
          <div style={{ width: "90px" }}>
            <b>Powered by</b>
            <img
              src={all_Data.allContentfulFooter.nodes[0].image.file.url}
              width="80"
              height="40"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
