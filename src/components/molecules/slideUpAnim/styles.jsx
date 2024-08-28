import styled, { keyframes } from 'styled-components';
import {motion} from "framer-motion";

const SlideUpAnim = keyframes`
    0% {
        opacity: 0;
        transform: translateY(100%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`

export const StyledContainer = styled(motion.div)`
    animation: ${SlideUpAnim} 1s;
`

