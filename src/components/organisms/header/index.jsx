import { NavList } from "../../molecules/navList";
import { LogoInline } from "../../atoms";
import logo from '../../../assets/svg/Header-Logo.svg';
import { Image } from '../../atoms'
import { header } from './constants'
import { memo, useState } from 'react'
import {
    Container,
    CustomColumn,
    CustomHeading,
    CustomRow,
    IconWrapper,
    MobileMenuContainer,
    MobileUl,
    Wrapper
} from "./styles";
import { useMobile } from "../../../hooks/useMobile";

export const Header = memo(
    function Header(props) {
        const pageRefs = props.pageRefs;
        const links = header.links.map((link) => {
            return { ...link, route: pageRefs[link.key] }
        })

        const isMobile = useMobile();
        const [isShowMenu, setIsShowMenu] = useState(false);

        const scrollTo = (page) => {
            props.scrollTo(page)
            setIsShowMenu(false);
        }
        return (
            <>
                <Container>
                    <Wrapper>
                        <img
                            src={logo}
                            alt={""}
                            onClick={() => props.scrollTo(pageRefs.landing)}
                        />
                    </Wrapper>
                    <Wrapper>
                        <NavList
                            $scrollTo={props.scrollTo}
                            $links={links}
                        >
                        </NavList>
                        <IconWrapper>
                            <img
                                src={"https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/icon-menu.svg"}
                                alt={""}
                                onClick={() => setIsShowMenu(true)}
                            />
                        </IconWrapper>
                    </Wrapper>
                </Container>
                {isMobile &&
                    <MobileMenuContainer $visible={isShowMenu}>
                        <CustomColumn
                            $paddingTop={16}
                            $gap={32}
                            $justifyEnd
                        >
                            <CustomRow>

                                <img
                                    src={logo}
                                    alt={""}
                                    onClick={() => props.scrollTo(pageRefs.landing)}
                                    height={11}
                                />

                                <img
                                    src={"https://fulton-assets.s3.ap-southeast-2.amazonaws.com/images/icon-exit.svg"}
                                    alt={""}
                                    width={32}
                                    height={32}
                                    onClick={() => setIsShowMenu(false)}
                                />
                            </CustomRow>
                            <MobileUl>
                                <CustomHeading onClick={() => scrollTo(pageRefs.location)} >
                                    Location
                                </CustomHeading>
                                <CustomHeading onClick={() => scrollTo(pageRefs.design)} >
                                    Design
                                </CustomHeading>
                                <CustomHeading onClick={() => scrollTo(pageRefs.amenities)} >
                                    Amenities
                                </CustomHeading>
                                <CustomHeading onClick={() => scrollTo(pageRefs.availability)} >
                                    Availability
                                </CustomHeading>
                                <CustomHeading onClick={() => scrollTo(pageRefs.history)} >
                                    History
                                </CustomHeading>
                                <CustomHeading onClick={() => scrollTo(pageRefs.agency)} >
                                    Agency
                                </CustomHeading>
                                <CustomHeading $variant onClick={() => scrollTo(pageRefs.enquire)} >
                                    Enquiry
                                </CustomHeading>
                            </MobileUl>
                        </CustomColumn>
                    </MobileMenuContainer>
                }</>
        );
    }
);