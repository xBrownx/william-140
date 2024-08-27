import React from "react";
import {Container, Heading} from "./styles";
import {ScrollingCarousel} from "../../molecules/scrollingCarousel";

export const ScrollingText = () => {

    return (

        <Container>
            <ScrollingCarousel>
                <HeadingSplit>
                    140 WILLIAM STREET
                </HeadingSplit>
                <Heading>&nbsp;</Heading>
            </ScrollingCarousel>
        </Container>

    );
};

const HeadingSplit = ({children}) => {
    return (
        <>
            {children.split("").map((item, i) => {
                return (
                    <Heading key={`h_${i}`}>{item === ' ' ? <>&nbsp;</> : item}</Heading>
                )
            })
            }

        </>
    );
}