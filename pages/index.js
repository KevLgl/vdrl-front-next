import { Inter } from '@next/font/google'
import Layout from '@/layout/layout'
import Carousel from '@/components/carousel'
import Newsletter from '@/components/newsletter'
import Allarticles from "@/components/allarticles";
import HomeShop from "@/components/homeshop";
import Link from "next/link";
import SmallTitle from "@/components/smalltitle";
import HomeSponsors from "@/components/homesponsors";
import HomeDevenirSponsors from "@/components/homedevenirsponsors";
import HomePartenairePublic from "@/components/homepartenairepublic";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
          <Layout>
            <Carousel>
            </Carousel>
            <Allarticles />
              <div>
                  <Link href="/article">
                      <SmallTitle title="Voir plus" />
                  </Link>
              </div>
              <HomeSponsors />
              <HomeDevenirSponsors />
            <Newsletter></Newsletter>
            <HomePartenairePublic />
            </Layout>
  )
}
