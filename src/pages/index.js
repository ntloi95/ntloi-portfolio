import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import cv from '../assets/cv.pdf'

class HomeIndex extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const siteTitle = 'Loi Nguyen'
    const siteDescription = `Nguyen Thanh Loi's Portfolio`

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <div id="main">
          <section id="one">
            <header className="major">
              <h3>
                With a good Bachelor’s Degree in Honor Program Computer Science
                in Vietnam National University, being a competitive programming
                former, almost two years of hands-on experience building and
                developing cloud software applications, I confidently become to
                a Backend Applications Software Engineer.
                <br />
              </h3>
            </header>
            <p>
              I have been involved in various scale server-side applications and
              understand how a reliable infrastructure is essential to software
              scalability. While it may be easy to focus on features, I’ve found
              that the algorithms, data structures, and optimization are
              tremendously necessary for a strong engineer.
            </p>
            <ul className="actions">
              <li>
                <a href={cv} target="_blank" className="button">
                  Learn More
                </a>
              </li>
            </ul>
          </section>

          <section id="three">
            <h2>Get In Touch</h2>
            <p>
              The copy of{' '}
              <a
                href={`https://docs.google.com/gview?url=${
                  window.location.href
                }${cv}`}
                target="_blank"
              >
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
      </Layout>
    )
  }
}

export default HomeIndex

export const query = graphql`
  query Index {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
