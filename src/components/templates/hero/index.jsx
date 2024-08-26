import React from "react";
import {Container} from "./styles";
import {ParallaxImg} from "../../molecules";
import {Page} from "../page";


export const Hero = props => {
    return (
        <Page $fullPage {...props}>
            <Container {...props}>
                <ParallaxImg image={props.img}/>
            </Container>
        </Page>
    );
}