import styled, { css } from "styled-components";
import {motion} from "framer-motion";


export const PageSection = styled(motion.section)`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 100vw;
    min-height: 100vh;
    box-sizing: border-box;
    
    background-color: ${({ theme }) => theme.colors.bg_primary};
    
    ${props => props.secondary && css`
        background-color: ${({ theme }) => theme.colors.bg_secondary};
    `};
    
`

export const PageContainer = styled(motion.div)`
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    
`