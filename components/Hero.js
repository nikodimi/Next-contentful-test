import Image from "next/image"

const Hero = ({ hero }) => {
    console.log('hero', hero)
    const title = hero.fields.title
    const subheading = hero.fields.subheading
    const cta = hero.fields.cta
    const image = hero.fields.image.fields.file.url

    return (
        <div class="w-full bg-center bg-cover" style={{backgroundImage: `url(${image})`}}>
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50 py-12">
                <div class="text-center">
                    <div class="container px-4 mx-auto">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="mt-8 mb-6 text-4xl lg:text-5xl font-bold text-gray-100">{title}.</h2>
                            <p class="max-w-3xl mx-auto mb-10 text-lg text-gray-300">
                                {subheading}
                            </p>
                            <a class="inline-block w-full md:w-auto mb-4 md:mr-6 py-5 px-8 text-sm font-bold uppercase border-2 border-transparent bg-gray-200 rounded hover:bg-gray-100 text-gray-800 transition duration-200"
                                href="#">{cta}</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <section class="dark:bg-gray-800 dark:text-gray-100">
	    //     <div class="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        //         <div class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
        //             <Image 
        //                 src={'https:' + image} 
        //                 alt="" 
        //                 class="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
        //                 width="1000"
        //                 height="1000"
        //             />
        //         </div>
		//         <h1 class="text-4xl font-bold leading-none sm:text-5xl">{title}</h1>
		//         <p class="px-8 mt-8 mb-12 text-lg">{subheading}</p>
		//         <div class="flex flex-wrap justify-center">
        //             <button class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">{cta}</button>
		//         </div>
	    //     </div>
        // </section>
    )
}

export default Hero