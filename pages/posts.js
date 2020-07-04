import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import React, { Component, Fragment } from 'react';
import axios from 'axios';
import Link from 'next/link';
import "../styles/index.css";

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps() {

    // Make request for posts.
    const response = await axios.get( 'https://codehippo.co.uk/wp-json/wp/v2/posts' )

    // Return response to posts object in props.
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation/>
        <div>
        <Bio/>
          <h1>Our Posts Page!</h1>
          <ul>
            {
              this.props.posts.map( post => {
                return (
                  <li key={ post.id }>
                    <Link href={ `/posts/${ post.slug }` }>
                      <a href={ `/posts/${ post.slug }` }>
                        { post.title.rendered }
                      </a>
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Footer/>
      </Fragment>
    )
  }
}
