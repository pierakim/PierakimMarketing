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
      <h1>Hi people</h1>
      <p>Pierakim Lambda.</p>
      <p>Developer</p>
      <p>Brisbane, Austrlia</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image/>
      </div>
      <Button href="/page-2/" variant="primary">Go to page 2</Button>
    </Container>
  </Layout>
)

export default IndexPage
