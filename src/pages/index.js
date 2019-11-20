import React from "react"
import styled from "styled-components"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

import Logo from "../images/svg/logo.svg"

const LogoContainer = styled.div`
  width: 100%;
  background: ${colors.secondaryWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6.6em 1.5em;

  @media ${screens.tablet} {
    padding: 6.6em 0;
  }
`

const StyledLogo = styled(Logo)`
  width: 100%;
  max-width: 600px;
`

const ServiceContainer = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  padding: 0 1.5em;

  @media ${screens.tablet} {
    padding: 0;
  }
`

const ServiceTitle = styled.h1`
  font-size: 3em;
`

const ServiceFlex = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: flex-start;
  width: 100%;

  @media ${screens.tablet} {
    flex-direction: row;
  }
`

const ServiceCard = styled.div`
  flex: 0 0 50%;
  margin-right: 20px;
`

const ServiceCardTitle = styled.h2`
  font-size: 1.5em;
`

const ServiceCardBody = styled.div``

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="Homepage of Anybodyfit, a personal home coaching business based in Ghent, Belgium"
    />
    <LogoContainer>
      <StyledLogo />
      <p>Site nog in opbouw.</p>
    </LogoContainer>
    <Helmet>
      <script src="https://api.smoothbook.co/lib/calendar-embed.js"></script>
    </Helmet>
    <ServiceContainer>
      <ServiceTitle>Diensten</ServiceTitle>
      <a
        className="sb-calendar"
        data-embed="true"
        target="_blank"
        href="https://cal.smoothbook.co/5d908d2784e31e7aa72a31ce"
      >
        <img
          src="https://api.smoothbook.co/img/book-now-button.png"
          alt="Online appointments by Smoothbook"
        />
      </a>
      <ServiceFlex>
        <ServiceCard>
          <ServiceCardTitle>Yoga</ServiceCardTitle>
          <ServiceCardBody>
            <p>€9 per les, €80 voor 10</p>
            <p>
              Yoga in kleine groepjes, zodat iedereen kan genieten van een
              gepersonaliseerde aanpak.
            </p>
            <p>
              Heb je een beperking of speciale noden? Bel of mail voor een
              gratis kennismakingsgesprek en dan kijken we samen welke
              aanpassingen er kunnen gemaakt worden.
            </p>
            <h3>Yoga Conditioning</h3>
            <p>Een dynamische mix van kracht, stabiliteit en flexibiliteit.</p>
            <h3>Yoga & Mindfulness</h3>
            <p>Trage les met focus op ademhaling, mindfulness en meditatie.</p>
          </ServiceCardBody>
        </ServiceCard>
        <ServiceCard>
          <ServiceCardTitle>Lifestyle Coaching</ServiceCardTitle>
          <ServiceCardBody>
            <p>€30 per uur*</p>
            <p>
              Wil je een gezondere levensstijl maar weet je niet waar je moet
              beginnen? Samen stellen we doelen, en zoeken we strategieën om
              gezonde gewoontes aan te leren & barrières te overwinnen. We
              kijken naar:
            </p>
            <ul>
              <li>Voeding & beweging</li>
              <li>Slaap</li>
              <li>Motivatie, zelfvertrouwen & voldoening</li>
              <li>Mindset</li>
            </ul>
            <p>Bel of mail om een gratis kennismakingsgesprek in te plannen!</p>
          </ServiceCardBody>
        </ServiceCard>
      </ServiceFlex>
      <p>
        <i>Student? Vraag naar het kortingstarief!</i>
      </p>
    </ServiceContainer>
  </Layout>
)

export default IndexPage
