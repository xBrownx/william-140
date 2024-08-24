import {NavList} from "../../molecules/navList";
import {LogoInline} from "../../atoms";
import * as S from './styles'

export const Header = props => {
    return (
        <S.Container>
            <S.LogoWrapper>
                <LogoInline/>
            </S.LogoWrapper>
            <S.NavigationWrapper>
                <NavList links={[
                    {name: "Location"},
                    {name: "Design"},
                    {name: "Amenities"},
                    {name: "Availability"},
                    {name: "History"},
                    {name: "Agencies"},
                    {name: "Enquiry"},
                ]}>
                </NavList>
            </S.NavigationWrapper>
        </S.Container>
    );
}