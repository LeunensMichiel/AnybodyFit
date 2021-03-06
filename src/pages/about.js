import React, { PureComponent } from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { graphql } from "gatsby"
import _ from "lodash"
import CountUp from "react-countup"
import VisibilitySensor from "react-visibility-sensor"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

const Enlightment = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 5em auto;
  display: flex;
  flex-direction: column;

  @media ${screens.laptop} {
    margin: 10em auto;
  }
`

const Title = styled.h1`
  font-size: 2.5em;
  line-height: 1.5;
  z-index: 5;
  position: relative;

  @media ${screens.tablet} {
    font-size: 4em;
    width: 80%;
  }
  @media ${screens.laptop} {
    padding: 0;
    font-size: 5em;
    width: 60%;
  }
`

const Article = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media ${screens.laptop} {
    flex-direction: row;
    padding: 0;
  }
`

const Paragraph = styled.div`
  flex: 1;
  text-align: justify;
  font-size: 0.9em;

  p:first-of-type {
    margin-bottom: 2em;

    &::first-letter {
      font-size: 200%;
      color: ${colors.accent};
    }

    &::first-line {
      line-height: 1.2;
    }
  }

  p:nth-of-type(2) {
    font-size: 1em;
  }

  @media ${screens.laptop} {
    margin-right: 100px;
    font-size: 1em;
    p:first-of-type {
      font-size: 1.1em;
    }
  }
`

const ArticleImage = styled.div`
  flex: 0.9;
  background: ${colors.secondaryWhite};
  position: relative;
  padding: 0.5em;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;

  div {
    position: relative;
  }

  @media ${screens.tablet} {
    padding: 1em;
  }
`

const ImageContainer = styled.div`
  height: 90%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
`

const Numbers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5em auto;
  padding: 1.5em;
  overflow: hidden;
  position: relative;
  max-width: 650px;
  h1 {
    font-size: 3em;
    z-index: 2;
  }

  h3 {
    font-size: 1em;
    color: ${colors.secondaryBlack};
    text-align: center;
    z-index: 2;
  }

  @media ${screens.tablet} {
    padding: 3em;
    margin: 10em auto;

    h1 {
      font-size: 5em;
    }

    h3 {
      font-size: 1.2em;
    }
  }
`

const Circle = styled.div`
  background: ${props =>
    props.accent ? colors.accent2 : colors.secondaryWhite};
  height: ${props => props.size / 2}px;
  width: ${props => props.size / 2}px;
  border-radius: 100%;
  position: absolute;
  top: ${props => (props.top ? props.top / 2 + "px" : "unset")};
  bottom: ${props => (props.bottom ? props.bottom / 2 + "px" : "unset")};
  left: ${props => (props.left ? props.left / 2 + "px" : "unset")};
  right: ${props => (props.right ? props.right / 2 + "px" : "unset")};
  z-index: 1;

  @media ${screens.tablet} {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
    top: ${props => (props.top ? props.top + "px" : "unset")};
    bottom: ${props => (props.bottom ? props.bottom + "px" : "unset")};
    left: ${props => (props.left ? props.left + "px" : "unset")};
    right: ${props => (props.right ? props.right + "px" : "unset")};
  }
`

const Charity = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  @media ${screens.laptop} {
    flex-direction: row;
    padding: 0;
  }
`

const CharityInfo = styled.div`
  flex: 1;
  text-align: justify;

  p:nth-of-type(2) {
    margin-top: 3em;
  }

  @media ${screens.laptop} {
    margin-right: 50px;
  }
`

const CharityCard = styled.div`
  flex: 0.9;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  background: ${colors.secondaryBlack};
  padding: 0.5em 0.5em 3em 0.5em;
  margin: 0 auto;

  @media ${screens.tablet} {
    max-width: unset;
    margin: unset;
  }

  @media ${screens.laptop} {
    max-width: unset;
    padding: 0.66em 0.66em 3em 0.66em;
  }
`

const CharityCardItem = styled.div`
  background: ${colors.white};
  display: flex;
  align-items: center;
  padding: 1em;

  &:nth-of-type(2n) {
    background: ${colors.secondaryWhite};
    flex-direction: row-reverse;

    div {
      margin-right: 0;
      margin-left: 16px;
      text-align: right;
    }
  }

  @media ${screens.laptop} {
    &:nth-of-type(2n) {
      div {
        margin-left: 32px;
      }
    }
  }
`

