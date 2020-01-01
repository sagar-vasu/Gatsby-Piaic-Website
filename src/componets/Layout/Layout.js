import React from "react"
import LayoutStyle from "./Layout.module.scss"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Layout = props => {
  return (
    <div className={LayoutStyle.container}>
      <div className={LayoutStyle}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
