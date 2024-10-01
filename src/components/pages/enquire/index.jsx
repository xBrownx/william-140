import React, { forwardRef, memo } from 'react';
import { enquire as CONST } from "./constants";
import { ArrowButton } from "../../atoms";
import { Container } from "../../molecules";
import { EnquireForm } from "../../organisms";
import { Page } from "../../templates";
import { useMobile } from "../../../hooks/useMobile";
import { CustomColumn, CustomContainer, CustomHeading } from "./styles";
import { ParallaxText } from "../../molecules/parallaxText";


export const Enquire = memo(
    forwardRef(
        function ({id, scrollToTop}, ref) {
            const isMobile = useMobile();
            return (
                <Page
                    $bgSecondary
                    padding={{top: isMobile ? 64 : 70}}
                >
                    <CustomContainer ref={ref}>
                        <CustomColumn>
                            <CustomHeading $secondary>
                                <ParallaxText>
                                    {CONST.headingTxt}
                                </ParallaxText>
                            </CustomHeading>
                            <EnquireForm fields={CONST.fields}/>
                        </CustomColumn>
                    </CustomContainer>
                    {!isMobile && <Container
                        $justifyEnd
                        widthPc={100}
                        height={64}
                        padding={{right: 32}}
                        margin={{bottom: 213}}
                    >
                        <ArrowButton
                            $rotate
                            onClick={scrollToTop}
                        />
                    </Container>}
                </Page>
            );
        }
    )
);

export default Enquire;

