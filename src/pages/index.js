import React, { PureComponent } from "react"
import styled from "styled-components"
import Helmet from "react-helmet"
import Img from "gatsby-image/withIEPolyfill"
import { graphql, Link } from "gatsby"
import _ from "lodash"
import MapGL, { Marker } from "react-map-gl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

import Logo from "../images/svg/logo.inline.svg"

import next from "../images/svg/next.svg"
import Pin from "../images/svg/pin.inline.svg"
import Chevron from "../images/svg/right-chevron.inline.svg"

import "mapbox-gl/dist/mapbox-gl.css"

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
    font-size: 4.5em;
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
  padding: 1em;

  @media ${screens.tablet} {
    padding: 2em;
  }
  @media ${screens.tablet} {
    padding: 3em 2em;
  }
`

const CardHeader = styled.h2`
  font-size: 1.8em;

  @media ${screens.tablet} {
    font-size: 2.5em;
  }
  @media ${screens.laptop} {
    font-size: 3em;
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
  width: 100%;
  max-width: 1024px;
  margin: 1.5em auto 5em auto;
  display: flex;
  flex-direction: column;
  height: auto;
  z-index: 5;

  @media ${screens.laptop} {
    margin: 10em auto 5em auto;
  }
`

const BookingTitle = styled.h1`
  font-size: 3em;
  width: 90%;
  margin: 0 auto 1em auto;
  @media ${screens.tablet} {
    font-size: 4em;
  }
  @media ${screens.laptop} {
    font-size: 5em;
    width: 100%;
  }
`

const MasterDetailView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media ${screens.tablet} {
    flex-direction: row;
  }
`

const Master = styled.div`
  background: ${props => (props.active ? colors.secondaryWhite : colors.white)};
  border-left: 3px solid
    ${props => (props.active ? colors.accent : colors.white)};
  padding: 1em 1.5em;
  width: 100%;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  &:focus {
    background: ${colors.accent};
    cursor: pointer;
  }

  @media ${screens.tablet} {
    max-width: 300px;
    padding: 1.5em;
  }
  @media ${screens.laptop} {
    &:hover {
      background: ${colors.accent};
      cursor: pointer;
    }
  }
`

const MasterTitle = styled.h3`
  font-size: 1.3em;
  margin-bottom: 0.5em;
  @media ${screens.tablet} {
    font-size: 1.5em;
    margin-bottom: 1em;
  }
`

const MasterFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    height: 20px;
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform: ${props => (props.active ? "rotate(90deg)" : "")};
    color: ${colors.secondaryBlack};
  }
`

const MasterDate = styled.span`
  font-size: 0.9em;
  color: ${colors.secondaryBlack};
  text-transform: uppercase;
`

const Detail = styled.div`
  background: ${colors.secondaryWhite};
  flex: 4;
  padding: 1.5em;

  @media ${screens.laptop} {
    padding: 1.5em 2.5em;
  }
`

const DetailHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2em;

  @media ${screens.tablet} {
    margin-bottom: 3em;
  }
`

const DetailTitle = styled.h2`
  font-size: 1.8em;
  margin-top: 0;
  margin-bottom: 0.1em;

  @media ${screens.laptop} {
    font-size: 3.5em;
  }
`

const DetailSubtitle = styled.p`
  margin-bottom: 0em;
  color: ${colors.secondaryBlack};
  font-size: 0.9em;

  @media ${screens.tablet} {
    font-size: 1em;
  }
`

const DetailSubSubtitle = styled.p`
  margin-bottom: 1em;
  color: ${colors.secondaryBlack};
  font-size: 0.6em;
  font-weight: 700;

  @media ${screens.tablet} {
    font-size: 0.66em;
  }
`

const DetailDescription = styled.p`
  font-style: italic;
  text-align: justify;
`

const DetailItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media ${screens.tablet} {
    justify-content: stretch;
  }
`

const DetailItem = styled.span`
  font-weight: 700;
  color: ${props => (props.active ? colors.black : colors.white)};
  background: ${props =>
    props.active ? colors.accent2 : colors.secondaryBlack};
  font-size: 0.7em;
  backface-visibility: hidden;
  margin: 0.5em;
  padding: 0.33em 0.66em;
  border-radius: 50px;
  transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1) 0s;

  @media ${screens.tablet} {
    &:first-of-type {
      margin-left: 0;
    }
  }
`

const DetailFooter = styled.div`
  width: 100%;
  padding-top: 4em;
  padding-bottom: 2em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${colors.accent};

  @media ${screens.tablet} {
    font-size: 1em;
    flex-direction: row;
  }
`

const DetailPrice = styled.p`
  margin: 0;
  font-weight: 700;
  color: ${colors.accent};
  font-size: 2em;
  margin-bottom: 15px;
  span {
    font-size: 0.5em;
    color: ${colors.secondaryBlack};
  }

  @media ${screens.tablet} {
    margin-bottom: 0;
    margin-right: 25px;
  }
