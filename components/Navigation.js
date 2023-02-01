import Image from "next/image"
import Link from "next/link"

const Navigation = ({ navbar }) => {
    console.log('navbar', navbar)
    const logo = navbar.fields.logo
    const menu = navbar.fields.menu

    return (
        <nav className="p-5 bg-slate-900 md:flex md:items-center md:justify-between">
            <div>
                <Image
                    src={'https:' + logo.fields.image.fields.file.url}
                    alt={logo.fields.altTest}
                    width={40}
                    height={40}
                />
            </div>
            <div>
                {menu.fields.links.map(link => (
                    <Link className="mx-2" key={link.sys.id} href={link.fields.url}>{link.fields.text}</Link>
                ))}
            </div>
      </nav>
    )
}

export default Navigation