import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import PortfolioItem from '../components/portfolio-item'
import cv from '../assets/cv.pdf'
import '../assets/css/index.css'
// import cloudIcon from '../assets/images/cloud-icon.png'
const siteTitle = 'Loi Nguyen'
const siteDescription = `Nguyen Thanh Loi's Portfolio`
export default ({ data }) => (
  < Layout >
    <Helmet>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
    </Helmet>

    <div id="main">
      <section id="one">
        <h2> Loi Nguyen</h2>
        <p>
          &emsp;Backend Software Engineer. Learn, work, and play with Cloud
          on cloud in a cloudy day.
            </p>
        <p>
          &emsp;I have been involved in various scale server-side
          applications and understand how a reliable infrastructure is
          essential to software scalability. While it may be easy to focus
          on features, I’ve found that the algorithms, data structures, and
          optimization are tremendously necessary for a strong engineer.
            </p>
        <ul className="actions">
          <li>
            <a
              href={cv}
              rel="noopener noreferrer"
              target="_blank"
              className="button"
            >
              Learn More
                </a>
          </li>
        </ul>
      </section>
      <section>
        <h2>My stories</h2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <PortfolioItem key={node.id} data={node} image={data.file}> </PortfolioItem>
        ))}
      </section>
      <section id="three">
        <h2>Get In Touch</h2>
        <p>
          &emsp;The copy of{' '}
          <a href={cv} target="_blank" rel="noopener noreferrer">
            my resume{' '}
          </a>{' '}
          further reveals my background, computer science knowledge and
          software development skills. I can be reached anytime via phone or
          email. Thank you very much indeed for your time and consideration.
          I am looking forward to receiving your call.
            </p>
        <div className="row">
          <div className="12u 12u$(small)">
            <ul className="labeled-icons">
              <li>
                <h3 className="icon fa-home">
                  <span className="label">Address</span>
                </h3>
                Ho Chi Minh City, Vietnam
                  </li>
              <li>
                <h3 className="icon fa-mobile">
                  <span className="label">Phone</span>
                </h3>
                <a href="tel:+84365082508"> +84 365082508</a>
              </li>
              <li>
                <h3 className="icon fa-envelope-o">
                  <span className="label">Email</span>
                </h3>
                <a href="mailto:ntloi95@gmail.com">ntloi95@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </Layout >
)

export const query = graphql` 
query {
  allMarkdownRemark {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
        }
        html
        excerpt
      }
    }
  }

  file(relativePath: { eq: "ruby.png" }) {
    childImageSharp {
      # Specify the image processing specifications right in the query.
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`