`

const BookingButton = styled.a`
  width: 200px;
  padding: 0.66em 1.33em;
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

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 250px;
  max-width: 1024px;
  margin-top: 2em;
  margin-bottom: 2em;
  background: ${colors.accent2};
  padding: 0.66em;

  @media ${screens.laptop} {
    flex-direction: row;
    padding: 1em;
    margin-top: 4em;
    margin-bottom: 4em;
  }
`

const ContactBrand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 1.3;

  @media ${screens.tablet} {
    align-items: stretch;
    justify-content: flex-start;
  }
`

const Address = styled.div`
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colors.secondaryBlack};
  margin-bottom: 1em;

  span:first-child {
    font-weight: 600;
  }
  @media ${screens.tablet} {
    align-items: flex-start;
  }
`

const Map = styled.div`
  flex: 3;
  width: 100%;
  height: 33vh;

  @media ${screens.laptop} {
    height: 250px;
  }
`

const Faq = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 2em auto 5em auto;
  display: flex;
  flex-direction: column;

  @media ${screens.tablet} {
    margin: 2em auto 10em auto;
  }
`

const FaqHeader = styled.h2`
  font-size: 2em;
  @media ${screens.tablet} {
    font-size: 2.66em;
  }
`

const FaqItem = styled.div`
  display: flex;
  flex-direction: column;
`

const Question = styled.div`
  font-size: 1.1em;
  font-weight: 700;
  background: ${props => (props.active ? colors.accent : colors.white)};
  padding: 1em;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    width: 90%;
  }

  svg {
    height: 20px;
    transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    transform: ${props => (props.active ? "rotate(90deg)" : "")};
    color: ${colors.secondaryBlack};
  }

  &:focus {
    background: ${colors.accent};
    cursor: pointer;
  }

  @media ${screens.laptop} {
    &:hover {
      background: ${colors.accent};
      cursor: pointer;
    }
  }
`

const Answer = styled.p`
  background: ${colors.white};
  padding: 1em;
  margin: 0;
