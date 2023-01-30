import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function NavBar() {

    // const tb = document.getElementsByClassName("navbar-toggler")[0]
    // const nb2h = document.getElementsByClassName("navbar-collapse collapse show")[0]
    // const closeNavbar = document.querySelectorAll(".navbar-brand, .nav-link, .dropdown-item")

    // console.log(closeNavbar)

    // const closeNavbar = document.querySelectorAll('.dropdown-item')
    // const closeNavbar = document.querySelectorAll('a')
    // closeNavbar.forEach(CNitem => {
        // CNitem.addEventListener("click", () => {

            // console.log("Ooooohhhhhh")

            // try {
                // tb.classList.add = "collapsed"            
                // nb2h.classList.remove = "show"
                // document.getElementsByClassName("navbar-collapse collapse show")[0].classList.remove = "show"
            //     console.log("tried")
                
            // } catch (err) {
            //     console.error(err.message);
            // }

            // console.log("YYYYYEEEEEEAAAAAAHHHHHHHHH");

            // document.getElementsByClassName("navbar-collapse collapse show").className = "navbar-collapse collapse"
            // document.getElementsByClassName("navbar-toggler").className = "navbar-toggler collapsed"
            // console.log(closeNavbar)
            // tb.classList.add = "collapsed"            
            // nb2h.classList.remove = "show"
    //     })
    // })

    // const collapseIt = () => {
    //     // document.querySelector("div#navbarSupportedContent").classList.remove("show")
    //     document.querySelector("div.show").classList.remove("show")
    // }

    document.addEventListener("click", e => {
        if (e.target.matches("a.dropdown-item") || e.target.matches("a.nav-link") || e.target.matches("a.navbar-brand")) { 
            // document.querySelector("div.show").classList.remove("show")
            document.querySelector("#navbarSupportedContent").classList.remove("show")
        }
        // document.getElementsByClassName("navbar-collapse collapse show")[0].classList.remove = "show" : 
        // collapseIt() :
        // console.error()
        // console.log("That failed")
        // console.log(document.getElementsByClassName("navbar-collapse collapse"))
    })
    
    // add 'show' to the classname
    // collapse navbar-collapse show

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-50">
            <div className="container-fluid">
                <Link className="navbar-brand" to="#!">Navbar</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <div className="nav-item">
                            <CustomLink className="nav-link" to="/" ><i className="fa fa-home fa-fw" />Home</CustomLink>
                        </div>
                        <div className="nav-item">
                            <CustomLink className="nav-link" to="/about" ><i className="fa fa-book fa-fw" />About</CustomLink>
                        </div>
                        <div className="nav-item dropdown">
                            {/* <Link className="nav-link dropdown-toggle" to="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-pencil fa-fw" />Data</Link> */}
                            <div className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fa fa-pencil fa-fw" />Data</div>
                            <div className="dropdown-menu dropdown-menu-dark">
                                <div><CustomLink className="dropdown-item" to="/crud">Crud</CustomLink></div>
                                <div><Link className="dropdown-item disabled" to="#!">Something else here</Link></div>
                                <hr className="dropdown-divider bg-light" />
                                <div><CustomLink className="dropdown-item" to="/dice"><i className="fa fa-cog fa-fw" />Dice</CustomLink></div>
                                <hr className="dropdown-divider bg-light" />
                                <div><CustomLink className="dropdown-item" to="/cart">Cart</CustomLink></div>
                            </div>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link disabled" to="#!">Disabled</Link>
                        </div>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 text-bg-dark" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-success" type="submit" style={{ "border": "1px dotted white" }}>Search</button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}