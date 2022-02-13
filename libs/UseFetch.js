export const UseFetch = async (url) => {
    const getPosts = fetch(url,{
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
                            content
                            title
                        }
                    }
                }
            `
        })
    })
    const posts = await getPosts.json()
    return { 
        posts
    }
}