import styled, {css} from "styled-components";
import {useDeferredValue} from "react";


export const CarouselMenu = ({carouselItems, icons, activeIdx, setActiveIndex}) => {

    const slideTitles = carouselItems.map(item => {
        return item.title
    });

    const slideIcons = icons.map(item => {
        return item.src
    });

    // const deferredIdx = useDeferredValue(activeIdx);

    return (
        <Container id="container">
            <Wrapper id="wrapper">
                {slideIcons.map((Item, index) => (
                    <MenuItem
                        id="menu-item"
                        onClick={() => setActiveIndex(index)}
                        key={index}
                        $isActive={activeIdx === index}>
                        <Item/>
                        <p>{slideTitles[index]}</p>
                    </MenuItem>
                ))}
            </Wrapper>
        </Container>
    );
}

export const Container = styled.div`
    position: relative;
    width: 100%;
    background: #FFF;
    padding: 1.975vh 2.222vw;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-sizing: border-box;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2.222vw;
    overflow: hidden;
    
    @media only screen and (max-width: 750px) {
        gap: 5px;
    }
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
        transition: all 300ms ease;
        ${props => props.$isActive && css`
            opacity: 1;
            color: #164A49;
        `};
        
        @media only screen and (max-width: 750px) {
            font-size: 6pt;
        }
    }

    svg {
        width: 2.222vw;
        height: 2.222vw;
        transition: all 300ms ease;
        opacity: 0.5;
        ${props => props.$isActive && css`
            opacity: 1;
            filter: invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%);
        `};
        
        
    }
    
    &:hover {
        cursor: pointer;
        animation: y-button-hover 300ms ease-in-out;
        animation-fill-mode: both;
        
        p{
            opacity: 1;
            color: #164A49;
        }
        
        svg {
            filter: invert(20%) sepia(82%) saturate(370%) hue-rotate(130deg) brightness(94%) contrast(92%);
            opacity: 1;
        }
    }
    
    @keyframes y-button-hover {
        0% {
            scale: 1;
        }
        40% {
            scale: 1.03;
        }
        60% {
            scale: 1;
        }
        100% {
          
        }
    }

`