import React from "react"

import Container from 'react-bootstrap/Container';
import Layout from "../components/layout"
import SocialImages from "../components/socialImages"
import StyledLambdaImage from "../components/lambdaImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="childContainer" fluid={true}>
      <div>
      <Container style={{ maxWidth: `100px`, marginBottom: `1.45rem`}}>
          <StyledLambdaImage/>
        </Container>
        <p>Developer // Brisbane // Australia</p>
        <Container style={{ maxWidth: `500px`, marginBottom: `1.45rem` }}>
          <SocialImages/>
        </Container>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
