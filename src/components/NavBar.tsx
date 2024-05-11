import "../styles/navbar.css";

function NavBar() {
    return (
        <div>
            <nav id="nav-bar">
                <div></div>

                <div className="topnav">
                    <a href="../#Home" title="Home">
                        Home
                    </a>

                    <a href="../#About" title="About">
                        About
                    </a>

                    <a href="../#Portfolio" title="Portfolio">
                        Portfolio
                    </a>

                    <a href="../roadmap" title="RoadMap">
                        RoadMap
                    </a>

                    <a href="../#Experience" title="Experience">
                        Experience
                    </a>

                    <a href="../#Skills" title="Skills">
                        Skills
                    </a>

                    <a href="../#Profile" title="Profile">
                        Profile
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
