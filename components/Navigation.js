import { Container, Navbar, Nav, Image } from "react-bootstrap"

const Navigation = ({ navbar }) => {
    const logo = navbar.fields.logo
    const menu = navbar.fields.menu

    return (
        <Navbar bg="dark">
            <Container>
                <Navbar.Brand href="#home">
                    <Image
                        src={'https:' + logo.fields.image.fields.file.url}
                        alt={logo.fields.altTest}
                        width={40}
                        height={40}
                        />
                </Navbar.Brand>
                <Nav className="justify-content-between">
                    {menu.fields.links.map(link => (
                        <Nav.Link key={link.sys.id} href={link.fields.url}>{link.fields.text}</Nav.Link>
                    ))}
                </Nav>
            </Container>
      </Navbar>
    )
}

export default Navigation