import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import Helmet from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../components/framework/Colors"
import screens from "../components/framework/Screens"

const PostsGrid = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 10em auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  .fb-post {
    margin-bottom: 1em;
  }
`

export class news extends PureComponent {
  render() {
    return (
      <Layout>
        <SEO title="News" description="Recent posts of AnybodyFit" />
        <Helmet>
          <script
            async
            defer
            crossorigin="anonymous"
            src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v5.0&appId=430133907653041&autoLogAppEvents=1"
          ></script>
        </Helmet>
        <div id="fb-root"></div>
        <PostsGrid>
          <div
            className="fb-post"
            data-href="https://www.facebook.com/AnyBodyFitCoaching/posts/149165219765009"
            data-width=""
            data-show-text="true"
          ></div>
          <div
            className="fb-post"
            data-href="https://www.facebook.com/AnyBodyFitCoaching/posts/152930642721800"
            data-width=""
            data-show-text="true"
          ></div>
          <div
            className="fb-post"
            data-href="https://www.facebook.com/AnyBodyFitCoaching/posts/137900440891487"
            data-width=""
            data-show-text="true"
          ></div>
        </PostsGrid>
      </Layout>
    )
  }
}

export default news
