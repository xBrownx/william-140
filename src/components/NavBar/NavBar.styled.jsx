import styled from "styled-components";
import {motion} from "framer-motion";

export const NavItems = (props) => {

    return [
        {name: "Home", pageRef: props.mainRefs.home},
        {name: "Location", pageRef: props.mainRefs.location},
        {name: "Design", pageRef: props.mainRefs.design},
        {name: "Amenities", pageRef: props.mainRefs.amenities},
        {name: "Availability", pageRef: props.mainRefs.availability},
        {name: "History", pageRef: props.mainRefs.history},
        {name: "Agencies", pageRef: props.mainRefs.agency},
    ]
}

export const NavBarContainer = styled(motion.div)`
    z-index: 2;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    height: var(--height-90px);
    width: 100%;

    @media only screen and (max-width: 750px) {
        height: 70px;
    }
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
        height: 2.099vh;
        width: 19.097vw;
        object-fit: cover;
        
        @media only screen and (max-width: 900px) {
            height: 11px;
            width: 190px;
        }
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

    @media only screen and (max-width: 900px) {
        display: none;
    }

`

export const NavBarLi = styled.li`
    transition: all 200ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    font-size: max(var(--font-size-18px), 1em);
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
    
    @media only screen and (max-width: 860px) {
        display: flex;
    }
`