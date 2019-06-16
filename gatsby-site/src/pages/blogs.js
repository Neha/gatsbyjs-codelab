import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from "../components/Intro"

const createPostList = (postList) => {
  
    return (
      
        postList.nodes.map(({ frontmatter }, i) => {
          return (
            <li>
             
              <h1><Link to={frontmatter.path} className="link">{frontmatter.title} </Link></h1>
                {/* <p>{excerpt}</p> */}
            
            </li>
          )
        })
    )
}

const Blogs = props => {
  const postList = props.data.allMarkdownRemark
  
  return (
    <Layout>
    
    <ul className="post-list">{createPostList(postList)}</ul>
      
    </Layout>
  )
}

export default Blogs

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark {
      nodes {
        id
        html
        frontmatter {
          date
          path
          title
        }
      }
    }
  }
`
