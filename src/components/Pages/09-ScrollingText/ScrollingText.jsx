import React from 'react';
import styled from "styled-components";
import {InfiniteLooper} from "../../ScrollingCarousel/InfiniteLooper.component";
import {media} from '../../Media'

export const ScrollingText = () => {

    return (

        <Container
            id="scrolling-text-container"
        >
            <InfiniteLooper>
                <HeadingSplit>
                    140 WILLIAM STREET
                </HeadingSplit>
            </InfiniteLooper>
        </Container>

    );
};

const HeadingSplit = ({children}) => {
    return children.split("").map((item, i) => {
        return (
            <Heading key={`h_${i}`}>{item === ' ' ? <>&nbsp;</> : item}</Heading>
        )
    })
}

const Container = styled.div`
    background: var(--color-primary-2);
    max-height: var(--height-500px);
    min-height: var(--height-500px);;
    display: flex;
    justify-content: center;
    overflow: hidden;
    min-width: 100vw;
    //width: 100vw;
    ${media.md`
        min-height: auto;
    `}
`


const Heading = styled.h1`
    font-family: var(--font-fmaily-primary-light), serif;
    font-size: var(--font-size-300px);
    color: var(--color-primary-4);
    font-weight: 300;
    opacity: 0.2;
    padding: 0;
    margin: 0;
`
