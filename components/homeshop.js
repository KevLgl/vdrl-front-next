import ProducCard from "@/components/productcard";
import BigTitle from "@/components/bigtitle";
import Link from "next/link";
import SmallTitle from "@/components/smalltitle";

export default function HomeShop(){
    return (
        <>
            <div className="bg-gray-200 ">
            <div className='flex justify-center'>
                <BigTitle title="Nos produits" />
            </div>
            <div className='flex flex-wrap justify-center'>
                <ProducCard></ProducCard>
                <ProducCard></ProducCard>
                <ProducCard></ProducCard>
                <ProducCard></ProducCard>
                <ProducCard></ProducCard>
                <ProducCard></ProducCard>
            </div>
                <div>
                    <Link href="/shop">
                        <SmallTitle title="Voir plus" />
                    </Link>
                </div>

            </div>
        </>
    )
}
