import Navigation from "./Navigation"

const Layout = ({ children, navbar }) => {
    return (
        <div className="layout min-h-screen flex flex-col justify-between">
            <header>
                <Navigation navbar={navbar} />  
            </header>

            <main>
                { children }
            </main>

            <footer>
                <p>Copyright 2021 Just Add Marmite</p>
            </footer>
        </div>
    )
}

export default Layout