import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import screens from "../components/framework/Screens"

const TermsContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 5em auto;
  display: flex;
  flex-direction: column;

  p {
    text-align: justify;
  }

  @media ${screens.laptop} {
    margin: 10em auto;
  }
`

const terms = ({ data }) => {
  return (
    <Layout>
      <TermsContainer
        dangerouslySetInnerHTML={{
          __html: data.terms.frontmatter.title,
        }}
      ></TermsContainer>
    </Layout>
  )
}

export default terms

export const query = graphql`
  query {
    terms: markdownRemark(fileAbsolutePath: { regex: "/pages/terms/" }) {
      frontmatter {
        title
      }
    }
  }
`
