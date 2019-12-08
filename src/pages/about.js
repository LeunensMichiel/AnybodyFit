import React, { PureComponent } from "react"
import styled from "styled-components"
import Img from "gatsby-image/withIEPolyfill"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

const Enlightment = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 10em auto;
  display: flex;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 5em;
  width: 50%;
  margin-top: 0;
  line-height: 1.5;
`

const Article = styled.div`
  display: flex;
  justify-content: space-between;
`

const Paragraph = styled.div`
  flex: 1;
  margin-right: 100px;
  text-align: justify;

  p:first-of-type {
    font-size: 1.2em;
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
`

const ArticleImage = styled.div`
  flex: 0.9;
  background: ${colors.secondaryWhite};
  position: relative;
  padding: 1em;

  div {
    position: relative;
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
  margin: 10em auto;
  padding: 3em;
  overflow: hidden;
  position: relative;
  max-width: 650px;

  h1 {
    font-size: 5em;
    z-index: 2;
  }

  h3 {
    color: ${colors.secondaryBlack};
    text-align: center;
    z-index: 2;
    font-size: 1.2em;
  }
`

const Circle = styled.div`
  background: ${props =>
    props.accent ? colors.accent2 : colors.secondaryWhite};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: 100%;
  position: absolute;
  top: ${props => (props.top ? props.top + "px" : "unset")};
  bottom: ${props => (props.bottom ? props.bottom + "px" : "unset")};
  left: ${props => (props.left ? props.left + "px" : "unset")};
  right: ${props => (props.right ? props.right + "px" : "unset")};
  z-index: 1;
`

const Charity = styled.div`
  display: flex;
  justify-content: space-between;
`

const CharityInfo = styled.div`
  flex: 1;
  text-align: justify;
  margin-right: 50px;

  p:nth-of-type(2) {
    margin-top: 3em;
  }
`

const CharityCard = styled.div`
  flex: 0.9;
  display: flex;
  flex-direction: column;
  background: ${colors.secondaryBlack};
  padding: 0.66em 0.66em 3em 0.66em;
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
      margin-left: 32px;
      text-align: right;
    }
  }
`

const CharityNumber = styled.div`
  font-family: "Playfair Display", serif;
  font-size: 1.3em;
  border: 2px solid ${colors.black};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 45px;
  height: 45px;
  padding-bottom: 4px;
  margin-right: 32px;
`

const CharityText = styled.div`
  display: flex;
  flex-direction: column;

  span:first-child {
    font-size: 1.1em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 300px;
  }

  span:nth-child(2) {
    font-size: 0.9em;
    font-weight: 600;
    color: ${colors.secondaryBlack};
  }
`

const Grow = styled.div`
  width: 100%;
  position: relative;
  padding-right: 300px;
  overflow: hidden;
  padding-bottom: 500px;
`

const GrowInnerContainer = styled.div`
  width: 100%;
  background: ${colors.accent2};
  padding-left: 300px;
`

const GrowTextContainer = styled.div`
  width: 100%;
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
  font-size: 1.2em;

  &::first-letter {
    font-size: 200%;
    color: ${colors.accent};
  }
  &::first-line {
    line-height: 1.2;
  }
`

const GrowFootnote = styled.p`
  text-align: justify;
  text-align-last: right;
  color: ${colors.secondaryBlack};
`

const GrowImage = styled.div`
  position: absolute;
  width: 100%;
  height: 500px;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
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
  padding: 1.5em;
`

const Holla = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 10em auto;
  position: relative;
  padding-bottom: 5em;
`

const HollaArticle = styled.div`
  display: flex;
  align-items: flex-end;
  text-align: justify;
  z-index: 5;

  p {
    flex: 1;

    &:first-child {
      &::first-line {
        line-height: 1.1;
      }
      &::first-letter {
        font-size: 200%;
        color: ${colors.accent};
      }
    }
    &:nth-of-type(2) {
      text-align-last: center;
    }
    &:nth-of-type(3) {
      text-align-last: right;
    }
  }
  span {
    flex: 0.1;
  }
`

