import styled from "styled-components";
import {motion} from "framer-motion";

export const NavItems = (mainRefs) => {
    return [
        {name: "Location", pageRef: mainRefs.locationRef.current},
        {name: "Design", pageRef: mainRefs.designRef.current},
        {name: "Amenities", pageRef: mainRefs.amenitiesRef.current},
        {name: "Availability", pageRef: mainRefs.availabilityRef.current},
        {name: "History", pageRef: mainRefs.historyRef.current},
        {name: "Agencies", pageRef: mainRefs.agencyRef.current},
    ]
}

export const NavBarContainer = styled(motion.div)`
    z-index: 2;
    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
    top: 0;
    height: 91px;
    width: 100%;
`

export const NavBarWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`

export const NavBarTitleWrapper = styled.div`
    display: flex;
    padding: 0 0 0 32px;
    align-items: center;
    width: 100%;
    
    &:hover {
        cursor: pointer;
    }
`
export const NavBarUl = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    padding: 0 32px 0 0;
`

export const NavBarLi = styled.li`
    transition: all 200ms ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    
    text-decoration: none;
    
    font-size: 18px;
    font-family: ${({ theme }) => theme.typography.p1.fontFamily};
    font-weight: 300;
    color: white;
    margin: 0;
    padding: 0;
    
    &:hover {
        color: black;
        cursor: pointer;
    }
`