import React, {useEffect} from 'react';
import {ReactComponent as Title} from "../../assets/old/Title.svg";
import {TextButton} from "../../components/styles/Buttons.styled";
import {NavItems, NavBarLi, NavBarTitleWrapper, NavBarUl, NavBarWrapper, NavBarContainer} from "../../components/styles/NavBar.styled";
import {motion} from "framer-motion";

function NavBar(props) {

    const navItems = NavItems(props.pageRefs)
    const enquireRef = props.pageRefs.enquiryRef.current;

    return (
        <NavBarContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{ type: "spring", duration: 2, delay: 1.5 }}
        >
            <NavBarWrapper>

                <NavBarTitleWrapper>
                    <Title onClick={props.toTop}/>
                </NavBarTitleWrapper>

                <NavBarUl>
                    {navItems.map(item => {
                        return (
                            <NavBarLi
                                onClick={() => {
                                    item.pageRef.scrollIntoView({behavior: "smooth"})
                                }}>
                                {item.name}
                            </NavBarLi>
                        )
                    })}

                    <NavBarLi onClick={() => enquireRef.scrollIntoView({behavior: "smooth"})}>
                        <TextButton variant={true}>Enquire</TextButton>
                    </NavBarLi>
                </NavBarUl>
            </NavBarWrapper>
        </NavBarContainer>
    )

}

export default NavBar;