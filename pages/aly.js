import Head from "next/head";
import Link from 'next/link';
import { Fragment } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import "../styles/index.css";

export default () => (
  <Fragment>
    <Head>
      <title>CodeHippo - Aly</title>
      <meta name="description" content="This is an example of a meta description. This will show up in search results." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"/>
    </Head>
    <Navigation/>
    <Container>
      <Row>
        <Col className="content">
          <p>Hi! Welcome to my little corner of the internet</p>
          <p>I'm Aly, I'm a software engineer from Bristol, England.</p>
          <p>When I'm not behind my computer screen, you can usually find me cuddling my cat, Tormund.
          I can't deny that I absolutely spoil him like a baby - I even made him his own
          <a href="https://www.tormundgiantspaw.com/"> website!</a></p>
          <div className="tormund-gallery">
            <img src="/images/TormundHiding.jpg"/>
            <img src="/images/BabyTormund.jpg"/>
            <img src="/images/TormundAndMe.jpg"/>
            <img src="/images/TormundSleeping.jpg"/>
            <img src="/images/TormundStaring.jpg"/>
          </div>
          <p>I love to write about
            <Link href="/posts/how-i-got-into-tech">
              <a href="/posts/how-i-got-into-tech"> how I got into tech,</a>
            </Link> what I'm currently learn as well as dabbling in
            <Link href="/posts/tenerife-best-bits">
              <a href="/posts/tenerife-best-bits"> travel writing.</a>
            </Link>
          </p>
        </Col>
      </Row>
    </Container>
    <Footer/>
  </Fragment>
)
