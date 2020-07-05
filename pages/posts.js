import Head from "next/head";
import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import Link from 'next/link';
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <Head>
          <title>CodeHippo</title>
          <meta name="description"
                content="This is an example of a meta description. This will show up in search results." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"/>
        </Head>
        <Navigation/>
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={9} xl={9} className="content">
              <h1>Code Hippo</h1>
              <ul className="posts-list">
                {
                  this.props.posts.map( post => {
                    return (
                      <li key={ post.id } className="post-list-item">
                        <Link href={ `/posts/${ post.slug }` }>
                          <a href={ `/posts/${ post.slug }` }>
                            { post.title.rendered }
                          </a>
                        </Link>
                        <article
                          className="entry-content"
                          dangerouslySetInnerHTML={ {
                            __html: post.excerpt.rendered
                          } } />
                      </li>
                    )
                  })
                }
              </ul>
            </Col>
            <Col xs={12} sm={12} lg={3} xl={3}>
              <Bio/>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </Fragment>
    )
  }
}
