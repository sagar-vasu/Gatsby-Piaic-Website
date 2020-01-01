import React from "react"
import { Layout } from "../componets"
import { CommitteeCard } from "../componets"
import Classes from "./Styles/Management.module.scss"
import { useStaticQuery, graphql } from "gatsby"

const ManagementCommite = () => {
  const all_data = useStaticQuery(graphql`
    query {
      contentfulCommittee {
        title
        partners
        team {
          members {
            name
            position
            url
            links {
              address
              icon
            }
          }
        }
        images {
          partnersImages {
            address
            height
            url
            width
          }
        }
      }
    }
  `)

  const data = all_data.contentfulCommittee

  return (
    <Layout>
      <div className={Classes.container}>
        <h2 class={Classes.heading}>{data.title}</h2>
        <div className={Classes.teamCards}>
          {data.team
            ? data.team.members.map((v, i) => {
                return (
                  <CommitteeCard
                    img={v.url}
                    title={v.name}
                    info={v.position}
                    links={v.links}
                  />
                )
              })
            : null}
        </div>
        <div>
          <h2 className={Classes.heading}>{data.partners}</h2>
          <div className={Classes.partners}>
            {data.images
              ? data.images.partnersImages.map((val, i) => {
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
                        className={Classes.images}
                      />
                    </a>
                  )
                })
              : null}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ManagementCommite
