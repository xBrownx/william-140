import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import {GlobalStyles} from "../themes/GlobalStyles.css";
import {CarouselContainer, CarouselList, ImgContainer, StyledImg} from "./3-carousel/components/Carousel.styled";

export const ScrollingText = () => {

    return (
        <>
            <GlobalStyles/>
            <InfiniteLooper/>
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
    display: flex;
    flex-direction: row;
    width: fit-content;
    overflow: hidden;
`

const OuterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
    max-width: 100vw;
`

const InnerWrapper = styled.div`
    display: flex;
    width: max-content;

    animation: slideAnimation 8s linear infinite;

    @keyframes slideAnimation {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`

const Heading = styled.h1`
    font-family: var(--font-fmaily-primary-light), serif;
    font-size: var(--font-size-xxxlarge);
    color: var(--color-primary-4);
    opacity: 0.2;
    padding: 0;
    margin: 0;
`

const InfiniteLooper = () => {
    const [looperInstances, setLooperInstances] = useState(1);
    const outerRef = useRef(null);
    const innerRef = useRef();

    const setupInstances = useCallback(() => {
        if (!innerRef?.current || !outerRef?.current) return;

        const {width} = innerRef.current.getBoundingClientRect();

        const {width: parentWidth} = outerRef.current.getBoundingClientRect();

        const instanceWidth = width / innerRef.current.children.length;

        if (width < parentWidth + instanceWidth) {
            setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
        }
    }, [looperInstances]);

    useEffect(() => {
        setupInstances();
    }, []);

    return (
        <>
            <GlobalStyles/>
            <Container ref={outerRef}>
                <OuterWrapper ref={innerRef}>
                    {[...Array(looperInstances)].map((_, ind) => (
                        <InnerWrapper key={`loop_${ind}`}>
                            <HeadingSplit>140 WILLIAM STREET </HeadingSplit>
                        </InnerWrapper>
                    ))}
                </OuterWrapper>
            </Container>
        </>
    )

}
