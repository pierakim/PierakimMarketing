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
        <Container>
          <Container className = "lambdaImageContainer">
            <StyledLambdaImage/>
          </Container>
          <br></br>
          <p className = "mainText">{"{ Developer - Brisbane Australia }"}</p>
          <br></br>
          <Container className = "socialImagesContainer">
            <SocialImages/>
          </Container>
        </Container>
      </div>
    </Container>
  </Layout>
)

export default IndexPage
