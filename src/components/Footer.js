import React from 'react'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://facebook.com/ntloi95"
                className="icon fa-facebook"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/ntloi95" className="icon fa-github">
                <span className="label">Github</span>
              </a>
            </li>
            <li>
              <a href="mailto:ntloi95@gmail.com" className="icon fa-envelope-o">
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <ul className="copyright">
            <li>&copy; Gatsby</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Footer
