import React, { PureComponent } from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import { FacebookProvider, EmbeddedPost } from "react-facebook"

import Layout from "../components/layout"
import SEO from "../components/seo"
import screens from "../components/framework/Screens"

const PostsGrid = styled.div`
  width: 90%;
  max-width: 1024px;
  margin: 6em auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media ${screens.tablet} {
    margin: 10em auto;
  }
`

const Post = styled.div`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
`

export class news extends PureComponent {
  render() {
    const { data } = this.props
    return (
      <Layout>
        <SEO title="News" description="Recent posts of AnybodyFit" />
        <FacebookProvider appId={`${process.env.GATSBY_FB_API}`}>
          <PostsGrid>
            {data.posts.edges.map(post => (
              <Post key={post.node.frontmatter.url}>
                <EmbeddedPost
                  href={post.node.frontmatter.url}
                  showText="true"
                />
              </Post>
            ))}
          </PostsGrid>
        </FacebookProvider>
      </Layout>
    )
  }
}

export default news

export const query = graphql`
  query {
    posts: allMarkdownRemark(
      sort: { fields: frontmatter___postDate, order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      edges {
        node {
          frontmatter {
            postDate
            url
          }
        }
      }
    }
  }
`
