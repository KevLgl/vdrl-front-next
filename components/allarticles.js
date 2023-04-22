import ArticleCard from "@/components/articlecard";
import {fetchArticles} from "@/api/fetcharticles";
import {useState, useEffect} from "react";

export default function Allarticles(){
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticlesData() {
            const articlesData = await fetchArticles();
            setArticles(articlesData);
        }
        fetchArticlesData();
    }, [])

    return (<>
            <div className='flex justify-center'>
                <p className="text-gray-900 font-bold text-3xl my-20">Nos derniers articles</p>
            </div>
                <div className='flex flex-wrap justify-center'>
                                 {articles.map(article => (
                <ArticleCard key={article.id} article={article} />
            ))}
            </div>
        </>
    )
}
