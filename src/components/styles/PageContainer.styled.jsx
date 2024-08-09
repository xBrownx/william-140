import styled, { css } from "styled-components";
import {motion} from "framer-motion";

export const PageContainerStyled = styled(motion.div)`
    position: relative;
    overflow: hidden;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    
    ${props => props.$imgPadding && css`
        padding: 11.111vh 11.111vw 11.111vh 11.111vw;
    `};
    
`

export const FullPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
`

export const FullPageMin = styled.div`
    width: 100vw;
    height: 100%;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
`





