import ProducCard from "@/components/productcard";
import Link from "next/link";
import SmallTitle from "@/components/smalltitle";

export default function HomeShop(){
    return (
        <>
            <div className="bg-gray-200 ">
            <div className='flex justify-center'>
                <p className="text-gray-900 font-bold text-3xl my-20">Nos articles</p>
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
