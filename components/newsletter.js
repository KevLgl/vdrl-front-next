export default function Newsletter(){
    return (
                <div className="h-60 text-xs sm:text-sm flex space-x-4 items-center justify-center bg-red-600 w-full p-4">
                    <div className="w-10 md:w-20">
                    <img className="" src="enveloppe.png"/>
                </div>
                <div className=" w-1/2 md w-1/3 text-white">
                    <p>Vous n’êtes toujours pas insrit à la newletter ? </p>
                    <p>Entrez votre adresse e-mail pour recevoir toutes les informations concernant le club</p>
                    <div className="my-3 ">
                        <div className="flex">
                            <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="w-24 md:w-36 lg:w-48 border border-gray-300 text-gray-900 text-xs focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ton.adress@mail.com" />
                            <button className="ml-2 p-2 bg-gray-900">S'inscrire</button>
                        </div>
                        </div>
                </div>

            </div>
    )
}
