import React from 'react';
import {ReactComponent as Logo} from "../assets/Logo.svg";
import {ReactComponent as Title} from "../assets/LogoBottom.svg";
import './LogoAnimation.css'

function LogoAnimation(props) {
    return (
        <>
            <div className="logo-anim-container ">
                <div className="logo-anim-container">
                    <Logo className="home-page-logo"/>
                </div>

                {/*<Title className="home-page-title"/>*/}
                {/*<div className="home-page-logo-title">*/}

                {/*</div>*/}
            </div>
        </>
    );
}


export default LogoAnimation;