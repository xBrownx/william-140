import React, { memo } from "react";
import { Container, Heading } from "./styles";
import { ScrollingCarousel } from "../../molecules";
import { HeadingSplit } from "./headingSplit";

export const ScrollingText = memo(
    function ScrollingText() {
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
    }
);

