import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Style as S } from '../../atoms'

export const ImgContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${S.borderRadius};
    //@media only screen and (max-width: 750px) {
    //    height: auto;
    //    align-items: start;
    //}
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

    //@media only screen and (max-width: 750px) {
    //    border: 1px solid black;
    //    box-sizing: border-box;
    //    object-fit: contain;
    //    height: auto;
    //}

`

export const ImgWrapper = styled.div`

    ${props => props.width && css`
        ${S.size.width(props.width)}
        ${S.size.minWidth(props.width)}
        ${S.size.maxWidth(props.width)}
    `}

    ${props => props.height && css`
        ${S.size.height(props.height)}
        ${S.size.maxHeight(props.height)}
        ${S.size.minHeight(props.height)}
    `}

    ${S.borderRadius};

    img {
        ${S.borderRadius};
    }
`
