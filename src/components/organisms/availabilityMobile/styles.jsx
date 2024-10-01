import styled, { css } from 'styled-components';
import { Style as S } from "../../atoms";

export const Container = styled.div`
    padding-top: 46px;
    padding-inline: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    z-index: 2;
    position: relative;
`

export const CustomHeading = styled.h2`
    font-size: 14px;
    line-height: 18.16px;
    color: #162425B2;
    font-family: 'SuisseIntl-Regular', serif;
`

export const CustomRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const ArrowWrapper = styled.div`
    width: 24px;
    height: 24px;
    
    svg {
        width: 100%;
        height: 100%;
        
        ${props => props.$hidden && css`
            display: none;
        `}
    }
    
    ${props => props.$right && css`
        rotate: 90deg;
    `}
    
    ${props => props.$left && css`
        rotate: -90deg;
    `}
`

export const ButtonsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`

export const CustomButton = styled.div`
    display: flex;
    border-radius: 3px;
    margin: 0;
    padding: 0;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    border: 1px solid white;
  
    ${props => props.$active && props.$modalActive && css`
        background-color: #164A49;
        border: 1px solid #164A49;
    `}
    
    ${props => props.$visible && css`
        visibility: unset;
        display: flex;
    `}
    
    
        font-family: 'SuisseIntl-Light', serif;
        font-size: 16px;
        color: white;
        font-weight: 700;
        ${props => props.$active && css`
            color: white;
        `}
`

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.0);
    z-index: 1000000;
    display: none;
    ${props => props.$open && css`
        display: block;
    `};
    
`

export const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 1000000;
    width: 100%;
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
    pointer-events: none;
    transition: all 500ms ease-in-out;
    
    background: rgba(22, 74, 73, 0.3);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);

    opacity: 0;
    
    ${props => props.$open && css`
        opacity: 1;
        pointer-events: visible;
    `};
    
    padding-top: 46px;
    padding-inline: 16px;
`

export const ModalHeading = styled.h1`
    font-family: 'TWKEverett-Light', serif;
    color: white;
    font-size: 36px;
    line-height: 43.2px;
    font-weight: 300;
    margin: 0;
    padding: 39px 0 0 0;
`

export const TenancyWrapper = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    gap: 16px;
`

export const CustomSubheading = styled.h2`
    color: white;
    font-size: 16px;
    font-weight: 400;
    line-height: 20.75px;
    border-bottom: 1px solid white;
    font-family: 'SuisseIntl-Light', serif;
`

export const ImageWrapper = styled.div`
    padding-top: 39px;
    width: 100%;
    display: flex;
    justify-content: center;
    
`

export const CloseButtonWrapper = styled.div`
    z-index: 10000000;
    width: 24px;
    height: 24px;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 16px;
    padding-top: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CustomImage = styled.img`
    z-index: 10000;
    width: 24px;
    height: 24px;
`

export const TenancyImage = styled.img`

`

export const ModalContentWrapper = styled.div`

`

export const ModalParagraph = styled.p`

`

export const FloorPlanButton = styled.button`
    border-radius: 3px;
    font-family: 'SuisseIntl-Light', serif;
    gap: 1.5px;
    margin: 39px 0 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 300;
    background: transparent;
    border-width: 1px;
    border-style: solid;
    color: white;
    border-color: white;
    padding: 0.5em 1.5em;
    overflow: hidden;
    position: relative;
    
    z-index: 1;
    
    width: 100%;
    
    img {
        width: 24px;
        height: 24px;
    }

`

export const DetailsWrapper = styled.div`
    padding-top: 39px;
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding-bottom: 8px;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 8px;
`

export const StyledUl = styled.ul`
    list-style: none;
    width: 100%;
`

export const StyledLi = styled.li`
    padding-left: 9px;
    display: flex;
    flex-direction: row;
    gap: 58px;
    width: 291px;
`

export const LabelWrapper = styled.div`
    width: 104px;
`

export const ValueWrapper = styled.div`
    width: 70px;
`

export const CustomColumn = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    
`