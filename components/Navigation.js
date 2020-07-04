import Link from 'next/link';
import "../styles/Navigation.css";

export default () => (
  <nav>
    <ul>
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/posts"><a href="/posts">Posts</a></Link></li>
    </ul>
  </nav>
)
