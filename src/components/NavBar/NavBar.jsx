import React, {useEffect} from 'react';
import {ReactComponent as Title} from "../../assets/svg/Title.svg";
import {TextButton} from "../Buttons.styled";
import {NavItems, NavBarLi, NavBarTitleWrapper, NavBarUl, NavBarWrapper, NavBarContainer} from "./NavBar.styled";
import {motion} from "framer-motion";

const NavBar = ({pageRefs}) => {

    const navItems = NavItems({mainRefs: pageRefs})
    const enquire = pageRefs.enquire.current;

    return (
        <NavBarContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ type: "spring", duration: 2, delay: 1.5 }}
        >
            <NavBarWrapper>

                <NavBarTitleWrapper>
                    <Title onClick={() => {}}/>
                </NavBarTitleWrapper>

                <NavBarUl>
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

                    <NavBarLi onClick={() => enquire.scrollIntoView({behavior: "smooth"})}>
                        <TextButton $variant={true}>Enquire</TextButton>
                    </NavBarLi>
                </NavBarUl>
            </NavBarWrapper>
        </NavBarContainer>
    )

}

export default NavBar;