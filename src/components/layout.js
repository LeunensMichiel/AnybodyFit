import React from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"

import Footer from "./footer/Footer"

import "../stylesheets/af_style.scss"

const Layout = ({ children }) => {
  return (
    <IconContext.Provider value={{ className: "social__icons" }}>
      <div className="wrapper">
        <div className="content">{children}</div>
        <Footer />
      </div>
    </IconContext.Provider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
