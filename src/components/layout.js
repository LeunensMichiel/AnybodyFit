import React, { PureComponent } from "react"
import PropTypes from "prop-types"
import { IconContext } from "react-icons"
import _ from "lodash"
import { isIE, isMobileOnly } from "react-device-detect"
import { StaticQuery, graphql } from "gatsby"

import Footer from "./footer/Footer"
import Navbar from "./navigation/Navbar"
import Notification from "./Popup/Notification"
import SideDrawer from "./navigation/SideDrawer"
import Backdrop from "./navigation/Backdrop"
import HamburgerNavbar from "./navigation/HamburgerNavbar"

import "../stylesheets/af_style.scss"

export default props => (
  <StaticQuery
    query={graphql`
      query {
        notification: markdownRemark(
          fileAbsolutePath: { regex: "/notification/" }
        ) {
          frontmatter {
            title
            description
            isActive
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
)

class Layout extends PureComponent {
  state = {
    sideDrawerOpen: false,
    notificationOpen: true,
    mobile: isMobileOnly,
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

  removeNotification = desc => {
    this.setState({
      notificationOpen: false,
    })
    localStorage.setItem("notification", desc)
  }

  updateDimensions = () => {
    this.setState({
      mobile:
        typeof window !== `undefined` ? window.innerWidth < 768 : isMobileOnly,
    })
  }

  componentDidMount() {
    window.addEventListener(
      "resize",
      _.debounce(() => {
        this.updateDimensions()
      }, 150)
    )

    this.setState({
      notificationOpen: this.props.data.notification
        ? localStorage.getItem("notification") !==
          this.props.data.notification.frontmatter.description
        : false,
    })
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions)
  }

  render() {
    const { children, data } = this.props
    const { sideDrawerOpen, notificationOpen, mobile } = this.state
    let backdrop

    if (sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropToggleClickHandler} />
    }

    if (isIE)
      alert(
        "Internet Explorer is ancient and not supported. Please download a modern browser like Chrome, Firefox or Safari"
      )

    return (
      <IconContext.Provider value={{ className: "social__icons" }}>
        <div className="wrapper">
          {mobile ? (
            <div>
              <HamburgerNavbar
                hamburgerClickHandler={this.drawerToggleClickHandler}
              />
              <SideDrawer
                show={sideDrawerOpen}
                click={this.backdropToggleClickHandler}
              />
              {backdrop}
            </div>
          ) : (
            <Navbar />
          )}
          {data.notification && data.notification.frontmatter.isActive && (
            <Notification
              notification={data.notification.frontmatter}
              click={() =>
                this.removeNotification(
                  data.notification.frontmatter.description
                )
              }
              isVisible={notificationOpen}
            />
          )}
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
