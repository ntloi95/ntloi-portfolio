import React from 'react'
import Img from "gatsby-image"
import { Link } from "gatsby"

export default props => {
    console.log(props);
    return (
        <Link to="/">
            <h2> {props.data.frontmatter.title} </h2>
            <div>
                <div>
                    <i className="fa fa-search-plus fa-3x">
                        <Img
                            fluid={props.image.childImageSharp.fluid}
                            alt="Gatsby Docs are awesome"
                        />
                    </i>
                </div>
            </div>
        </Link>
    )
}