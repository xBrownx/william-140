import styled from "styled-components";
import {motion} from "framer-motion";
import {_18px} from "../../Styled/Font";
import {media} from "../../Styled/Media";

export const NavBarContainer = styled(motion.div)`
    z-index: 5;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    height: var(--height-90px);
    width: 100%;
`

export const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const NavBarTitleWrapper = styled.div`
    display: flex;
    padding: 0 0 0 var(--width-32px);
    align-items: center;
    width: 100%;
    object-fit: cover;

    svg {
        min-height: 2.099vh;
        min-width: 19.097vw;
        object-fit: cover;
        
    }

    &:hover {
        cursor: pointer;
    }
`
export const NavBarUl = styled.ul`
    list-style: none;
    display: flex;
    gap: var(--width-32px);
    padding: var(--height-26px) var(--width-32px) var(--height-26px) 0;
    margin: 0;

    ${media.md`
        display: none  
    `};

`

export const NavBarLi = styled.li`
    transition: all 200ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    ${_18px};
    font-family: var(--font-fmaily-secondary-light), serif;
    font-weight: 400;
    color: white;
    margin: 0;
    padding: 0;

    &:hover {
        color: black;
        cursor: pointer;
    }
`

export const MenuWrapper = styled.div`
    display: none;
    padding: var(--height-26px) var(--width-32px) var(--height-26px) 0;
    margin: 0;
    
    ${media.md`
        display: flex;
    `};
`