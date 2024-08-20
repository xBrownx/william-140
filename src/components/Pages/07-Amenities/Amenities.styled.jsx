import styled from "styled-components";
import {media} from "../../Styled/Media";
import * as Padding from "../../Styled/Padding";
import * as STYLES from '../../Styled/GlobalStyles'
import {buttonAnim} from "../../Styled/Buttons/Buttons.styled";

export const SplitScreen = styled.div`
    padding: 0 var(--width-160px);
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    box-sizing: border-box;

    ${media.md`
        ${Padding.x16Mobile};
        flex-direction: column;
        height: auto;
        ${Padding.y32Mobile}
        
    `};
`

export const AmenitiesLeftContainer = styled.div`
    flex: 1;
    min-width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
`

export const AmenitiesRightContainer = styled.div`
    flex: 1;
    display: flex;
    min-width: 50%;
    justify-content: center;
    height: 100%;
    
    
`

export const ImgContainer = styled.div`
    max-width: 37.778vw;
    max-height: 100vh;
    overflow: hidden;
    ${STYLES.imgBorderRadius};
    img {
        ${STYLES.imgBorderRadius};
    }
    ${media.md`
       max-width: 100vw;
       overflow: visible;
       padding-top: 32px;
    `}
`

export const AmenitiesListWrapper = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;
    border-left: 1px solid #84936E;
    gap: var(--height-16px);
    margin: var(--height-32px) 0 0 0;
    padding: 0 0 0 var(--width-32px);
`

export const ListItemStyled = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--height-16px);


    &:hover {
        cursor: pointer;

        h3, svg {
            opacity: 1;
            ${buttonAnim};
        }
    }

    h3, svg {
        opacity: 0.7;
        transition: all 200ms ease-in-out;
    }

    h3 {
        margin: 0;
        padding: var(--height-16px) 0;
        font-size: var(--font-size-16px);
        font-weight: 400;
        font-family: var(--font-fmaily-secondary-light), serif;
        color: #FFF;
        ${media.md`
            font-size: 1rem;
        `}
    }


`