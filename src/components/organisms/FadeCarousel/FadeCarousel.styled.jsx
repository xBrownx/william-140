import styled, {css} from "styled-components";


export const CarouselContainer = styled.div`
    margin-inline: auto;
    position: relative;
    overflow: hidden;
    display: grid;
    place-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`
export const CarouselSlide = styled.div`
    grid-row: 1;
    grid-column: 1;
    width: 100%;
    height: 100%;
    transition-property: opacity;
    opacity: 0;
    transition-timing-function: ease-in;
    transition-duration: 700ms;
    
    ${props => props.$isActive && css`
        opacity: 1;
        transition-timing-function: ease-out;
    `};
`

export const ImgContainer = styled.div`
    width: 100%;
    height: 100%;
    
    svg {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
    
    img {
        max-height: 100%;
        max-width: 100%;
        height: 100%;
        width: 100%;
        //object-fit: contain;
    }
`

