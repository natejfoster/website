import React from 'react';
import Layout from '../components/layout';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const BlogPost = (props) => {
  const node = props.data.markdownRemark;
  return (
    <Layout>
      <div>
        <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
        <h1>{node.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: node.html }} />
      </div>
    </Layout>
  )
}

export default BlogPost

export const pageQuery = graphql`
  query PostQuery($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
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
`
