import { Fragment } from 'react';
import "../styles/Bio.css";

export default () => (
  <div className="bio">
    <img src="/images/hippologo.png" className="blog-logo"/>
    <h3>Hi I'm Aly</h3>
    <p>Software engineer. Blogger. Cat-lover. Netflix-marathoner. Book lover.
      Pasta eater. Lover of all things comfy.</p>
    <p>I'm a software engineer from Bristol, sharing my love of coding, my life
      experiences and encouraging others to try programming and reach their
      goals!</p>
    <p>Enjoy!</p>
    <a className="twitter-timeline"
       data-width="220"
       data-height="600"
       data-theme="light"
       href="https://twitter.com/AlyCodeHippo?ref_src=twsrc%5Etfw">
       Tweets by Aly
    </a>
    <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
  </div>
)
