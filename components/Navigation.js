import Link from 'next/link';
import "../styles/Navigation.css";

export default () => (
  <div className="nav">
    <ul>
        <li><Link href="/"><a href="/">Home</a></Link></li>
        <li><Link href="/aly"><a href="./aly">Aly</a></Link></li>
        <li><Link href="/posts"><a href="/posts">Posts</a></Link></li>
    </ul>
  </div>
)
