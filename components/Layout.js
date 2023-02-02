import Navigation from "./Navigation"

const Layout = ({ children, navbar, searchbar }) => {
    return (
        <div className="layout min-h-screen flex flex-col justify-between">
            <header>
                <Navigation navbar={navbar} searchbar={searchbar}/>  
            </header>

            <main>
                { children }
            </main>

            <footer className=" bg-slate-700 p-2 text-center ">
                <p>Copyright 2021 Just Add Marmite</p>
            </footer>
        </div>
    )
}

export default Layout