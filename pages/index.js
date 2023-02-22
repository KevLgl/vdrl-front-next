import { Inter } from '@next/font/google'
import Layout from '@/layout/layout'
import Carousel from '@/components/carousel'
import Newsletter from '@/components/newsletter'
import HomeArticles from "@/components/homearticles";
import HomeShop from "@/components/homeshop";
import Link from "next/link";
import SmallTitle from "@/components/smalltitle";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
          <Layout>
            <Carousel>
            </Carousel>
            <HomeArticles />
              <div>
                  <Link href="/article">
                      <SmallTitle title="Voir plus" />
                  </Link>
              </div>
            <HomeShop />
            <Newsletter></Newsletter>
            </Layout>
  )
}
