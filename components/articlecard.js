import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }){
    return (
        <div className="w-36 lg:w-64 xl:w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-6 my-4">
            <a href="#">
                <Image width="600" height="600" className="rounded-t-lg" src="/photo2.jpeg" alt="maillot handball" />
            </a>
            <div className="text-xs p-5">
                <a href="#">
                    <h5 className="text-sm mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-full truncate">{article.attributes.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-w-full truncate">{article.attributes.description}</p>
                <Link href={`/article/${article.attributes.slug}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Lire plus
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
        </div>
    )
}

