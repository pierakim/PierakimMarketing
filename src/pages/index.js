import React from "react"

import Container from 'react-bootstrap/Container';
import Layout from "../components/layout"
import Images from "../components/images"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="childContainer" fluid={true}>
      <div>
        <p>Developer // Brisbane // Australia</p>
        <Container style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
          <Images/>
        </Container>
        {/* <Button href="/page-2/" variant="light">Go to page 2</Button> */}
      </div>
    </Container>
  </Layout>
)

export default IndexPage
