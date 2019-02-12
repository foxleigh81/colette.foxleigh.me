import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Header from '../components/header'
import BlogArticle from '../components/blog-article'
import CategoryList from '../components/category-list'

// import '../css/blog-post.css'; // make it pretty!

// Run the Graphql query
export const pageQuery = graphql`
  query HomepageByPath($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
      fields {
        hero {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
    allMarkdownRemark (sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
            hero {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
        }
      }
    }
  }
`

export default function Template({ data }) {
  const { markdownRemark: post } = data // data.markdownRemark holds our post data
  const { allMarkdownRemark: articleQueryData } = data
  return (
    <>
      <Header />
      <div className="landing-page-container">
        <Helmet title={`Your Blog Name - ${post.frontmatter.title}`} />
        <BlogArticle tags={post.frontmatter.tags} postData={post}>
          <CategoryList posts={articleQueryData.edges} context="/" />
        </BlogArticle>
      </div>
    </>
  )
}

Template.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
