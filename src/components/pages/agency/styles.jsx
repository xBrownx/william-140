import styled, { css } from 'styled-components';
import {Style as S, Media as M} from '../../atoms';

export const CustomSplitScreen = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    
    ${M.md`
        padding-top: 32px;
        height: auto;
        flex-direction: column;
        gap: 32px;
    `};
`

export const Pane = styled.div`
    flex: 1;
    align-items: center;

    ${M.md`
        flex: none;
        width: 100%;
        ${props => props.id === 'left-pane' && css`
            order: 2;
        `};
        
        ${props => props.id === 'right-pane' && css`
            order: 1;
        `};
    `};
`

export const ImgWrapper = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
    padding-right: 16px;
    
    ${M.md`
        display: none;
    `};
`

export const RightHandPane = styled.div`
    padding: 0 0 0 var(--width-48px);
    
    ${M.md`
        padding: 0;
        padding-inline: 16px;
    `};
`

export const StyledHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    font-weight: 300;
    font-size: var(--font-size-64px);
    color: #fff;
    margin: 0;
    padding: 0;
    
    ${M.md`
        font-size: 36px;
        line-height: 43.2px;
    `};
`

export const ContentContainer = styled.div`
    border-left: 1px solid #84936E;
    padding: 0 0 0 var(--width-32px);
    
    ${M.md`
        padding-left: 16px;
    `};
`

export const StyledParagraph = styled.p`
    font-size: var(--font-size-18px);
    font-family: var(--font-fmaily-secondary-light), serif;
    font-weight: 400;
    line-height: var(--line-height-18px);
    color: #fff;
    opacity: 0.7;
    margin: var(--height-32px) 0 0 0;
    padding: 0;
    
    ${M.md`
        font-size: 14px;
        line-height: 21px;
        margin-top: 16px;
    `};
`

export const SubheadingWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: var(--height-32px) 0 0 0;

    padding: var(--height-8px) 0;

    img {
        padding: 0;
        margin: 0 0 0 10px;
        height: var(--font-size-18px);
        width: var(--font-size-18px);
    }

    &:hover {
        cursor: pointer;
    }
    
    ${M.md`
        margin-top: 8px;
        
        img {
        padding: 0;
        margin: 0 0 0 10px;
        height: 24px;
        width: 24px;
    }
    `};
    
`

export const StyledSubheading = styled.h1`
    margin: 0 0 0 0;
    padding: 0;
    color: #5178E1;
    font-family: "SuisseIntl-Bold", serif;
    font-size: var(--font-size-20px);
    
    ${M.md`
        font-size: 24px;
        line-height: 24px;
        font-weight: 400;
        font-family: "SuisseIntl-Regular", serif;
    `};
`

export const StyledUl = styled.ul`
    margin: var(--height-16px) 0 0 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    list-style: none;
    ${S.gap.height(16)};
    
    ${M.md`
        gap: 16px;
        margin-top: 8px;;
    `};
`

export const CustomImageWrapper = styled.div`
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

     ${M.md`
        display: none;
    `};
`

export const CustomImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${S.borderRadius};
    
    img {
        ${S.borderRadius};
    };
`