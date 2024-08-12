import {LandingButtonWrapper} from "./Landing.styled";
import {ArrowButton} from "../../Buttons/Buttons.styled";
import React from "react";

export const LandingButton = ({onClick}) => {
    return (
        <LandingButtonWrapper>
            <ArrowButton onClick={onClick}/>
        </LandingButtonWrapper>
    );
}