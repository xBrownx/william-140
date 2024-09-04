import { useCallback, useEffect, useRef, useState, memo } from "react";
import { InnerContainer, OuterContainer, Track } from "./styles";

export const ScrollingCarousel = memo(
    function ScrollingCarousel(props) {

        const [looperInstances, setLooperInstances] = useState(1);
        const outerRef = useRef(null);
        const innerRef = useRef(null);

        function resetAnimation() {
            if (innerRef?.current) {
                innerRef.current.setAttribute("data-animate", "false");

                setTimeout(() => {
                    if (innerRef?.current) {
                        innerRef.current.setAttribute("data-animate", "true");
                    }
                }, 50);
            }
        }

        const setupInstances = useCallback(() => {
            if (!innerRef?.current || !outerRef?.current) return;
            const {width} = innerRef.current.getBoundingClientRect();
            const {width: parentWidth} = outerRef.current.getBoundingClientRect();
            const instanceWidth = width / innerRef.current.children.length;
            if (width < parentWidth + instanceWidth) {
                setLooperInstances(looperInstances + Math.ceil(parentWidth / width));
            }

            resetAnimation();
        }, [looperInstances]);

        useEffect(() => {
            setupInstances();
        }, []);

        useEffect(() => {
            window.addEventListener("resize", setupInstances);

            return () => {
                window.removeEventListener("resize", setupInstances);
            };
        }, []);

        return (
            <OuterContainer ref={outerRef}>
                <Track ref={innerRef}>
                    {[...Array(looperInstances)].map((_, ind) => (
                        <InnerContainer key={ind}>
                            {props.children}
                        </InnerContainer>
                    ))}
                </Track>
            </OuterContainer>
        );
    }
);