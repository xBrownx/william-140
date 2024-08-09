import styled, { css } from "styled-components";
import {motion} from "framer-motion";

export const PageSection= styled(motion.section)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    //overflow: hidden;
    min-width: 100%;
    min-height: 100%;
    height: 100%;
    //box-sizing: border-box;
    
    background-color: ${({ theme }) => theme.colors.bg_primary};
    
    ${props => props.$secondary && css`
        background-color: ${({ theme }) => theme.colors.bg_secondary};
    `};
    
    
    
`