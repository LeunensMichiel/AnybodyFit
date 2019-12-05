import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import colors from "../framework/colors"
import screens from "../framework/Screens"

import SmallLogo from "../../images/svg/abf_only.svg"

const NavigationBar = styled.div`
  width: 100%;
  position: fixed;
  z-index: 50;
`
const Header = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0;
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

const Navbar = () => {
  return (
    <>
      <NavigationBar>
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

export default Navbar
