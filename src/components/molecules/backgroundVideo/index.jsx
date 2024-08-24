import React from "react";
import {Container, StyledVideo} from "./styles";
import video from "../../../assets/vid/01-Landing.mp4";

export const BackgroundVideo = props => {
    return(
        <Container>
            <StyledVideo loading={"lazy"} autoPlay loop muted controls={false}>
                <source src={props.src} type="video/mp4"/>
            </StyledVideo>
        </Container>
    );
}