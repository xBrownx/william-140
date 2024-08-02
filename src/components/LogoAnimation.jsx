import React from 'react';
import {ReactComponent as Logo} from "../assets/Logo.svg";
import {ReactComponent as LogoTop} from "../assets/LogoTop.svg";
import {ReactComponent as Title} from "../assets/LogoBottom.svg";
import './LogoAnimation.css'

function LogoAnimation(props) {
    return (
        <>
            <div className="logo-anim-container">
                <div className="logo-anim-wrapper">
                    <div className="logo-half top">
                        <div className="anim-div">
                            <div className="anim-progress"/>
                            <div className="anim-border"/>
                            <LogoTop className="landing-logo"/>
                        </div>
                    </div>
                    <div className="logo-half bottom">
                        <Title className="landing-title"/>
                    </div>
                </div>

            </div>
        </>
    );
}


export default LogoAnimation;