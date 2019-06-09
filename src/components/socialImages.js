import React from "react"
import { StaticQuery, graphql, withPrefix } from "gatsby"
import Img from "gatsby-image"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SocialImages = () => (
  <StaticQuery
    query={graphql`
      query {
        githubImage: file(relativePath: { eq: "GitHub-Mark-Light-120px-plus.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        linkedInImage: file(relativePath: { eq: "In-White-128.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
        resumeImage: file(relativePath: { eq: "Resume.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => 
      <Row>
        <Col>
          <a href="http://bit.ly/2WQh4y0" target="_blank" rel="noopener noreferrer">
          <Img fluid={data.githubImage.childImageSharp.fluid}/>
          </a>
        </Col>
        <Col>
          <a href="http://bit.ly/2Wu6Eom" target="_blank" rel="noopener noreferrer">
            <Img fluid={data.linkedInImage.childImageSharp.fluid}/>
          </a>
        </Col>
        <Col>
          <a rel="noopener noreferrer"
            href={withPrefix('/_resume.pdf')}
            target="_blank">
            <Img fluid={data.resumeImage.childImageSharp.fluid}/>
          </a>
        </Col>
      </Row>
    }
  />
)
export default SocialImages
