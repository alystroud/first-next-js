import Head from 'next/head';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';
import { Fragment } from 'react';
import "../styles/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default () => (
  <Fragment>
    <Navigation/>
    <Head>
      <title>CodeHippo</title>
      <meta name="description" content="This is an example of a meta description. This will show up in search results." />
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet"/>
    </Head>
    <h1>Your new server-side rendered React.js app!</h1>
    <Footer/>
  </Fragment>
)
