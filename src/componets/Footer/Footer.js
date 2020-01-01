import React from "react"
import Classes from "./Footer.module.scss"
import footer_logo from "../../images/footer_logo.png"
const Footer = props => {
  return (
    <>
      <div className={Classes.footer}>
        <span className={Classes.footContent}>
          © 2019 PIAIC. All rights reserved.
        </span>
        <div style={{ position: "absolute", right: 0 }}>
          <div style={{ width: "90px" }}>
            <b>Powered by</b>
            <img src={footer_logo} width="80" height="40" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
