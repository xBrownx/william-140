import { NavList } from "../../molecules/navList";
import { LogoInline } from "../../atoms";
import * as S from './styles'
import { header } from '../../../constants'
import { memo } from 'react'

export const Header = memo(
    function Header(props) {
        const pageRefs = props.pageRefs;
        const links = header.links.map((link) => {
            return {...link, route: pageRefs[link.key]}
        })
        return (
            <S.Container>
                <S.LogoWrapper>
                    <LogoInline onClick={() => props.scrollTo(pageRefs.landing)} />
                </S.LogoWrapper>
                <S.NavigationWrapper>
                    <NavList
                        scrollTo={props.scrollTo}
                        links={links}
                    >
                    </NavList>
                </S.NavigationWrapper>
            </S.Container>
        );
    }
);