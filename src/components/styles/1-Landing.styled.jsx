import styled from "styled-components";
import {motion} from "framer-motion";
import React from "react";
import background from "../../assets/LandingBackground.png"


export const LandingAnimation = ({x, y, delay, children}) => {
    return (
        <motion.div style={{width: "100%"}}
                    initial={{y: y}} animate={{y: 0}}
                    transition={{type: "spring", duration: 1, delay: delay}}
        >
            <motion.div
                style={{width: "100%"}}
                initial={{x: x}} animate={{x: 0}}
                transition={{type: "spring", duration: 1.3, delay: 1.2 + delay}}
            >
                {children}
            </motion.div>
        </motion.div>
    );
}

export const LandingDisplay = styled.div`
    position: relative;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    padding: 0 27.5% 120px 14.1%;
`

export const LandingBackground = styled.div`
    z-index: 0;
    position: absolute;
    background: url(${background}) no-repeat fixed 50% 50%;
    //background-size: 86.4%;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    filter: brightness(75%);

    animation: landing-image-expand 2s forwards;

    @keyframes landing-image-expand {
        0% {
            width: 0;
            height: 0;
        }

        50% {
            width: 50vh;
            height: 50vh;
        }

        60% {
            width: 50vh;
            height: 50vh;
        }
        100% {
            width: 100vw;
            height: 100vh;
        }
    }
`