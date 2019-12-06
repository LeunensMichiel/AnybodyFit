import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import colors from "../framework/Colors"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

import Logo from "../../images/svg/logo.inline.svg"

const FooterContainer = styled.footer`
  width: 100%;
  min-height: 450px;
  background: ${colors.secondaryWhite};
  padding: 2em;
  display: flex;
  align-items: center;
  clip-path: ellipse(80% 100% at 50% 100%);
`

const FooterInnerContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  height: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: flex-end;
  position: relative;
`

const NavigationItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  width: 100%;
  height: 100%;
`

const NavigationItem = styled(Link)`
  color: ${colors.secondaryBlack};
  text-decoration: none;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  margin-top: 10px;

  &:hover {
    font-weight: 700;
  }

  &.activeLink {
    font-weight: 700;
  }
  &.smallNav {
    margin-top: 20px;
    font-size: 0.8em;
  }
`

const FooterCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  height: 100%;
  width: 100%;
`

const StyledLogo = styled(Logo)`
  height: 100px;
  margin-bottom: 50px;
`

const Copy = styled.p`
  font-size: 0.8em;
  text-align: center;
  margin: 0;
  color: ${colors.secondaryBlack};
`

const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  height: 100%;
  width: 100%;
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 66px;
  margin-bottom: 50px;
`

const LangContainer = styled.div`
  color: ${colors.secondaryBlack};
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-end;
`

const StyledSpan = styled.span`
  cursor: pointer;
  transition: 0.3s cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    font-weight: 700;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
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
          <NavigationItem
            to="/policy/"
            activeClassName="activeLink"
            className="smallNav"
          >
            algemene voorwaarden
          </NavigationItem>
        </NavigationItems>
        <FooterCenter>
          <StyledLogo />
          <Copy>
            &copy; {new Date().getFullYear()} Anybodyfit. Alle rechten
            voorbehouden.
          </Copy>
        </FooterCenter>
        <FooterRight>
          <SocialIcons>
            <a
              href="https://www.facebook.com/AnyBodyFitCoaching/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://www.instagram.com/tj_anybodyfit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </SocialIcons>
          <LangContainer>
            <StyledSpan>english</StyledSpan>
            <StyledSpan>nederlands</StyledSpan>
          </LangContainer>
        </FooterRight>
      </FooterInnerContainer>
    </FooterContainer>
  )
}

export default Footer
