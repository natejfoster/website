import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Projects = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <PostLink to={node.frontmatter.path} key={i}>
          <PostItem>
            <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
            <h3>{node.frontmatter.title}</h3>
          </PostItem>
        </PostLink>
      ))}
    </Layout>
  )
}

export default Projects;

export const projectQuery = graphql`
  query ProjectQuery {
    allMarkdownRemark(filter: { fields: {collection: { eq: "projects" }}}) {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            path
            featuredImage { 
              childImageSharp{
                  sizes(maxWidth: 750) {
                      ...GatsbyImageSharpSizes
                  }
              }
            }
          }
        }
      }
    }
  }
`

const PostLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const PostItem = styled.div`
  text-align: center;
  border: solid gainsboro 1px;
  padding: 15px;
  margin-bottom: 20px;
  :hover {
    background-color: whitesmoke;
  }
`;