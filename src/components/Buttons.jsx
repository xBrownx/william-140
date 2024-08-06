import React from 'react';
import {ReactComponent as DownArrow} from "../assets/LandingDownArrow.svg"
import {useSwiper} from "swiper/react";

export const PrimaryButton = (props) => {
    return (
        <div className="primary-button">
            <DownArrow
                className=""
                onClick={props.onClick}
            />
        </div>
    );
};

export const PrimaryTextButton = (props) => {
    return (
        <div className="primary-text-button">
            <button
                className="primary-text-button"
                onClick={props.onClick}
            >
                {props.text}
            </button>
        </div>
    );
};




