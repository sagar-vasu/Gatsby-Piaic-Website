import React from "react"
import { Layout } from "../componets"
import Classes from "./Styles/About.module.scss"
import { useStaticQuery, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const ThePresedent = () => {
  const all_data = useStaticQuery(graphql`
    {
      allContentfulAbout {
        edges {
          node {
            shortText
            description {
              json
            }
            title
            image {
              file {
                url
              }
            }
            childContentfulAboutSocialLinksJsonNode {
              links {
                address
                icon
              }
            }
          }
        }
      }
    }
  `)
  let data = all_data.allContentfulAbout.edges[0].node
  return (
    <Layout>
      <div className={Classes.container}>
        <div className={Classes.about}>
          <img src={data.image.file.url} className={Classes.img} />
          <h3>{data.title}</h3>
          <p className={Classes.shortText}>{data.shortText}</p>
          {data.childContentfulAboutSocialLinksJsonNode.links &&
            data.childContentfulAboutSocialLinksJsonNode.links.map((val, i) => (
              <a key={i} href={val.address} target="_Blank">
                <img
                  src={val.icon}
                  width="25px"
                  height="25px "
                  className={Classes.links}
                />
              </a>
            ))}
          <div className={Classes.paragraph}>
            {documentToReactComponents(data.description.json)}
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default ThePresedent
