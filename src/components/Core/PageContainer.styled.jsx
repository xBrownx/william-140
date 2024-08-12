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
    overflow: hidden;
`

export const FullPageMin = styled.div`
    width: 100vw;
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

export const Padding = styled.div`
    padding: 0 11.111vw;
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
`





