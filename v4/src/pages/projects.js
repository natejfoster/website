import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const Projects = (props) => {
  const postList = props.data.allMarkdownRemark;
  return (
    <Layout>
      {postList.edges.map(({ node }, i) => (
        <Link to={node.frontmatter.path} key={i} className="link" >
          <div className="post-list">
            <h1>{node.frontmatter.title}</h1>
            <span>{node.frontmatter.date}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
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
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM Do YYYY")
            title
            path
          }
        }
      }
    }
  }
`