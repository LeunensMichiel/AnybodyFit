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
import check from "../images/svg/check.svg"

const Landing = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: 92vh;
  justify-content: center;

  @media ${screens.tablet} {
    min-height: 95vh;
  }
`

const StyledLogo = styled(Logo)`
  width: 50%;
  z-index: 5;

  @media ${screens.laptop} {
    width: 20%;
  }
  @media ${screens.ipadProPortrait} {
    width: 30%;
  }
`
const MainImage = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  opacity: 0.33;
  clip-path: ellipse(160% 100% at 50% 0%);

  @media ${screens.laptop} {
    clip-path: ellipse(100% 100% at 50% 0%);
  }
`

const MainInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  max-width: 1024px;
  margin: 10em auto;
`

const MainHeader = styled.h1`
  font-size: 2.5em;
  text-align: center;
  margin-top: 0;

  @media ${screens.tablet} {
    font-size: 4em;
  }
  @media ${screens.laptop} {
    font-size: 5em;
  }
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
  width: 90%;
  max-width: 1024px;
  background: ${colors.secondaryWhite};
  margin: 0 auto;
  text-align: right;
  display: flex;
  margin-bottom: 50px;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  flex-direction: column-reverse;

  &:nth-of-type(2n) {
    text-align: left;
    flex-direction: column-reverse;
    background: ${colors.accent2};
  }

  @media ${screens.tablet} {
    flex-direction: row;

    &:nth-of-type(2n) {
      flex-direction: row-reverse;
    }
  }
`

const CardImage = styled.div`
  width: 100%;
  position: relative;
  height: 33vh;
  @media ${screens.tablet} {
    height: unset;
  }
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
  font-size: 2em;

  @media ${screens.tablet} {
    font-size: 3em;
  }
  @media ${screens.laptop} {
    font-size: 4em;
  }
`

const CardSubHeader = styled.p`
  font-style: italic;
  font-size: 0.9em;
  color: ${colors.secondaryBlack};

  @media ${screens.tablet} {
    font-size: 1.2em;
  }
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
  font-size: 0.9em;

  @media ${screens.tablet} {
    font-size: 1em;
  }
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

const Tom = styled.div`
  width: 90%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  margin: 3em auto;
`

const TomHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  text-align: right;
`

const TomTitle = styled.h1`
  font-size: 3em;
  margin: 0;

  @media ${screens.tablet} {
    font-size: 4em;
  }
  @media ${screens.laptop} {
    font-size: 5em;
  }
`

const TomSubtitle = styled.h2`
  font-size: 1.5em;
  color: ${colors.secondaryBlack};
  margin-top: 0.66em;

  @media ${screens.tablet} {
    font-size: 1.8em;
  }
  @media ${screens.laptop} {
    font-size: 2em;
  }
`

const TomAbout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  @media ${screens.laptop} {
    flex-direction: row;
  }
`

const TomPicture = styled.div`
  height: 250px;
  width: 250px;
  background-color: ${colors.secondaryWhite};
  border-radius: 100%;
  position: relative;
  border: 5px solid ${colors.secondaryWhite};
  margin-top: 1.5em;

  @media ${screens.tablet} {
    height: 400px;
    width: 400px;
    border: 10px solid ${colors.secondaryWhite};
    margin-top: 0;
  }

  img {
    border-radius: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    z-index: 3;
  }

  .circle {
    width: 180px;
    height: 180px;
    position: absolute;
    background-color: ${colors.secondaryWhite};
    border-radius: 100%;
    top: -30px;
    left: -30px;
    z-index: 1;

    &.middle {
      width: 100px;
      height: 100px;
      top: unset;
      left: unset;
      bottom: -80px;
      right: -40px;
    }

    &.small {
      width: 50px;
      height: 50px;
      top: unset;
      left: unset;
      bottom: -120px;
      right: 90px;
    }
  }
`

const TomItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  min-height: 200px;
  z-index: 5;
  text-align: center;
  margin-top: 3em;

  @media ${screens.laptop} {
    align-items: flex-end;
    text-align: right;
    margin-top: 0;
  }
`

const TomItem = styled.div`
  max-width: 400px;
  span {
    font-weight: 600;
  }

  @media ${screens.tablet} {
    font-size: 1.2em;
  }

  &:not(:last-child)::after {
    display: block;
    content: "";
    width: 40px;
    height: 1px;
    background-color: ${colors.accent};
    margin: 0.5em auto;

    @media ${screens.laptop} {
      margin: 0.33em 0 0.33em auto;
    }
  }
`

const Booking = styled.div`
  width: 90%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin: 1.5em auto;
  z-index: 5;

  @media ${screens.laptop} {
    flex-direction: row;
    margin: 10em auto 5em auto;
  }
`

const BookingCard = styled.div`
  width: 100%;
  max-width: 380px;
  min-height: 500px;
  background-color: ${colors.white};
  border-radius: 50px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.1);
  padding: 1.5em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1.5em;

  @media ${screens.laptop} {
    height: 500px;
    width: 380px;
    margin-bottom: 0;
  }
`

const BookingType = styled.h3`
  font-size: 1em;
  align-self: center;
  width: 100%;
  color: ${colors.accent};
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  border-bottom: 1px solid ${colors.accent};
  padding-bottom: 0.5em;

  @media ${screens.tablet} {
    font-size: 1.33em;
  }
`

const BookingHeader = styled.div``

const BookingPrice = styled.h2`
  font-size: 3em;
  margin: 0;
  margin-bottom: 0.1em;

  span {
    font-size: 0.33em;
    font-family: "Raleway", sans-serif;
    color: ${colors.secondaryBlack};
  }

  @media ${screens.tablet} {
    font-size: 4em;
  }
