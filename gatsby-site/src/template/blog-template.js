import React from "react";
import {Helmet} from "react-helmet";
import Img from 'gatsby-image';
import Metatag from '../components/metatags'

export default function Template({ data })  {
  const { markdownRemark: post } = data
 console.log(post)
  return (
    <div className="blog-wrapper">
    <Metatag title={post.frontmatter.title} />
     <h2>{post.frontmatter.title}</h2>
     <Img fluid={post.frontmatter.image.childImageSharp.fluid} />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
          image {
          childImageSharp {
            resize(width: 1500, height: 1500) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
       }
      }
    }
  }`