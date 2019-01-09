import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';

const BlogPost = (props) => {
  console.log(props);
return (
  <Layout>
    <div>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
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
      }
    }
  }
`
