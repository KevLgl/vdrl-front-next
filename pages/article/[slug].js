import Layout from "@/layout/layout";

export default function BlogPost({article}){
    return (
        <>
            <Layout>
                <div>{article.attributes.title}</div>
                <p>{article.attributes.description}</p>
            </Layout>
        </>
    )
}

export async function getStaticProps(context){
    const slug = context.params.slug;

    const query = `
    query {
          articles(filters: {slug: {eq: "${slug}"}}) {
            data {
              id
              attributes {
                slug
                title
                description
                createdAt
              }
            }
          }
        }`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: {
                slug: slug
            }})
    }

    const response = await fetch('http://localhost:1337/graphql', options)
    const responseJson = await response.json();

    return {
        props: {
            article: responseJson.data.articles.data[0] || null,
        }
    }
}

export async function getStaticPaths() {
    const query = `
  query {
        articles {
            data {
                attributes {
                    slug
                }
            }
        }
    }`

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query})
    }

    const response = await fetch('http://localhost:1337/graphql', options)
    const responseJson = await response.json();

    const paths = responseJson.data.articles.data.map((article) => { return `/article/${article.attributes.slug}` })

    return {
        paths,
        fallback: false,
    }
}
