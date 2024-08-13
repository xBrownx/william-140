import React from 'react';
import {ReactComponent as Title} from "../../assets/svg/Title.svg";
import {ReactComponent as Menu} from "../../assets/icons/00-Nav-Menu.svg";
import {TextButton} from "../Buttons/Buttons.styled";
import {NavItems, NavBarLi, NavBarTitleWrapper, NavBarUl, NavBarWrapper, NavBarContainer} from "./NavBar.styled";
import {motion} from "framer-motion";
import {GlobalStyles} from "../themes/GlobalStyles.css";
import styled from "styled-components";

const NavBar = ({pageRefs}) => {

    const navItems = NavItems({mainRefs: pageRefs})

    return (
        <>
            <GlobalStyles/>
            <NavBarContainer
                id="nav-bar-container"
                as={motion.div}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: "spring", duration: 2, delay: 1.5}}
            >
                <NavBarWrapper id="nav-bar-wrapper">
                    <NavBarTitleWrapper id="nav-title-bar-wrapper">
                        <Title onClick={() => {
                        }}/>
                    </NavBarTitleWrapper>
                    <MenuWrapper id="menu-wrapper">
                        <Menu/>
                    </MenuWrapper>
                    <NavBarUl id="nav-bar-ul">
                        {navItems.map((item, i) => {
                            return (
                                <NavBarLi
                                    key={i}
                                    onClick={() => {
                                        item.pageRef.current.scrollIntoView({behavior: "smooth"})
                                    }}>
                                    {item.name}
                                </NavBarLi>
                            )
                        })}

                        <NavBarLi onClick={() => pageRefs.enquire.current.scrollIntoView({behavior: "smooth"})}>
                            <TextButton>Enquire</TextButton>
                        </NavBarLi>
                    </NavBarUl>

                </NavBarWrapper>
            </NavBarContainer>
        </>
    )
}

const MenuWrapper = styled.div`
    display: none;
    padding: var(--height-26px) var(--width-32px) var(--height-26px) 0;
    margin: 0;
    
    @media only screen and (max-width: 750px) {
        display: flex;
    }
`

export default NavBar;