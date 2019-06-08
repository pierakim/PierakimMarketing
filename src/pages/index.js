import React from "react"

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container className="childContainer">
      <p>Pierakim Lambda.</p>
      <p>Developer</p>
      <p>Brisbane, Australia</p>
      <Container style={{ maxWidth: `200px`, marginBottom: `1.45rem` }}>
        <Image/>
      </Container>
      <Button href="/page-2/" variant="light">Go to page 2</Button>
    </Container>
  </Layout>
)

export default IndexPage