const CharityNumber = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 1em;
  border: 2px solid ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  min-width: 45px;
  min-height: 45px;
  padding-bottom: 4px;
  margin-right: 16px;

  @media ${screens.laptop} {
    font-size: 1.3em;
    margin-right: 32px;
  }
`

const CharityText = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 1em;
  }

  span:nth-child(2) {
    font-size: 0.8em;
    font-weight: 600;
    color: ${colors.secondaryBlack};
  }

  @media ${screens.tablet} {
    span:first-child {
      font-size: 1.1em;
    }

    span:nth-child(2) {
      font-size: 0.9em;
    }
  }
`

const Grow = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  @media ${screens.laptop} {
    padding-right: 5vw;
    padding-bottom: 500px;
  }
`

const GrowInnerContainer = styled.div`
  width: 100%;
  background: ${colors.accent2};

  @media ${screens.laptop} {
    padding-top: 2vw;
    padding-left: 5vw;
  }
`

const GrowTextContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
`

const GrowDescription = styled.p`
  text-align: justify;
  text-align-last: right;
  font-size: 0.9em;
  text-justify: newspaper;
  &::first-letter {
    font-size: 200%;
    color: ${colors.accent};
  }
  &::first-line {
    line-height: 1.2;
  }

  @media ${screens.laptop} {
    font-size: 1.2em;
  }
`

const GrowFootnote = styled.p`
  text-align: justify;
  text-align-last: right;
  color: ${colors.secondaryBlack};
  font-size: 0.8em;

  @media ${screens.laptop} {
    font-size: 1em;
  }
`

const GrowImage = styled.div`
  width: 100%;
  height: 500px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${screens.laptop} {
    position: absolute;
  }
`

const GrowImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
const GrowImageInnerContainer = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  z-index: 1;
`

const GrowCard = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`
const GrowCardText = styled.div`
  color: ${colors.white};
  background: ${colors.black};
  font-style: italic;
  width: 100%;
  max-width: 400px;
  text-align: justify;
  padding: 1.5em;
  font-size: 0.9em;

  @media ${screens.laptop} {
    font-size: 1em;
  }
`

const Holla = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 5em auto;
  position: relative;
  padding-bottom: 5em;

  @media ${screens.laptop} {
    margin: 10em auto;
  }
`

const HollaArticle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  text-align: justify;
  z-index: 5;
  position: relative;
  font-size: 0.9em;
  margin-top: 20px;

  p {
    width: 100%;
    &:first-child {
      margin-top: -12px;
      &::first-line {
        line-height: 1.1;
      }
      &::first-letter {
        font-size: 200%;
        color: ${colors.accent};
      }
    }
  }

  @media ${screens.tablet} {
    flex-direction: row;
    font-size: 1em;

    p {
      width: 32%;

      &:nth-of-type(2) {
        text-align-last: center;
      }
      &:nth-of-type(3) {
        text-align-last: right;
      }
    }
  }
`