export class news extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO
          title="About"
          description="More information regarding anybodyfit"
        />
        <Enlightment>
          <Title>Verrijken & Verbinden</Title>
          <Article>
            <Paragraph>
              <p>
                Bij AnyBodyFit trachten we een veilige ruimte te creëren waar
                kwetsbaarheid & zelfexpressie centraal staan. In het BlinkHuis
                in de Vlaanderenstraat vind je een rustige omgeving, waar je op
                je eigen tempo jezelf kan leren kennen en ontplooien. Hier vind
                je ook een netwerk van gelijkgezinde mensen, waarbij je terecht
                kan voor ondersteuning, het delen van ervaringen, of gewoon een
                goed gesprek. We verwelkomen iedereen; ongeacht geaardheid,
                afkomst of geloofsovertuiging.
              </p>
              <p>
                Voor specifieke hulpvragen staat er, bovenop het eerder
                vernoemde netwerk, een netwerk van professionals uit
                verschillende sectoren voor je klaar. De coach, Tom, is hiervoor
                je eerste aanspreekpunt. Samen zoeken we de beste manier om jouw
                persoonlijke groei te ondersteunen. Door inlichtingen te nemen,
                of eventueel door te verwijzen komen we zo tot een totaalpakket.
              </p>
            </Paragraph>
            <ArticleImage>
              <div>
                <ImageContainer>
                  <Img
                    fluid={data.yoga.childImageSharp.fluid}
                    objectFit="cover"
                    objectPosition="50% 50%"
                    alt="Picture of someone doing yoga"
                    title="Yoga"
                    style={{ position: "static" }}
                  />
                </ImageContainer>
              </div>
            </ArticleImage>
          </Article>
          <Numbers>
            <h1>€534.00</h1>
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
              <CharityCardItem>
                <CharityNumber>1</CharityNumber>
                <CharityText>
                  <span>Goed doel 1</span>
                  <span>€32.00</span>
                </CharityText>
              </CharityCardItem>
              <CharityCardItem>
                <CharityNumber>2</CharityNumber>
                <CharityText>
                  <span>Goed doel 2</span>
                  <span>€32.00</span>
                </CharityText>
              </CharityCardItem>
              <CharityCardItem>
                <CharityNumber>3</CharityNumber>
                <CharityText>
                  <span>Goed doel 3dwadadadawdawdadawdawdawdawd</span>
                  <span>€322.00</span>
                </CharityText>
              </CharityCardItem>
            </CharityCard>
          </Charity>
        </Enlightment>
        <Grow>
          <GrowInnerContainer>
            <GrowTextContainer>
              <Title>Leren Groeien</Title>
              <GrowDescription>
                Groeien is een actief & systematisch proces. Hier krijg je de
                tools om zelfstandig je potentieel te verkennen en bereiken. In
                de coaching sessies leer je over technieken en theorieën van
                gedragsverandering, leer je doelen stellen en bereiken, en
                ruimen we obstakels uit de weg. Tijdens de yoga sessies wordt er
                steeds een link gelegd met dagelijkse ervaringen. Het einddoel:
                jou coachen, totdat je jezelf kan coachen.
              </GrowDescription>
              <GrowFootnote>
                Toch een dipje? Plan een boostersessie in waar we samen een
                kijkje nemen naar je huidige doel, en hoe we hier het best
                geraken. Daarnaast nemen we tussen sessies contact op om de
                motivatie hoog te houden, en bij te sturen indien nodig.
              </GrowFootnote>
            </GrowTextContainer>
            <GrowImage>
              <GrowCard>
                <GrowCardText>
                  Om jouw groei verder te ondersteunen trachten we je steeds in
                  contact te stellen met mensen die een gelijkaardige ervaring
                  hebben. Door samen oplossingen te zoeken en elkaar te
                  motiveren bereik je nog meer dan alleen.
                </GrowCardText>
              </GrowCard>
              <GrowImageContainer>
                <GrowImageInnerContainer>
                  <Img
                    fluid={data.plants.childImageSharp.fluid}
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
          <Title>Holistische Aanpak</Title>
          <HollaArticle>
            <p>
              Gezondheid gaat niet enkel over het lichaam. Gezonde voeding,
              sport & slaap zijn allemaal belangrijk. Alleen omvat een goede
              gezondheid zo veel meer: zelfvertrouwen, mindset, een stimulerende
              sociale cirkel, stress-management etc. Door elk apart aspect onder
              handen te nemen komen we tot een gezond lichaam, een positieve
              mindset, en een gepassioneerde ziel.
            </p>
            <span />
            <p>
              Iedereen is anders, en hier spelen we op in. Samen zoeken we welke
              technieken & oefeningen werken, hoeveel sessies ideaal zijn, en
              hoeveel follow-up je nodig hebt. Je bepaalt zelf het tempo, en de
              hoeveelheid moeite die je erin steekt. Daarom hechten we ook enorm
              veel belang aan jouw input. Wees dus zeker niet bang om je mening
              duidelijk te maken, of zelf iets voor te stellen.
            </p>
            <span />
            <p>
              Personen met speciale noden zijn ook steeds welkom. Bel of mail
              gerust om te vragen wat de mogelijkheden zijn. Je kan ook steeds
              terecht voor een gratis intake gesprek, waarbij we samen kijken
              hoe we de yogalessen kunnen aanpassen. Indien hieruit blijkt dat
              we zelf niet aan jouw noden kunnen voldoen, zetten we toch alles
              op alles om een plek te vinden waar dat wel kan!
            </p>
          </HollaArticle>
          <Circle size={150} top={130} right="200" />
          <Circle size={66} top={80} right="100" />
          <Circle size={45} bottom="0" right="100" />
        </Holla>
      </Layout>
    )
  }
}

export default news

export const query = graphql`
  query {
    yoga: file(relativePath: { eq: "yoga.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 85) {
          presentationWidth
          presentationHeight
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    plants: file(relativePath: { eq: "plants.jpg" }) {
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
