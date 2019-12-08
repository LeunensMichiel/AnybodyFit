import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import _ from "lodash"
import { isIE, isMobileOnly } from "react-device-detect"

import Footer from "./Footer/Footer"
import Navbar from "./Navigation/Navbar"
import SideDrawer from "./Navigation/SideDrawer"
import Backdrop from "./Navigation/Backdrop"
import HamburgerNavbar from "./Navigation/HamburgerNavbar"

import "../stylesheets/af_style.scss"

class Layout extends PureComponent {
  state = {
    sideDrawerOpen: false,
    mobile: isMobileOnly || window.innerWidth < 768,
  }

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropToggleClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
    })
  }

  updateDimensions = () => {
    this.setState({
      mobile: isMobileOnly || window.innerWidth < 768,
    })
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      _.throttle(() => {
        this.updateDimensions()
      }, 100)
    )
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    const { children } = this.props
    const { sideDrawerOpen, mobile } = this.state
    let backdrop
    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleClickHandler} />
    }
    if (isIE)
      alert(
        "Internet Explorer is ancient and not supported. Please download a modern browser like Chrome, Firefox or Safari"
      )
    return (
      <>
        <IconContext.Provider value={{ className: "social__icons" }}>
          <div className="wrapper">
            {mobile ? (
              <>
                <HamburgerNavbar
                  hamburgerClickHandler={this.drawerToggleClickHandler}
                />
                <SideDrawer
                  show={sideDrawerOpen}
                  click={this.backdropToggleClickHandler}
                />
                {backdrop}
              </>
            ) : (
              <Navbar />
            )}
            <div className="content">{children}</div>
            <Footer />
          </div>
        </IconContext.Provider>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
