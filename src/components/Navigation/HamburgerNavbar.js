import React from "react"
import { PropTypes } from "prop-types"
import styled from "styled-components"

import colors from "../Framework/colors"
import screens from "../Framework/Screens"

import Hamburger from "../../images/svg/menu.inline.svg"

const HamburgerIcon = styled(Hamburger)`
  height: 45px;
  width: 35px;
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  &:focus {
    outline: none;
  }
  &:hover {
  }
`

const Header = styled.header`
  top: 5vh;
  left: 5vh;
  position: fixed;
  z-index: 99;
`

const HamburgerNavbar = ({ hamburgerClickHandler }) => (
  <Header onClick={hamburgerClickHandler}>
    <HamburgerIcon />
  </Header>
)

export default HamburgerNavbar
