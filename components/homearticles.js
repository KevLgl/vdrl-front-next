import ArticleCard from "@/components/articlecard";
import BigTitle from "@/components/bigtitle";
import Link from "next/link";
import SmallTitle from "@/components/smalltitle";

export default function HomeArticles(){
    return (<>
            <div className='flex justify-center'>
                <BigTitle title="Nos articles" />
            </div>
                <div className='flex flex-wrap justify-center'>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
                <ArticleCard></ArticleCard>
            </div>
            <div>
                <Link href="/article">
                    <SmallTitle title="Voir plus" />
                </Link>
            </div>

        </>
    )
}
