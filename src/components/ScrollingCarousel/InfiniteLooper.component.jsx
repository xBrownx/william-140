import React, {useCallback, useEffect, useRef, useState} from "react";
import styled from "styled-components";


export const InfiniteLooper = ({children}) => {

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
        <OuterContainer ref={outerRef}>
            <OuterWrapper ref={innerRef}>
                {[...Array(looperInstances)].map((_, ind) => (
                    <InnerContainer key={`${ind}_outer`}>
                        {children}
                    </InnerContainer>
                ))
                }
            </OuterWrapper>
        </OuterContainer>
    )
}

const OuterContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: max-content;
    overflow: hidden;
    height: 100%;
    max-width: 100vw;
`

const OuterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: fit-content;
`

const InnerContainer = styled.div`
    display: flex;
    width: max-content;
    height: max-content;


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

