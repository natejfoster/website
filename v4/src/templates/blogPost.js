import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';

const BlogPost = (props) => {
  const post = props.data.markdownRemark;
  return (
    <Layout>
      <div>
        <Header>
          <Img sizes={post.frontmatter.featuredImage.childImageSharp.sizes} />
          <Title>{post.frontmatter.title}</Title>
          <SubHeader>
            <span>Posted on {post.frontmatter.date}</span>
            <span>&nbsp; - &nbsp;</span>
            <span>{post.fields.readingTime.text}</span>
          </SubHeader>
        </Header>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
        date(formatString: "MMMM DD, YYYY")
        featuredImage { 
          childImageSharp{
              sizes(maxWidth: 750) {
                  ...GatsbyImageSharpSizes
              }
          }
        }
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

const Header = styled.div`
  margin-bottom: 3rem;
`;

const SubHeader = styled.div`
   color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.h1`
  margin-bottom: 0px;
`;
