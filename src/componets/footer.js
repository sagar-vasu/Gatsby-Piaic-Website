import React from "react"
import Styles from "./styeles/footer.module.scss"
import footer_logo from "./../images/footer_logo.png"
const Footer = props => {
  return (
    <>
      <div className={Styles.footer}>

          <div style={{float:"right",width:"100%",textAlign:"center"}}>
              <span style={{padding:20,display:"inline-block"}}>

        © 2019 PIAIC. All rights reserved.
              </span>
        <img src={footer_logo} className={Styles.footer_logo} />
        </div>
      </div>
    </>
  )
}

export default Footer
