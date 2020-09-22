import Layout from '../components/MyLayout.js'
import fetch from 'isomorphic-unfetch'

const Post = props => {
  if (props && props.show) {
    return (
      <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image ? props.show.image.medium : ''} />
      </Layout>
    )
  } else {
    return (
      <Layout>
        <h1>Not Found</h1>
      </Layout>
    )
  }
}

Post.getInitialProps = async function (context) {
  console.log({ context })
  const { id } = context.query
  const res = await fetch(`http://api.tvmaze.com/shows/${id}`)
  const show = await res.json()

  console.log(`Fetched show: ${show.name}`)

  return { show }
}

export default Post
