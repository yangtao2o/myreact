import Layout from '../components/MyLayout.js';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`} as={`/p/${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink id="hello-nextjs" title="Hello Nextjs"  />
        <PostLink id="learn-nextjs" title="Learn Nextjs"  />
        <PostLink id="deploy-nextjs" title="Deploy Nextjs" />
      </ul>
    </Layout>
  );
}