import React, { Component } from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import _ from "lodash"

import Footer from "./footer/Footer"
import Navbar from "./header/Navbar"

import "../stylesheets/af_style.scss"

class Layout extends Component {
  state = {
    show: false,
  }

  handleScroll = () => {
    this.setState({
      show: window.scrollY > 200,
    })
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener(
      "scroll",
      _.throttle(() => {
        this.handleScroll() // Still takes 20 ms, but now runs once in 100 ms
      }, 500)
    )
  }

  render() {
    const { children } = this.props
    const { show } = this.state
    return (
      <IconContext.Provider value={{ className: "social__icons" }}>
        <div className="wrapper">
          <Navbar shouldChangeColor={show} />
          <div className="content">{children}</div>
          <Footer />
        </div>
      </IconContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
