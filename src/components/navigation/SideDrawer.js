import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import colors from "../framework/Colors"

import CrossIcon from "../../images/svg/cross.inline.svg"

const Cross = styled(CrossIcon)`
  position: absolute;
  top: 1.66em;
  right: 1.66em;
  height: 45px;
  width: 35px;
  cursor: pointer;
  fill: ${colors.black};
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  &:focus {
    outline: none;
  }
  &:hover,
  &:focus {
    transform: scale(0.95);
  }
`

const Navigation = styled.nav`
  height: 100%;
  background: ${colors.secondaryWhite};
  box-shadow: ${props =>
    props.show === "true"
      ? " 0 14px 28px rgba(0, 0, 0, 0.33), 0 10px 10px rgba(0, 0, 0, 0.33)"
      : ""};
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  top: 0;
  left: 0;
  width: 70%;
  max-width: 300px;
  z-index: 200;
  transform: ${props =>
    props.show === "true" ? "translateX(0)" : "translateX(-101%)"};
  transition: transform 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  overflow-y: auto;
`
const NavigationItems = styled.ul`
  width: 100%;
  list-style: none;
  margin: 50% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const NavigationItem = styled.li`
  margin-bottom: ${props => (props.last ? "0" : "1.33em")};
  display: flex;

  &:hover > a,
  &:focus > a {
    color: ${colors.secondaryBlack};
  }

  a {
    font-size: 1.3em;
    padding: 0.66em 1.66em;
    width: 100%;
    text-transform: lowercase;
    color: ${colors.secondaryBlack};
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    -webkit-backface-visibility: hidden;
    border-right-width: 3px;
    border-right-style: solid;

    &.activeLink {
      font-weight: 600;
      border-right-color: ${colors.accent};
    }
  }
`

const StyledLink = styled(Link)`
  color: ${colors.secondaryBlack};
  text-decoration: none;
`

const SideDrawer = ({ show, click }) => {
  return (
    <Navigation show={show.toString()}>
      <span onClick={click} onKeyDown={click} tabIndex={0} role="button">
        <Cross />
      </span>
      <NavigationItems>
        <NavigationItem>
          <StyledLink to="/" activeClassName="activeLink" tabIndex={0}>
            home
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          <StyledLink to="/about/" activeClassName="activeLink" tabIndex={0}>
            over
          </StyledLink>
        </NavigationItem>
        <NavigationItem>
          {/* <StyledLink to="/news/" activeClassName="activeLink">
            nieuws
          </StyledLink> */}
        </NavigationItem>
        <NavigationItem last>
          <StyledLink to="/contact/" activeClassName="activeLink" tabIndex={0}>
            contact
          </StyledLink>
        </NavigationItem>
      </NavigationItems>
    </Navigation>
  )
}

export default SideDrawer
