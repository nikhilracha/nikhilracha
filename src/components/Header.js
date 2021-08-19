import React from "react"
import Fade from "react-reveal/Fade"


const Header = () => {
    return (
        <div className="section" id="home">
            <div className="container">
                <div className="header-wrapper">
                    <Fade bottom>
                        <h1>
                            Hello! &nbsp;
              <span role="img" aria-label="Emoji">
                                👋
              </span>
                        </h1>
                    </Fade>
                    <Fade bottom cascade>
                        <div className="heading-wrapper">
                            <h1>
                                I'm <span className='boldd'>Sri Nikhil Racha, </span>
                                {/* {data.headerTagline[0]
                  ? data.headerTagline[0]
                  : "I'm Sri Nikhil Racha"} */}
                            </h1>
                            <h1>
                                {" "}
                Software Developer
                {/* {data.headerTagline[1]
                  ? data.headerTagline[1]
                  : "products, brands"} */}
                            </h1>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <h3>Get in touch!  &nbsp;
              <span role="img" aria-label="Emoji">
                                👉 &nbsp;
              </span>
                            <span className="email">
                                nikhilracha1@gmail.com
              </span>
                        </h3>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default Header;
