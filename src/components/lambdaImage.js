import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const LambdaImage = () => (
  <StaticQuery
    query={graphql`
      query {
        LambdaImage: file(relativePath: { eq: "LambdaDevWhite.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.LambdaImage.childImageSharp.fluid}/>}
  />
)

const StyledLambdaImage = styled(LambdaImage)`
border-style: solid;
border-width: 5px;
`
export default StyledLambdaImage
