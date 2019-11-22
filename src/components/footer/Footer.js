import React from "react"
import styled from "styled-components"

import colors from "../framework/Colors"
import { FaFacebookSquare } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 1.5em;
  text-align: center;
`
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2.5em 0;

  span {
    font-weight: 700;
  }
`

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1em 0;
  width: 66px;
`

const Footer = () => {
  return (
    <FooterContainer>
      <Contact>
        <h3>Contact</h3>
        <div>
          <span>Email: </span>info@anybody.fitness
        </div>
        <div>
          <span>Telefoon: </span> 0485 65 33 06
        </div>
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
      </Contact>
      &copy; {new Date().getFullYear()} Anybodyfit. Alle rechten voorbehouden.{" "}
      <br /> Site nog in opbouw.
    </FooterContainer>
  )
}

export default Footer
