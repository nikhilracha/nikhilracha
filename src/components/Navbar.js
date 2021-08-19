import React from "react"
// import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
    return (
        <div className="section">
            <div className="container">
                <div className="navbar-wrapper">
                    <div
                        role="button"

                        className="name"
                        tabIndex={0}
                    >

                    </div>
                    <div className="links-wrapper">
                        <button >Work</button>
                        <button >About</button>
                        <button >Contact</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