`

const BookingDesc = styled.span`
  color: ${colors.secondaryBlack};
  font-size: 0.9em;
  @media ${screens.tablet} {
    font-size: 1em;
  }
`

const BookingItems = styled.div`
  display: flex;
  flex-direction: column;
`

const BookingItem = styled.div`
  display: flex;
  justify-items: flex-start;
  align-items: center;
  margin-bottom: 16px;
`

const BookingText = styled.span`
  line-height: 1;
  font-size: 0.9em;
  @media ${screens.tablet} {
    font-size: 1em;
  }
`

const BookingIcon = styled.div`
  background-image: url(${check});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: 20px;
  width: 20px;
  margin-right: 16px;
`

const BookingButton = styled.a`
  align-self: center;
  width: 100%;
  padding: 1em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid ${colors.accent};
  border-radius: 50px;
  color: ${colors.accent};
  font-weight: 600;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  text-decoration: none;

  &:hover {
    background-color: ${colors.accent};
    color: ${colors.white};
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      description="Homepage of Anybodyfit, a personal home coaching business based in Ghent, Belgium"
    />
    <Helmet>
      <script
        id="setmore_script"
        type="text/javascript"
        src="https://my.setmore.com/webapp/js/src/others/setmore_iframe.js"
      ></script>
    </Helmet>
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
      <MainHeader>{data.landing.frontmatter.title}</MainHeader>
      <MainParagraph>{data.landing.frontmatter.description}</MainParagraph>
      <MoreLink to="/about/">meer over mezelf</MoreLink>
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
          {/* <Img
            fluid={data.firstCard.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Picture of someone doing yoga"
            title="Yoga"
            style={{ position: "static" }}
          /> */}
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
          {/* <Img
            fluid={data.secondCard.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="30% 50%"
            alt="Breathe"
            title="Breathe"
            style={{ position: "static" }}
          /> */}
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
          {/* <Img
            fluid={data.thirdCard.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 90%"
            alt="Think outside the box"
            title="Think outside the box"
            style={{ position: "static" }}
          /> */}
        </CardImageContainer>
      </CardImage>
    </InfoCard>
    <Tom>
      <TomHeader>
        <TomTitle>Ontmoet Tom,</TomTitle>
        <TomSubtitle>uw persoonlijke coach</TomSubtitle>
      </TomHeader>
      <TomAbout>
        <TomPicture>
          <Img
            fluid={data.landing.frontmatter.profilePic.childImageSharp.fluid}
            objectFit="cover"
            objectPosition="50% 50%"
            alt="Tom"
            title="Tom"
            style={{ position: "static" }}
          />
          <div className="circle" />
          <div className="circle middle" />
          <div className="circle small" />
        </TomPicture>
        <TomItems>
          {data.qualifications.edges.map(item => (
            <TomItem>{item.node.frontmatter.title}</TomItem>
          ))}
        </TomItems>
      </TomAbout>
    </Tom>
    <Booking>
      <BookingCard>
        <BookingType>Yoga</BookingType>
        <BookingHeader>
          <BookingPrice>
            €10<span> /sessie</span>
          </BookingPrice>
          <BookingDesc>
            Om even tot rust te kunnen komen. U krijgt de volgende voordelen:
          </BookingDesc>
        </BookingHeader>
        <BookingItems>
          <BookingItem>
            <BookingIcon />
            <BookingText>Gratis proefles</BookingText>
          </BookingItem>
          <BookingItem>
            <BookingIcon />
            <BookingText>Kleine groepjes</BookingText>
          </BookingItem>
          <BookingItem>
            <BookingIcon />
            <BookingText>Oefeningen op maat</BookingText>
          </BookingItem>
        </BookingItems>
        <BookingButton
          id="Setmore_button_iframe"
          href="https://my.setmore.com/bookingpage/c2f88312-cc6e-4dd2-ad87-2d8811b1ed3b/bookclass"
        >
          Boek Yoga
        </BookingButton>
      </BookingCard>
      <BookingCard>
        <BookingType>Personal Coaching</BookingType>
        <BookingHeader>
          <BookingPrice>
            €30<span> /uur</span>
          </BookingPrice>
          <BookingDesc>
            Voor een gezondere levensstijl. U krijgt de volgende voordelen:
          </BookingDesc>
        </BookingHeader>
        <BookingItems>
          <BookingItem>
            <BookingIcon />
            <BookingText>Gratis intake gesprek</BookingText>
          </BookingItem>
          <BookingItem>
            <BookingIcon />
            <BookingText>Gedragsverandering leren</BookingText>
          </BookingItem>
          <BookingItem>
            <BookingIcon />
            <BookingText>Gezondheids- en mindset coaching</BookingText>
          </BookingItem>
        </BookingItems>
        <BookingButton
          id="Setmore_button_iframe"
          href="https://my.setmore.com/bookingpage/c2f88312-cc6e-4dd2-ad87-2d8811b1ed3b"
        >
          Boek Coaching
        </BookingButton>
      </BookingCard>
    </Booking>
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
    qualifications: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/qualifications/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
    landing: markdownRemark(fileAbsolutePath: { regex: "/pages/landing/" }) {
      frontmatter {
        title
        tomTitle
        description
        profilePic {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 85) {
              presentationWidth
              presentationHeight
              ...GatsbyImageSharpFluid_withWebp
            }
          }
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
    tom: file(relativePath: { eq: "tomj.jpg" }) {
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