`

class IndexPage extends PureComponent {
  state = {
    item: 0,
    faqItem: -1,
    viewport: {
      longitude: 3.73,
      latitude: 51.051,
      zoom: 13,
    },
  }

  changeItem = item => {
    this.setState((state, props) => ({
      item: state.item === item ? -1 : item,
      viewport: {
        longitude: props.data.services.edges[item].node.frontmatter.longitude,
        latitude: props.data.services.edges[item].node.frontmatter.latitude,
        zoom: 13,
      },
    }))
  }

  changeFaqItem = faqItem => {
    this.setState((state, props) => ({
      faqItem: state.faqItem === faqItem ? -1 : faqItem,
    }))
  }

  updateViewport = viewport => {
    this.setState({ viewport })
  }

  render() {
    const { data } = this.props
    const { item, faqItem, viewport } = this.state
    let selectedItem = data.services.edges[item]
    const tomWords = _.split(data.landing.frontmatter.tomTitle, ";")
    const weekdays = [
      "Zondag",
      "Maandag",
      "Dinsdag",
      "Woensdag",
      "Donderdag",
      "Vrijdag",
      "Zaterdag",
    ]
    return (
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
        {data.bigCards.edges.map(card => (
          <InfoCard key={card.node.frontmatter.title}>
            <CardBody>
              <CardHeader>{card.node.frontmatter.title}</CardHeader>
              <CardSubHeader>{card.node.frontmatter.description}</CardSubHeader>
              {card.node.frontmatter.items.map(subItem => (
                <CardItem key={subItem.itemText}>
                  <CardItemText>{subItem.itemText}</CardItemText>
                  <CardItemIcon svg={subItem.itemIcon.publicURL}></CardItemIcon>
                </CardItem>
              ))}
              <CardMoreInfo to="/about/" svg={next}></CardMoreInfo>
            </CardBody>
            <CardImage>
              <CardImageContainer>
                <Img
                  fluid={card.node.frontmatter.image.childImageSharp.fluid}
                  objectFit="cover"
                  objectPosition="50% 50%"
                  alt={card.node.frontmatter.title}
                  title={card.node.frontmatter.title}
                  style={{ position: "static" }}
                />
              </CardImageContainer>
            </CardImage>
          </InfoCard>
        ))}
        <Tom>
          <TomHeader>
            <TomTitle>{tomWords[0]}</TomTitle>
            <TomSubtitle>{tomWords[1]}</TomSubtitle>
          </TomHeader>
          <TomAbout>
            <TomPicture>
              <Img
                fluid={
                  data.landing.frontmatter.profilePic.childImageSharp.fluid
                }
                objectFit="cover"
                objectPosition="50% 50%"
                alt="Picture of Tom Janssens"
                title="Tom Janssens"
                style={{ position: "static" }}
              />
              <div className="circle" />
              <div className="circle middle" />
              <div className="circle small" />
            </TomPicture>
            <TomItems>
              {data.qualifications.edges.map(item => (
                <TomItem key={item.node.frontmatter.title}>
                  {item.node.frontmatter.title}
                </TomItem>
              ))}
            </TomItems>
          </TomAbout>
        </Tom>
        <Booking>
          <BookingTitle>Aanbod</BookingTitle>
          {data.services.edges.map((service, index) => (
            <MasterDetailView key={service.node.frontmatter.title}>
              <Master
                onClick={() => this.changeItem(index)}
                active={index === item}
              >
                <MasterTitle>{service.node.frontmatter.title}</MasterTitle>
                <MasterFooter active={index === item}>
                  <MasterDate>
                    {_.replace(
                      service.node.frontmatter.date,
                      service.node.frontmatter.date.substring(0, 1),
                      weekdays[service.node.frontmatter.date.substring(0, 1)]
                    )}
                  </MasterDate>
                  <Chevron />
                </MasterFooter>
              </Master>
              {index === item && (
                <Detail>
                  <DetailHeader>
                    <DetailTitle>
                      {selectedItem.node.frontmatter.title}
                    </DetailTitle>
                    <DetailSubtitle>
                      {selectedItem.node.frontmatter.shortDesc}
                    </DetailSubtitle>
                  </DetailHeader>
                  <DetailDescription>
                    {selectedItem.node.frontmatter.description}
                  </DetailDescription>
                  <DetailSubtitle>Thema's die aan bod komen</DetailSubtitle>
                  <DetailSubSubtitle>
                    Gekleurde thema's komen binnenkort aan bod!
                  </DetailSubSubtitle>
                  <DetailItems>
                    {selectedItem.node.frontmatter.items.map(subItem => (
                      <DetailItem
                        key={subItem.bullet}
                        active={subItem.isNextSession}
                      >
                        {subItem.bullet}
                      </DetailItem>
                    ))}
                  </DetailItems>
                  <MapContainer>
                    <ContactBrand>
                      <Address>
                        <span>{selectedItem.node.frontmatter.location}</span>
                        <span>
                          {selectedItem.node.frontmatter.address.street}
                        </span>
                        <span>
                          {selectedItem.node.frontmatter.address.city}{" "}
                          {selectedItem.node.frontmatter.address.postcode}
                        </span>
                        <span>België</span>
                      </Address>
                      <Address>
                        <span>
                          {_.replace(
                            selectedItem.node.frontmatter.date.substring(0, 1),
                            selectedItem.node.frontmatter.date.substring(0, 1),
                            weekdays[
                              selectedItem.node.frontmatter.date.substring(0, 1)
                            ]
                          )}
                        </span>
                        <span>
                          om {selectedItem.node.frontmatter.date.substring(2)}
                        </span>
                      </Address>
                    </ContactBrand>
                    <Map>
                      <MapGL
                        {...viewport}
                        width="100%"
                        height="100%"
                        mapStyle={`${process.env.GATSBY_MAP_STYLE}`}
                        onViewportChange={this.updateViewport}
                        mapboxApiAccessToken={`${process.env.GATSBY_MAP_API}`}
                      >
                        <Marker
                          longitude={selectedItem.node.frontmatter.longitude}
                          latitude={selectedItem.node.frontmatter.latitude}
                        >
                          <Pin />
                        </Marker>
                      </MapGL>
                    </Map>
                  </MapContainer>
                  <DetailFooter>
                    <DetailPrice>
                      €{selectedItem.node.frontmatter.price.toFixed(2)}
                      <span>
                        /
                        {selectedItem.node.frontmatter.isPerHour
                          ? "uur"
                          : "sessie"}
                      </span>
                    </DetailPrice>
                    <BookingButton
                      id="Setmore_button_iframe"
                      href={selectedItem.node.frontmatter.url}
                    >
                      Boek
                    </BookingButton>
                  </DetailFooter>
                </Detail>
              )}
            </MasterDetailView>
          ))}
        </Booking>
        <Faq>
          <FaqHeader>Veelgestelde Vragen</FaqHeader>
          {data.faq.edges.map((question, index) => (
            <FaqItem key={question.node.frontmatter.rank}>
              <Question
                onClick={e => {
                  this.changeFaqItem(index)
                  e.preventDefault()
                }}
                active={index === faqItem}
              >
                <span>{question.node.frontmatter.question}</span>
                <Chevron />
              </Question>
              {index === faqItem && (
                <Answer>{question.node.frontmatter.answer}</Answer>
              )}
            </FaqItem>
          ))}
        </Faq>
      </Layout>
    )
  }
}

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
    bigCards: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/infocards/" } }
      sort: { fields: frontmatter___rank }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 1080, quality: 85) {
                  presentationWidth
                  presentationHeight
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            rank
            items {
              itemText
              itemIcon {
                publicURL
              }
            }
          }
        }
      }
    }
    faq: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/faq/" } }
      sort: { fields: frontmatter___rank }
    ) {
      edges {
        node {
          frontmatter {
            question
            answer
            rank
          }
        }
      }
    }
    services: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/services/" } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            description
            address {
              city
              postcode
              street
            }
            date
            isPerHour
            latitude
            location
            longitude
            price
            url
            shortDesc
            items {
              bullet
              isNextSession
            }
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
  }
`
