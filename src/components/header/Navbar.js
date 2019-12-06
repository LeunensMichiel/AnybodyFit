import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import PropTypes, { bool } from "prop-types"

import colors from "../framework/colors"
import screens from "../framework/Screens"

import SmallLogo from "../../images/svg/abf_only.inline.svg"

const NavigationBar = styled.div`
  width: 100%;
  position: fixed;
  z-index: 50;
  background-color: ${props => (props.show ? colors.white : "transparent")};
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  padding: ${props => (props.show ? "25px" : "50px")} 0;
`
const Header = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledLogo = styled(SmallLogo)`
  height: 45px;
`

const NavigationItems = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const NavigationItem = styled(Link)`
  color: ${colors.black};
  text-decoration: none;
  margin-left: 20px;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover {
    color: ${colors.secondaryBlack};
  }

  &.activeLink {
    color: ${colors.secondaryBlack};
  }
`

const Navbar = ({ shouldChangeColor }) => {
  return (
    <>
      <NavigationBar show={shouldChangeColor}>
        <Header>
          <StyledLogo />
          <NavigationItems>
            <NavigationItem to="/" activeClassName="activeLink">
              home
            </NavigationItem>
            <NavigationItem to="/about/" activeClassName="activeLink">
              over
            </NavigationItem>
            <NavigationItem to="/news/" activeClassName="activeLink">
              nieuws
            </NavigationItem>
            <NavigationItem to="/contact/" activeClassName="activeLink">
              contact
            </NavigationItem>
          </NavigationItems>
        </Header>
      </NavigationBar>
    </>
  )
}

Navbar.propTypes = {
  shouldChangeColor: bool,
}

export default Navbar
