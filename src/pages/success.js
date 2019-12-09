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
  min-height: 80vh;
  text-align: center;

  h1 {
    font-size: 3em;
  }
`

const success = () => {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <ErrorContainer>
        <h1>Bedankt!</h1>
        <p>Ik neem zo snel mogelijk contact met u op.</p>
      </ErrorContainer>
    </Layout>
  )
}

export default success
