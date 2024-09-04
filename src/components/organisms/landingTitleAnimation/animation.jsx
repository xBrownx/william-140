import { memo } from "react";
import { AnimateY } from "./animateY";
import { AnimateX } from "./animateX";

export const TitleAnimation = memo(
    function Animation({x, y, delay, children}) {
        return (
            <AnimateY y={y} delay={delay}>
                <AnimateX x={x} delay={delay}>
                    {children}
                </AnimateX>
            </AnimateY>
        )
    }
);