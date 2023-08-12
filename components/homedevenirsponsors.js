import Image from "next/image";
import joueurdetoure1 from '../public/joueur1detoure.png'
import joueurdetoure2 from '../public/joueur2detoure.png'
import React from "react";


export default function HomeDevenirSponsors(){
    return (
        <div>
            <div className="h-60 text-xs sm:text-sm w-full p-4 flex items-center justify-center">
                <div className="flex-1 flex justify-center items-center sm:w-1/6 w-1/4">
                    <Image
                        width={150}
                        height={300}
                        className="max-w-full h-auto"
                        src={joueurdetoure1}
                        alt="maillot handball"
                        fallback="/images/default-cover-image.jpg"
                    />
                </div>
                <div className="flex-3 pt-8 w-1/2">
                    <p className="font-bold text-xl md:text-3xl mt-4 text-gray-900">Vous souhaitez aussi nous accompagner dans cette
                        aventure en devenant sponsor ?</p>
                    <p className="text-gray-900">Contactez-nous pour avoir plus d’information sur les avantages du
                        sponsoring</p>
                </div>
                <div className="flex-1 flex justify-center items-center sm:w-1/6 w-1/4">
                    <Image
                        width={150}
                        height={300}
                        className="max-w-full h-auto"
                        src={joueurdetoure2}
                        alt="maillot handball"
                        fallback="/images/default-cover-image.jpg"
                    />
                </div>
                <div>

                </div>
            </div>
            <div className="flex items-center justify-center mb-5">
                <button type="button"
                        className=" mb-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Devenir sponsor
                </button>
            </div>
        </div>
)
}
