import Image from "next/image"
import Link from "next/link"

const ContentfulCard = ({ cards }) => {

    return (
        <>
            {cards.map(card => (
                <div className='flex flex-col justify-between bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 p-8 rounded-xl'>
                    <Image
                        variant="top"  
                        src={'https:' + card.fields.image.fields.file.url}
                        height={400}
                        width={400}
                        className="mx-auto"
                        alt="hej"
                    />  
                    <h4 className="uppertext font-bold text-xl pt-4">{card.fields.title}</h4>
                    <p className="text-sm leading-7 my-3 font-light opacity-50">{card.fields.subheading}</p>
                    <Link href={`https://${card.fields.url}`} className=" bg-slate-700 py-2.5 px-8 rounded-full">
                        Click here
                    </Link>
                </div>
            ))}
        </>
        
    )
}

export default ContentfulCard