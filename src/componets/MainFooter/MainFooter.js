import React from "react"
import Styles from "./MainFooter.module.scss"
import { Link, useStaticQuery, graphql } from "gatsby"
import { MdCall, MdPlace } from "react-icons/md"
import { FaYoutube } from "react-icons/fa"
import { IoLogoFacebook } from "react-icons/io"

const Footer = () => {
  let contentFullData = useStaticQuery(graphql`
    query {
      allContentfulHomePage {
        nodes {
          footer {
            heading
            helpline {
              name
              phone
            }
            locations {
              address
              name
              phone
            }
            office {
              address
              name
              phone
            }
          }
        }
      }
    }
  `)

  let fieldoffices =
    contentFullData.allContentfulHomePage.nodes[0].footer.office
  let helpLineData =
    contentFullData.allContentfulHomePage.nodes[0].footer.helpline
  let locationData =
    contentFullData.allContentfulHomePage.nodes[0].footer.locations
  return (
    <div className={Styles._container}>
      <div className={Styles.div} className={Styles._div_one}>
        <span className={Styles.footer_headings}>Navigation</span>
        <div className={Styles.navigation_box}>
          <span>
            <Link className={Styles.link} to="/home/">
              Home
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              Apply
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              How it works
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              Artificial Inteligence
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              Cloud Native and Mobile Web Computing
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              Blockchain
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              Internet of Things and AI
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              About The President
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              Management Committee
            </Link>
          </span>
          <span>
            <Link className={Styles.link} to="/home/">
              Women Inclusion in Technology (WIT)
            </Link>
          </span>
        </div>
      </div>

      <div className={Styles.div} className={Styles._div_two}>
        {/* <span className="footer_headings">{headOffices.heading}</span> */}
        {/* Here is fetched data of all Headquarterz */}
        {locationData ? (
          locationData.map((v, i) => {
            return (
              <div>
                <span className={Styles.footer_headings}>{v.name}</span>
                <div className={Styles.address_box}>
                  <span style={{ display: "inline" }}>
                    <MdPlace size={20} color="#05d88c" />
                  </span>
                  <span
                    className={Styles.detail_text}
                    style={{ display: "inline" }}
                  >
                    {v.address}
                  </span>
                  <br />
                  <MdCall display="inline" size={20} color="#05d88c" />
                  <span
                    className={Styles.detail_text}
                    style={{ display: "inline" }}
                  >
                    {v.phone}
                  </span>
                </div>
              </div>
            )
          })
        ) : (
          <div></div>
        )}
        {/* Here is fetched data of all Help Lines */}
        {helpLineData ? (
          helpLineData.map((v, i) => {
            return (
              <div>
                <span className={Styles.footer_headings}>{v.name}</span>
                <MdCall display="inline" size={20} color="#05d88c" />
                <span
                  className={Styles.detail_text}
                  style={{ display: "inline" }}
                >
                  {v.phone}
                </span>
              </div>
            )
          })
        ) : (
          <div></div>
        )}
        <span className={Styles.footer_headings}>Connect with us</span>
        <span style={{ display: "inline" }}>
          <IoLogoFacebook size={30} color="#05d88c" />
        </span>
        <span style={{ display: "inline" }}>
          <FaYoutube size={30} color="#05d88c" />
        </span>
      </div>

      <div className={Styles.div} className={Styles._div_three}>
        {/* here is fetched data of all field offices */}
        {fieldoffices ? (
          fieldoffices.map((v, i) => {
            return (
              <div>
                <span className={Styles.footer_headings}>{v.name}</span>
                <div className={Styles.address_box}>
                  <span style={{ display: "inline" }}>
                    <MdPlace size={20} color="#05d88c" />
                  </span>
                  <span
                    className={Styles.detail_text}
                    style={{ display: "inline" }}
                  >
                    {v.address}
                  </span>
                  <br />
                  <MdCall display="inline" size={20} color="#05d88c" />
                  <span
                    className={Styles.detail_text}
                    style={{ display: "inline" }}
                  >
                    {v.phone}
                  </span>
                </div>
              </div>
            )
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Footer
