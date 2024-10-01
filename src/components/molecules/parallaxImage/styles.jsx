import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Style as S, Media as M } from '../../atoms'

export const ImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${S.borderRadius};
    
    ${M.md`
        height: fit-content;
        align-items: start;
    `};
`

export const StyledImg = styled(motion.img)`
    object-fit: cover;
    width: 100%;
    height: 100%;
    
    ${props => props.width && css`
        ${S.size.minWidth(props.width)};
    `};
    
    ${props => props.height && css`
        ${S.size.minHeight(props.height)};
    `};
    
    
    ${S.borderRadius};

     ${M.md`
        box-sizing: border-box;
        object-fit: contain;
        height: fit-content;
        min-height: unset;
    `};

`
