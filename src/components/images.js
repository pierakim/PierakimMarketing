import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Images = () => (
  <StaticQuery
    query={graphql`
      query {
        githubImage: file(relativePath: { eq: "GitHub-Mark-Light-120px-plus.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        linkedInImage: file(relativePath: { eq: "In-White-128.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => 
      <Row>
        <Col>
          <Img fluid={data.githubImage.childImageSharp.fluid}/>
        </Col>
        <Col>
          <Img fluid={data.linkedInImage.childImageSharp.fluid}/>
        </Col>
      </Row>
    }
  />
)
export default Images
