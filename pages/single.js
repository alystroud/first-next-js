import Head from 'next/head';
import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import React, { Component, Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios';
import "../styles/index.css";
import "../styles/Single.css";

export default class extends Component {

  // Resolve promise and set initial props.
  static async getInitialProps( context ) {

    const slug = context.query.slug

    // Make request for posts.
    const response = await axios.get( `https://codehippo.co.uk/wp-json/wp/v2/posts?slug=${ slug }` )

    // Return our only item in array from response to posts object in props.
    return {
      post: response.data[0]
    }
  }

  render() {
    return (
      <Fragment>
        <Head>
          <title>CodeHippo - {this.props.post.title.rendered}</title>
          <meta name="description" content="This is an example of a meta description. This will show up in search results." />
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"/>
        </Head>
        <Navigation/>
        <ScrollUpButton ContainerClassName="scroll-up-button"
                        TransitionClassName="scroll-up-transition"/>
        <Container>
          <Row>
            <Col xs={12} sm={12} lg={9} xl={9} className="content">
              <main>
                <h1>{ this.props.post.title.rendered }</h1>
                <article
                  className="entry-content"
                  dangerouslySetInnerHTML={ {
                    __html: this.props.post.content.rendered
                  } } />
                </main>
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
