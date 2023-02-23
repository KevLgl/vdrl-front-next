import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }){
    const coverUrl = article.attributes.cover?.data?.attributes?.url;
    const imageUrl = coverUrl ? `http://localhost:1337${coverUrl}` : '/photo1.jpeg';
    return (
        <div className="min-h-[19rem] w-36 lg:w-64 xl:w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-6 my-2">
            <div className="h-[172px] w-full">
            <a href={`/article/${article.attributes.slug}`} className="">
                {coverUrl && (
                    <Image
                        width={318}
                        height={172}
                        className="rounded-t-lg h-full object-cover max-w-full"
                        src={imageUrl}
                        alt="maillot handball"
                    />
                )}
                {!coverUrl && (
                    <Image
                        width={318}
                        height={172}
                        className="rounded-t-lg h-full max-w-full object-cover"
                        src={imageUrl}
                        alt="maillot handball"
                        fallback="/images/default-cover-image.jpg"
                    />
                )}
            </a>
            </div>
            <div className="text-xs p-5 flex flex-col justify-between">
                <div>
                    <a href="#">
                        <h5 className="text-sm mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-full truncate">{article.attributes.title}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-w-full truncate">{article.attributes.description}</p>
                    </a>
                </div>
                <div className="flex items-end">
                    <Link href={`/article/${article.attributes.slug}`} className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-900 dark:bg-red-600 dark:hover:bg-gray-900 dark:focus:ring-gray-900">
                        Lire plus
                        <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
            </div>
        </div>
    )
}

