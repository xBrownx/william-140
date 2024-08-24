import {Page} from "../page";
import {Container} from "./styles";
import {ParallaxImg} from "../../organisms/ParallaxComponents";
import React from "react";


export const Hero = props => {
    return (
        <Page $fullPage {...props}>
            <Container {...props}>
                <ParallaxImg src={props.src} alt={props.alt}/>
            </Container>
        </Page>
    );
}