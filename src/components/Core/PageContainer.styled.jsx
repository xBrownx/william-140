import styled, { css } from "styled-components";
import {motion} from "framer-motion";

export const PageContainerStyled= styled(motion.div)`
    
`

export const FullPageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100vw;
    min-height: 100vh;
    height: 100vh;
    overflow: hidden;

    @media only screen and (max-width: 750px) {
        min-height: auto;
    }
`

export const FullPageMin = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    
    @media only screen and (max-width: 750px) {
        min-height: 0;
        gap:0;
        height: fit-content;
    }
`

export const Padding = styled.div`
    padding: 0 11.111vw;
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    
    @media only screen and (max-width: 750px) {
        padding: 0 0 0 0;
    }
`





