import React, { forwardRef, memo } from 'react';
import { lifestyle as CONST } from "./constants";
import { ScrollingCarousel } from "../../molecules";
import { LifestyleImages } from "../../organisms";
import { Page } from "../../templates";
import { CarouselContainer, StyledColumn, TitleContainer } from "./styles";
import { Heading, Subheading } from "../../atoms";
import { IndentParagraph } from "../../molecules/indentParagraph";


const Lifestyle = memo(
    forwardRef(
        function ({id}, ref) {

            return (
                <Page $fullScreen $endY >
                    <StyledColumn >
                        <TitleContainer >
                            <Subheading >
                                {CONST.subheadingTxt}
                            </Subheading >
                            <Heading >
                                {CONST.headingTxt}
                            </Heading >
                            <IndentParagraph >
                                {CONST.paragraphTxt}
                            </IndentParagraph >
                        </TitleContainer >
                        <CarouselContainer >
                            <ScrollingCarousel >
                                <LifestyleImages assets={CONST.assets} />
                            </ScrollingCarousel >
                        </CarouselContainer >
                    </StyledColumn >
                </Page >
            );
        }
    )
);

export default Lifestyle;