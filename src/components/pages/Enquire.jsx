import React, { forwardRef } from 'react';
import { enquire as CONST } from "../../constants";
import { ArrowButton, Heading } from "../atoms";
import { Column, Container } from "../molecules";
import { EnquireForm } from "../organisms";
import { Page } from "../templates";


export const Enquire = forwardRef(function ({id, scrollToTop}, ref) {
    return (
        <Page
            $bgSecondary
            padding={{top: 70}}
        >
            <Container
                pageRef={ref}
                $flexColumn
                $alignCentre
                $overflowHidden
                $borderBox
                padding={{top: 70}}
                margin={{bottom: 140}}
            >
                <Column gap={32} $centreX>
                    <Heading $secondary>
                        {CONST.headingTxt}
                    </Heading>
                    <EnquireForm/>
                </Column>
            </Container>
            <Container
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
            </Container>
        </Page>
    );
});

export default Enquire;

