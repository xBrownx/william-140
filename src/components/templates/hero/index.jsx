import React, { memo } from "react";
import { Container } from "./styles";
import { ParallaxImg } from "../../molecules";
import { Page } from "../page";

export const Hero = memo(
    function Hero(props) {
        return (
            <Page {...props}>
                <Container {...props}>
                    <ParallaxImg image={props.img} />
                </Container>
            </Page>
        );
    }
);