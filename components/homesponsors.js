import Image from "next/image";
import fakeimage1 from '../public/fakeimage1.png'
import fakeimage2 from '../public/fakeimage2.png'
import fakeimage3 from '../public/fakeimage3.png'
import fakeimage4 from '../public/fakeimage4.png'

export default function HomeSponsors(){
    return (
        <div className="h-60 text-xs sm:text-sm bg-gray-900 w-full p-4">
            <div className="flex item-center justify-center mb-6">
                <div className="text-white">
                    <p className="font-bold text-3xl mt-4">Les entreprises qui nous font confiances </p>
                    <p>Enorme merci aux entreprises qui nous accompagnent pour mener notre projet commun</p>
                </div>
            </div>
            <div className="flex justify-around">
                <div className="bg-gray-800 h-20 w-24 sm:w-36 flex justify-center items-center px-3">
                    <Image
                        width={100}
                        height={150}
                        className=""
                        src={fakeimage1}
                        alt="maillot handball"
                        fallback="/images/default-cover-image.jpg"
                    />
                </div>
                <div className="bg-gray-800 h-20 w-24 sm:w-36 flex justify-center items-center px-3">
                    <Image
                        width={100}
                        height={150}
                        className=""
                        src={fakeimage2}
                        alt="maillot handball"
                        fallback="/images/default-cover-image.jpg"
                    />
                </div>
                <div className="bg-gray-800 h-20 w-24 sm:w-36 flex justify-center items-center px-3">
                    <Image
                        width={100}
                        height={150}
                        className=""
                        src={fakeimage3}
                        alt="maillot handball"
                        fallback="/images/default-cover-image.jpg"
                    />
                </div>
                <div className="bg-gray-800 h-20 w-24 sm:w-36 flex justify-center items-center px-3">
                    <Image
                        width={100}
                        height={150}
                        className=""
                        src={fakeimage4}
                        alt="maillot handball"
                        fallback="/images/default-cover-image.jpg"
                    />
                </div>
            </div>
        </div>
    )
}
