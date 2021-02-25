import React from "react";
import Typed from "react-typed";

 const Header=() => {
    return (
        <div className="header-wraper">
            <div className="main-info">
            <h1>hello world</h1>            
            <Typed
            className="typed-text"
            strings={["Eat","code","sleep","repeat"]}
            typeSpeed={40}
            backSpeed={60}
            loop 
            />
            <a href="#" className="btn-main-offer">join me</a>
            </div>
        </div>
    )
}

export default Header;
