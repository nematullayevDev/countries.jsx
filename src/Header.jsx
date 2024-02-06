import useDarkMode from "use-react-dark-mode";

function Header () {
    const { isDark, toggle } = useDarkMode(); 
    return(
        <header className="header">
            <h1 className="logo">Where in the world?</h1>

            <div className="btnDiv">
                <img className="btnImg" src="../moon.svg" alt="" />
                <button className="button" onClick={toggle}>Dark Mode</button>
                
            </div>
        </header>
    )
}

export default Header