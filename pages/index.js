export default function Home({posts}){
  console.log(posts);
  return (
    <div>
      <h1>Welcome to the home page</h1>
      {
        posts.nodes.map(post => (
          <ul key={post.slug}>
            <li>{post.title}</li>
          </ul>
        ))
      }
    </div>
  );
}

export async function getStaticProps(){
  const request = await fetch('http://c2180363.ferozo.com/blog/graphql',{
    method:'POST',
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        query : `
            query HomePageQuery {
                posts {
                    nodes {
                        slug
                        title
                    }
                }
            }
        `
    })
})

const response = await request.json()
console.log(response.data.posts);
  return {
    props: {
      posts:response.data.posts
    }
  }
}