import ArticleCard from "@/components/articlecard";
import BigTitle from "@/components/bigtitle";
import Link from "next/link";
import SmallTitle from "@/components/smalltitle";
import {fetchArticles} from "@/api/fetcharticles";
import {useState, useEffect} from "react";

export default function HomeArticles(){
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticlesData() {
            const articlesData = await fetchArticles();
            setArticles(articlesData);
        }
        fetchArticlesData();
    }, []);

    return (<>
            <div className='flex justify-center'>
                <BigTitle title="Nos articles" />
            </div>
                <div className='flex flex-wrap justify-center'>
                                 {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
            </div>
            <div>
                <Link href="/article">
                    <SmallTitle title="Voir plus" />
                </Link>
            </div>

        </>
    )
}





// function ArticlesList() {
//     const [articles, setArticles] = useState([]);
//
//     useEffect(() => {
//         async function fetchArticlesData() {
//             const articlesData = await fetchArticles();
//             setArticles(articlesData);
//         }
//         fetchArticlesData();
//     }, []);
//
//     return (
//         <div className="articles-list">
//             {articles.map(article => (
//                 <ArticleCard key={article.id} article={article} />
//             ))}
//         </div>
//     );
// }
