import {LandingButtonWrapper} from "../styles/01-Landing.styled";
import {ArrowButton} from "../styles/Buttons.styled";
import React from "react";

export const LandingButton = ({onClick}) => {
    return (
        <LandingButtonWrapper>
            <ArrowButton onClick={onClick}/>
        </LandingButtonWrapper>
    );
}