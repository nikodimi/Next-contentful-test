
const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <h1>
                    <span>Just Add</span>
                    <span>Marmite</span>
                </h1>
                <h2>Spread The Joy</h2>

            </header>

            <div className="page-content">
                { children }
            </div>

            <footer>
                <p>Copyright 2021 Just Add Marmite</p>
            </footer>
        </div>
    )
}

export default Layout