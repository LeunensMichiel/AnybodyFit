import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

import Logo from "../images/svg/logo.svg"

const Landing = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 95vh;
  justify-content: center;
`

const StyledLogo = styled(Logo)`
  width: 20%;
  z-index: 5;
`
const MainImage = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  opacity: 0.33;
  clip-path: ellipse(100% 100% at 50% 0%);
`

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1024px;
  margin: 10em auto;
`

const MainHeader = styled.h1`
  font-size: 5em;
  text-align: center;
  margin-top: 0;
`

const MainParagraph = styled.p`
  margin: 0;
  text-align: justify;
`

const MoreLink = styled(Link)`
  color: ${colors.secondaryBlack};
  text-decoration: none;
  padding: 0.33em 1em;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  border-bottom: 1px solid ${colors.secondaryBlack};
  border-top: 1px solid ${colors.secondaryBlack};
  margin-top: 50px;

  &:hover {
    color: ${colors.secondaryWhite};
    border-color: ${colors.secondaryWhite};
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Homepage of Anybodyfit, a personal home coaching business based in Ghent, Belgium"
    />
    <Landing>
      <MainImage>
        <Img
          fluid={data.mainImage.childImageSharp.fluid}
          objectFit="cover"
          objectPosition="50% 100%"
          alt="Picture of someone doing yoga"
          title="Main Page Header"
          style={{ position: "static" }}
        />
      </MainImage>
      <StyledLogo />
    </Landing>
    <MainInfo>
      <MainHeader>
        Yoga & <br />
        Personal Coaching
      </MainHeader>
      <MainParagraph>
        AnyBodyFit streeft ernaar om een gezonde levensstijl voor iedereen
        toegankelijk te maken. Door het ondersteunen van de individuele groei,
        het creëren van een sociaal vangnet, en het hanteren van een
        allesomvattende aanpak, leggen we de basis voor een optimaal fysiek,
        mentaal & emotioneel welzijn.
      </MainParagraph>
      <MoreLink to="/about/">meer over ons</MoreLink>
    </MainInfo>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    mainImage: file(relativePath: { eq: "home.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
