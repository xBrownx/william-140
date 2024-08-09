import styled, {css} from "styled-components";


export const CarouselContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    list-style: none;
    padding: 0;
    z-index: 1;
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
`

export const CarouselWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    transition-property: transform;
    box-sizing: content-box;
    transition-timing-function: initial;
    height: 100%;
    width: 100%;
`

export const CarouselSlide = styled.div`
    position: relative;
    top:0;
    left:-${props => props.index};
    width: 100vw;
    height: 100%;
    flex-shrink: 0;
    transition-property: opacity;
    opacity: 0;
    //transform: translate3d(${props => props.index}, 0, 0);
    pointer-events: none;
    transition-timing-function: ease-in;
    transition-duration: 700ms;
    
    
    ${props => props.$isActive && css`
        width: 100vw;
        pointer-events: auto;
        opacity: 1;
        transition-timing-function: ease-out;
        //transform: translate3d(-${props => props.index}, 0, 0);
    `};
`

export const CarouselSlideHidden = styled.div`
    width: 100vw;
    flex-shrink: 0;
    transition-property: opacity;
    
    opacity: 0;
    
`

export const ImgWrapper = styled.div`
    position: relative;
    width: 100vw;
    height: 100%;
`

export const ImgContainer = styled.div`
    width: 100%;
    height: fit-content;
    
    svg {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

export const MenuContainer = styled.div`
    position: relative;
    top: -3px;
    width: 100%;
    background: #FFF;
    padding: 1.975vh 2.222vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.222vw;
`

export const MenuItem = styled.div`
    display: flex;
    flex-direction: row;
    gap: 0.278vw;
    align-items: center;
    
    p {
        margin: 0;
        padding: 0;
        font-weight: 400;
        font-size: 1.975vh;
        opacity: 0.5;
    }
    
    svg {
        width: 2.222vw;
        height: 2.222vw;
    }
    
`