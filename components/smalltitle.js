import Image from "next/image";

export default function SmallTitle({ title }){
    return (
        <><div className="flex justify-end pb-10">
            <div>
                <p className="mt-3 mb-9 ml-7 mr-6 md:mt-5 md:ml-9  text-xs text-white absolute">{title}</p>
                <Image alt="form" width="10" height="10" className="w-28 md:w-36 lg:44-96" src="/smalltitle.svg"/>
            </div>
        </div>
        </>
    )
}
