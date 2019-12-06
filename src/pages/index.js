import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

import Logo from "../images/svg/logo.inline.svg"

import next from "../images/svg/next.svg"
import donation from "../images/svg/donation.svg"
import care from "../images/svg/care.svg"
import emotions from "../images/svg/emotions.svg"
import group from "../images/svg/group.svg"
import helping from "../images/svg/helping.svg"
import innovation from "../images/svg/innovation.svg"
import social from "../images/svg/social-care.svg"
import startup from "../images/svg/startup.svg"
import waves from "../images/svg/waves.svg"

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

const InfoCard = styled.div`
  width: 100%;
  max-width: 1024px;
  background: ${colors.secondaryWhite};
  margin: 0 auto;
  text-align: right;
  display: flex;
  margin-bottom: 50px;

  &:nth-of-type(2n) {
    text-align: left;
    flex-direction: row-reverse;
    background: ${colors.accent2};
  }
`

const CardImage = styled.div`
  width: 100%;
  position: relative;
`

const CardImageContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`

const CardBody = styled.div`
  width: 100%;
  padding: 3em 2em;
`

const CardHeader = styled.h2`
  font-size: 4em;
`

const CardSubHeader = styled.p`
  font-style: italic;
  font-size: 1.2em;
  color: ${colors.secondaryBlack};
`

const CardItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 15px;
  flex-direction: ${props => (props.reverse ? "row-reverse" : "row")};

  div {
    ${props => (props.reverse ? "margin-right: 28px" : "  margin-left: 28px")};
  }
`

const CardItemText = styled.span`
  flex: 1;
`

const CardItemIcon = styled.div`
  background-image: url(${props => (props.svg ? props.svg : "")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 40px;
`

const CardMoreInfo = styled(Link)`
  background-image: url(${props => (props.svg ? props.svg : "")});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 40px;
  width: 40px;
  display: block;
  margin: 2em auto 0 auto;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:hover {
    transform: scale3d(1.2, 1, 1);
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
    <InfoCard>
      <CardBody>
        <CardHeader>Verrijken & verbinden</CardHeader>
        <CardSubHeader>
          Een veilige ruimte creëren waar kwetsbaarheid & zelfexpressie centraal
          staan
        </CardSubHeader>
        <CardItem>
          <CardItemText>10% doneren aan goede doelen</CardItemText>
          <CardItemIcon svg={donation}></CardItemIcon>
        </CardItem>
        <CardItem>
          <CardItemText>Oase van rust in het centrum van Gent</CardItemText>
          <CardItemIcon svg={waves}></CardItemIcon>
        </CardItem>
        <CardItem>
          <CardItemText>
            Netwerk van professionals om aan elke hulpvraag te kunnen voldoen
          </CardItemText>
          <CardItemIcon svg={group}></CardItemIcon>
        </CardItem>
        <CardMoreInfo to="/about/" svg={next}></CardMoreInfo>
      </CardBody>
      <CardImage>
        <CardImageContainer>
          <Img
            fluid={data.firstCard.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Picture of someone doing yoga"
            title="Yoga"
            style={{ position: "static" }}
          />
        </CardImageContainer>
      </CardImage>
    </InfoCard>
    <InfoCard>
      <CardBody>
        <CardHeader>Leren Groeien</CardHeader>
        <CardSubHeader>
          Leren uw comfortzone te verlaten & te verruimen
        </CardSubHeader>
        <CardItem reverse>
          <CardItemText>
            Tools geven om zelfstandig te werk te gaan
          </CardItemText>
          <CardItemIcon svg={innovation}></CardItemIcon>
        </CardItem>
        <CardItem reverse>
          <CardItemText>Boostersessies voor wanneer je vastzit</CardItemText>
          <CardItemIcon svg={startup}></CardItemIcon>
        </CardItem>
        <CardItem reverse>
          <CardItemText>
            Creëren van een community die elkaars proces ondersteunt
          </CardItemText>
          <CardItemIcon svg={social}></CardItemIcon>
        </CardItem>
        <CardMoreInfo to="/about/" svg={next}></CardMoreInfo>
      </CardBody>
      <CardImage>
        <CardImageContainer>
          <Img
            fluid={data.secondCard.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="70% 50%"
            alt="Breathe"
            title="Breathe"
            style={{ position: "static" }}
          />
        </CardImageContainer>
      </CardImage>
    </InfoCard>
    <InfoCard>
      <CardBody>
        <CardHeader>Holistische aanpak</CardHeader>
        <CardSubHeader>
          Coaching op vlak van gezondheid, mindset, zelfbeeld en meer
        </CardSubHeader>
        <CardItem>
          <CardItemText>
            Focus niet enkel op het fysieke, maar ook het mentale en spirituele
            aspect
          </CardItemText>
          <CardItemIcon svg={emotions}></CardItemIcon>
        </CardItem>
        <CardItem>
          <CardItemText>Persoonlijke formule </CardItemText>
          <CardItemIcon svg={helping}></CardItemIcon>
        </CardItem>
        <CardItem>
          <CardItemText>
            Accomoderen van personen met speciale noden
          </CardItemText>
          <CardItemIcon svg={care}></CardItemIcon>
        </CardItem>
        <CardMoreInfo to="/about/" svg={next}></CardMoreInfo>
      </CardBody>
      <CardImage>
        <CardImageContainer>
          <Img
            fluid={data.thirdCard.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 90%"
            alt="Think outside the box"
            title="Think outside the box"
            style={{ position: "static" }}
          />
        </CardImageContainer>
      </CardImage>
    </InfoCard>
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
    firstCard: file(relativePath: { eq: "firstCard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    secondCard: file(relativePath: { eq: "secondCard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    thirdCard: file(relativePath: { eq: "thirdCard.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1080, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
