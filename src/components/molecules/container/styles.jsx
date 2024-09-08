import styled, {css} from "styled-components";
import {Style as S} from '../../atoms'

export const StyledContainer = styled.div`
    position: relative;


    ${props => props.$fullScreen && css`
        width: 100vw;
        height: 100vh;
        min-width: 100vw;
        min-height: 100vh;
    `}
    
    ${props => props.$absolute && css`
        position: absolute;
    `};

    ${props => props.width && css`
        ${S.size.width(props.width)};
    `};
    
    ${props => props.widthPc && css`
        width: ${props.widthPc}%;
    `};

    ${props => props.height && css`
        ${S.size.height(props.height)};
    `};

    ${props => props.padding && css`
        ${S.padding.__(props.padding)};
    `};

    ${props => props.paddingInlineBlock && css`
        ${S.padding.inlineBlock(props.paddingInlineBlock)};
    `};

    ${props => props.margin && css`
        ${S.margin.__(props.margin)};
    `};

    ${props => props.marginInlineBlock && css`
        ${S.margin.inlineBlock(props.marginInlineBlock)};
    `};

    ${props => props.position && css`
        ${S.position(props.position)};
    `}

    ${props => props.$imgCover && css`
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    `};

    ${props => props.$gridCentre && css`
        display: grid;
        place-items: center;
        margin-inline: auto;
        position: relative;
        overflow: hidden;
        width: 100%;
        ${S.borderRadius};
    `}
    
    ${props => props.$gridOne && css`
        grid-row: 1;
        grid-column: 1;
        width: 100%;
        height: 100%;
        opacity: ${props => props.$isVisible ? 1 : 0};
    `}
    
    ${props => props.$overflowHidden && css`
        overflow: hidden;
    `}
    
    ${props => props.$flexRow && css`
        ${S.flex.row};
    `}
    
    ${props => props.$flexColumn && css`
        ${S.flex.column};
    `}
    
    ${props => props.$alignCentre && css`
        align-items: center;
    `}
    
    ${props => props.$centre && css`
        ${S.flex.centre}
    `};
    
    ${props => props.$justifyEnd && css`
        display: flex;
        justify-content: end;
    `}
    
    ${props => props.$borderBox && css`
        box-sizing: border-box;
    `}
    
    ${props => props.$flexOne && css`
        min-width: 50%;
        width: 50%;
        flex: 1;
    `}
        
    ${props => props.$fillSize && css`
        width: 100%;
        height: 100%;
    `}
    
    



`

// ${props => props.$ && css`
//
// `};