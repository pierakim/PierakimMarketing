import React from "react"

import Container from 'react-bootstrap/Container';
import Layout from "../components/layout"
import SocialImages from "../components/socialImages"
import LambdaImage from "../components/lambdaImage"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="childContainer" fluid={true}>
      <div>
      {/* <Container style={{ maxWidth: `100px`, marginBottom: `1.45rem`, borderStyle: `solid`, borderWidth: `5px`, borderRadius: `20%`}}>\ */}
      <Container style={{ maxWidth: `100px`, marginBottom: `1.45rem`}}>
          <LambdaImage/>
        </Container>
        <p>Developer // Brisbane // Australia</p>
        <Container style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
          <SocialImages/>
        </Container>
        {/* <Button href="/page-2/" variant="light">Go to page 2</Button> */}
      </div>
    </Container>
  </Layout>
)

export default IndexPage
