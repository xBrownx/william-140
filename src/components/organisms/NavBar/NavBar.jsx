import React from 'react';
import {motion} from "framer-motion";
import {ReactComponent as Title} from "../../../assets/svg/Title.svg";
import {ReactComponent as Menu} from "../../../assets/icons/00-Nav-Menu.svg";
import {TextButtonVariant} from "../../Styled/Buttons/Buttons.styled";
import * as Styled from "./NavBar.styled";
import {NavItems} from "./NavBar.constants";
import {Header} from "../header";



const NavBar = ({pageRefs}) => {

    const navItems = NavItems({mainRefs: pageRefs})

    return (<Header />);

        // <Styled.NavBarContainer
        //     id="nav-bar-container"
        //     as={motion.div}
        //     initial={{opacity: 0}}
        //     animate={{opacity: 1}}
        //     transition={{type: "spring", duration: 2, delay: 1.5}}
        // >
        //     <Styled.NavBarWrapper id="nav-bar-wrapper">
        //         <Styled.NavBarTitleWrapper id="nav-title-bar-wrapper">
        //             <Title onClick={() => {
        //             }}/>
        //         </Styled.NavBarTitleWrapper>
        //         <Styled.MenuWrapper id="menu-wrapper">
        //             <Menu/>
        //         </Styled.MenuWrapper>
        //         <Header />
        //         {/*<Styled.NavBarUl id="nav-bar-ul">*/}
        //         {/*    {navItems.map((item, i) => {*/}
        //         {/*        return (*/}
        //         {/*            <Styled.NavBarLi*/}
        //         {/*                key={i}*/}
        //         {/*                onClick={() => {*/}
        //         {/*                    item.pageRef.current.scrollIntoView({behavior: "smooth"})*/}
        //         {/*                }}>*/}
        //         {/*                {item.name}*/}
        //         {/*            </Styled.NavBarLi>*/}
        //         {/*        )*/}
        //         {/*    })}*/}
        //
        //         {/*    <Styled.NavBarLi onClick={() => pageRefs.enquire.current.scrollIntoView({behavior: "smooth"})}>*/}
        //         {/*        <TextButtonVariant>Enquire</TextButtonVariant>*/}
        //         {/*    </Styled.NavBarLi>*/}
        //         {/*</Styled.NavBarUl>*/}
        //     </Styled.NavBarWrapper>
        // </Styled.NavBarContainer>
    // )
}


export default NavBar;