export class news extends PureComponent {
  state = {
    didViewCountUp: false,
  }

  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({ didViewCountUp: true })
    }
  }

  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO
          title="About"
          description="More information regarding anybodyfit"
        />
        <Enlightment>
          <Title>{data.about.frontmatter.title}</Title>
          <Article>
            <Paragraph
              dangerouslySetInnerHTML={{
                __html: data.about.frontmatter.description,
              }}
            ></Paragraph>
            <ArticleImage>
              <div>
                <ImageContainer>
                  <Img
                    fluid={data.about.frontmatter.image.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt={data.about.frontmatter.title}
                    title={data.about.frontmatter.title}
                    style={{ position: "static" }}
                  />
                </ImageContainer>
              </div>
            </ArticleImage>
          </Article>
          <Numbers>
            <VisibilitySensor
              onChange={this.onVisibilityChange}
              offset={{
                top: 10,
              }}
              delayedCall
            >
              <CountUp
                decimals={2}
                decimal=","
                prefix="€ "
                start={0}
                end={
                  this.state.didViewCountUp
                    ? _.sumBy(data.charities.edges, "node.frontmatter.amount")
                    : 0
                }
                delay={0}
              >
                {({ countUpRef }) => <h1 ref={countUpRef} />}
              </CountUp>
            </VisibilitySensor>
            <h3>In totaal aan diverse goede doelen gedoneerd.</h3>
            <Circle size={200} right={120} top={"100"} />
            <Circle size={100} left={"0"} top={150} />
            <Circle size={100} bottom="20" left="130" />
            <Circle accent size={45} left="120" top="120" />
            <Circle accent size={66} right="0" top="150" />
            <Circle accent size={45} bottom="20" right="200" />
            <Circle accent size={66} right="60" bottom="0" />
            <Circle accent size={45} bottom="20" left="50" />
          </Numbers>
          <Charity>
            <CharityInfo>
              <p>
                Elke maand wordt er ook een 'Doel van de Maand' gekozen, waaraan
                10% van alle inkomsten gedoneerd wordt. Deze goede doelen
                handelen over verschillende thema's: sociale rechtvaardigheid,
                klimaatverandering, armoedebestrijding... Er worden zo veel
                mogelijk kleinschalige doelen gekozen, die rechtstreeks met hun
                doelgroep werken. Zo verzekeren we dat er met onze donaties een
                maximale impact gemaakt wordt.
              </p>
              <p>
                Rechts ziet u de goede doelen die we gesteund hebben in de
                afgelopen maanden.
              </p>
            </CharityInfo>
            <CharityCard>
              {_.slice(data.charities.edges, 0, 5).map((charity, i) => (
                <CharityCardItem key={charity.node.frontmatter.charityName}>
                  <CharityNumber>{i + 1}</CharityNumber>
                  <CharityText>
                    <span>{charity.node.frontmatter.charityName}</span>
                    <span>€ {charity.node.frontmatter.amount.toFixed(2)}</span>
                  </CharityText>
                </CharityCardItem>
              ))}
            </CharityCard>
          </Charity>
        </Enlightment>
        <Grow>
          <GrowInnerContainer>
            <GrowTextContainer>
              <Title>{data.about.frontmatter.title2}</Title>
              <GrowDescription
                dangerouslySetInnerHTML={{
                  __html: data.about.frontmatter.description2,
                }}
              ></GrowDescription>
              <GrowFootnote
                dangerouslySetInnerHTML={{
                  __html: data.about.frontmatter.footnote,
                }}
              ></GrowFootnote>
            </GrowTextContainer>
            <GrowImage>
              <GrowCard>
                <GrowCardText
                  dangerouslySetInnerHTML={{
                    __html: data.about.frontmatter.cardnote,
                  }}
                ></GrowCardText>
              </GrowCard>
              <GrowImageContainer>
                <GrowImageInnerContainer>
                  <Img
                    fluid={data.about.frontmatter.image2.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="Plants growing"
                    title="Plants"
                    style={{ position: "static" }}
                  />
                </GrowImageInnerContainer>
              </GrowImageContainer>
            </GrowImage>
          </GrowInnerContainer>
        </Grow>
        <Holla>
          <Title>{data.about.frontmatter.title3}</Title>
          <HollaArticle
            dangerouslySetInnerHTML={{
              __html: data.about.frontmatter.description3,
            }}
          ></HollaArticle>
          <Circle size={150} top={130} right="200" />
          <Circle accent size={66} top={80} right="100" />
          <Circle size={45} bottom="0" right="100" />
        </Holla>
      </Layout>
    )
  }
}

export default news

export const query = graphql`
  query {
    about: markdownRemark(fileAbsolutePath: { regex: "/pages/about/" }) {
      frontmatter {
        title
        description
        image {
          childImageSharp {
            fluid(maxWidth: 1080, quality: 80) {
              presentationWidth
              presentationHeight
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        image2 {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 76) {
              presentationWidth
              presentationHeight
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        description2
        description3
        cardnote
        title2
        title3
        footnote
      }
    }
    charities: allMarkdownRemark(
      sort: { fields: frontmatter___donationDate, order: DESC }
      filter: { fileAbsolutePath: { regex: "/charities/" } }
    ) {
      edges {
        node {
          frontmatter {
            amount
            charityName
            donationDate
          }
        }
      }
    }
  }
`
