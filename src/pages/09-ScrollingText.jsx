import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {GlobalStyles} from "../themes/GlobalStyles.css";
import {InfiniteLooper} from "../components/InfiniteLooper.component";

export const ScrollingText = () => {

    return (
        <>
            <GlobalStyles/>
            <Container>
                <InfiniteLooper>
                    <HeadingSplit>140 WILLIAM STREET </HeadingSplit>
                </InfiniteLooper>
            </Container>
        </>
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
    width: fit-content;
    max-width: 100vw;
`


const Heading = styled.h1`
    font-family: var(--font-fmaily-primary-light), serif;
    font-size: var(--font-size-xxxlarge);
    color: var(--color-primary-4);
    opacity: 0.2;
    padding: 0;
    margin: 0;
`
