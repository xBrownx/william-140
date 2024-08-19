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
        <OuterContainer ref={outerRef} id="looper-outer-container">
            <OuterWrapper ref={innerRef} id="looper-outer-wrapper">
                {[...Array(looperInstances)].map((_, ind) => (
                    <InnerContainer key={`${ind}_outer`} id="looper-inner-container">
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
    //width: 200%;
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
    height: 100%;
    
    animation: slideAnimation 16s linear infinite;

    @keyframes slideAnimation {
        from {
            transform: translateX(0%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`

