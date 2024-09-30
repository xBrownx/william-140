import { NavList } from "../../molecules/navList";
import { LogoInline } from "../../atoms";
import { header } from './constants'
import { memo } from 'react'
import { Container, Wrapper } from "./styles";

export const Header = memo(
    function Header(props) {
        const pageRefs = props.pageRefs;
        const links = header.links.map((link) => {
            return {...link, route: pageRefs[link.key]}
        })
        return (
            <Container>
                <Wrapper>
                    <LogoInline onClick={() => props.scrollTo(pageRefs.landing)} />
                </Wrapper>
                <Wrapper>
                    <NavList
                        $scrollTo={props.scrollTo}
                        $links={links}
                    >
                    </NavList>
                </Wrapper>
            </Container>
        );
    }
);