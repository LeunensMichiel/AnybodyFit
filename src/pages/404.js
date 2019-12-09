import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ErrorContainer = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;
  text-align: center;

  h1 {
    font-size: 3em;
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <ErrorContainer>
      <h1>NOT FOUND</h1>
      <p>Deze pagina bestaat niet.</p>
    </ErrorContainer>
  </Layout>
)

export default NotFoundPage
