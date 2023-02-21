import { Inter } from '@next/font/google'
import Layout from '@/layout/layout'
import Carousel from '@/components/carousel'
import Newsletter from '@/components/newsletter'
import HomeArticles from "@/components/homearticles";
import HomeShop from "@/components/homeshop";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
          <Layout>
            <Carousel>
            </Carousel>
            <HomeArticles />
            <HomeShop />
            <Newsletter></Newsletter>
            </Layout>
  )
}
