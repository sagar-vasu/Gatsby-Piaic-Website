import React from 'react'
import LayoutStyle from './styeles/Layout.module.scss'
import Header from './header'
import Footer from './footer'

const Layout =(props)=>{
    return(
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