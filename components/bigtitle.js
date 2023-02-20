export default function BigTitle({ title }){
    return (
        <><div className="flex justify-center">
            <img className="w-56 md:w-64 lg:w-96" src="bigtitle.svg"/>
            <p className="text-white absolute md:mt-11 lg:mt-16 lg:text-2xl mt-9 mr-6 text-xl">{title}</p>
        </div>
        </>
    )
}
