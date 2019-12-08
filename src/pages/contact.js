import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"
import MapGL, {
  Marker,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

import "mapbox-gl/dist/mapbox-gl.css"

import Pin from "../images/svg/pin.inline.svg"

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10em auto 10em auto;
`

const Form = styled.form`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 4em;
`

const FormInfo = styled.p`
  margin: 0;
  width: 80%;
  margin-bottom: 50px;
`

const FormInput = styled.input`
  width: 100%;
  border-radius: 50px;
  padding: 0.33em 1em;
  margin-bottom: 20px;
  border-width: 2px;
  outline-color: ${colors.accent + "40"};
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;

  &:focus {
    border-color: ${colors.accent};
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  border-radius: 33px;
  padding: 0.33em 1em;
  margin-bottom: 20px;
  border-width: 2px;
  outline-color: ${colors.accent + "40"};
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  resize: none;
  height: 200px;

  &:focus {
    border-color: ${colors.accent};
  }
`

const FormButton = styled.button`
  align-self: flex-end;
  width: 180px;
  padding: 0.66em 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${colors.accent};
  border-radius: 50px;
  color: ${colors.accent};
  font-weight: 600;
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  -webkit-backface-visibility: hidden;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${colors.accent};
    color: ${colors.white};
  }
`

const FacebookComments = styled.div`
  flex: 4;
  background: ${colors.accent};
  padding-bottom: 4em;

  #fb-root {
    background: ${colors.white};
    width: 95%;
    margin: 2.5% auto;
    padding: 1em;
    min-height: 400px;

    iframe {
      width: 100% !important;
    }
  }
`

const MapContainer = styled.div`
  display: flex;
  padding: 0.66em;
  background: ${colors.secondaryWhite};
  width: 100%;
  max-width: 1024px;
  min-height: 420px;
  margin: 0 auto 10em auto;
`

const ContactBrand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em;
  flex: 1;
`

const Brand = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  margin-bottom: 24px;
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 24px;

  span:first-child {
    font-weight: 600;
    color: ${colors.secondaryBlack};
  }
`

const Address = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  span:first-child {
    font-weight: 600;
    color: ${colors.secondaryBlack};
  }
`

const Map = styled.div`
  flex: 3;
  width: 100%;
`

class contact extends PureComponent {
  state = {
    viewport: {
      longitude: 3.73,
      latitude: 51.051,
      zoom: 15.4,
    },
  }

  updateViewport = viewport => {
    this.setState({ viewport })
  }

  render() {
    const { viewport } = this.state

    return (
      <Layout>
        <SEO
          title="Contact"
          description="Contact Tom Janssens, Founder of AnybodyFit."
        />
        <ContactContainer>
          <Form
            name="contact"
            method="post"
            action={`/`}
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <input name="bot-field" style={{ display: "none" }} />
            <FormInfo>
              Heb je nog vragen? Stuur me gerust een berichtje, of laat iets
              achter!
            </FormInfo>
            <FormInput
              placeholder="Volledige naam"
              type="text"
              name="Naam"
              required
            />
            <FormInput placeholder="Email" type="email" name="Email" required />
            <FormInput
              placeholder="Onderwerp"
              type="text"
              name="Onderwerp"
              required
            />
            <FormTextarea
              placeholder="Bericht"
              type="text"
              name="Bericht"
              required
            ></FormTextarea>
            <FormButton type="submit">Verstuur</FormButton>
          </Form>
          <FacebookComments>
            <Helmet>
              <script
                async
                defer
                crossorigin="anonymous"
                src="https://connect.facebook.net/nl_NL/sdk.js#xfbml=1&version=v5.0&appId=430133907653041&autoLogAppEvents=1"
              ></script>
            </Helmet>
            <div id="fb-root">
              <div
                className="fb-comments"
                data-href="https://developers.facebook.com/docs/plugins/comments#config"
                data-width="100%"
                data-numposts="3"
                data-order-by="reverse-time"
              ></div>
            </div>
          </FacebookComments>
        </ContactContainer>
        <MapContainer>
          <ContactBrand>
            <Brand>AnybodyFit</Brand>
            <Info>
              <span>Tom Janssens</span>
              <span>info@anybody.fitness</span>
              <span>+32 485 65 33 06</span>
              <span>BE 0731.824.913</span>
            </Info>
            <Address>
              <span>De lessen gaan door in de</span>
              <span>Vlaanderenstraat 53</span>
              <span>9000 Gent</span>
              <span>België</span>
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
              <div style={{ position: "absolute", right: 10, top: 10 }}>
                <FullscreenControl />
              </div>
              <div style={{ position: "absolute", right: 10, top: 50 }}>
                <NavigationControl />
              </div>
              <Marker longitude={3.73} latitude={51.051}>
                <Pin />
              </Marker>
            </MapGL>
          </Map>
        </MapContainer>
      </Layout>
    )
  }
}

export default contact