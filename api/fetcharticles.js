export async function fetchArticles() {
    const response = await fetch('http://localhost:1337/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: `
        query {
          articles {
            data {
              id
              attributes {
                slug
                cover{
                    data{
                        attributes{
                            url
                        }   
                            }   
                                }
                title
                description
                createdAt
              }
            }
          }
        }
      `
        })
    });
    const data = await response.json();
    return data.data.articles.data;
}
