import React from 'react';
import './HomePage-1.css'
import {ReactComponent as Logo} from "../assets/Logo.svg";
import {ReactComponent as DownArrow} from "../assets/DownArrow.svg"
import {useEffect, useRef, useState} from "react";

function HomePage1(props) {

    return (
        <div>
            <div className="home-page-wrapper">
                <div className="home-page-logo-container">
                    <Logo className="home-page-logo"/>
                </div>
                <div className="home-page-down-arrow-container">
                    <div className="home-page-down-arrow-wrapper"
                    >
                        <DownArrow
                            className="home-page-down-arrow link"
                            onClick={props.scrollTo}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage1;