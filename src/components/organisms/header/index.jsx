import {NavList} from "../../molecules/navList";
import {LogoInline} from "../../atoms";
import * as S from './styles'
export const Header = props => {
    return(
        <S.Container>
            <LogoInline />
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
        </S.Container>
    );
}