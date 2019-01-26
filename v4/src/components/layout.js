import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import favicon from '../images/favicon.ico'

import '../css/layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <Content>
            {children}
          </Content>
        </Container>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

const Container = styled.div`
  margin-top: 100px;
  min-height: calc(100vh - 200px);
`

const Content = styled.div`
  background: white;
  max-width: 740px;
  margin: 0 auto;
  padding: 20px;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  line-height: 1.58;
  letter-spacing: -.003em;

  @media (max-width: 767px){
    font-size: 18px;
    line-height: 1.58;
    letter-spacing: -.004em;
  }
`
