import {NavList} from "../../molecules/navList";
import {LogoInline} from "../../atoms";
import * as S from './styles'

export const Header = props => {
    const pageRefs = props.pageRefs
    return (
        <S.Container>
            <S.LogoWrapper>
                <LogoInline onClick={() => props.scrollTo(pageRefs.landing)}/>
            </S.LogoWrapper>
            <S.NavigationWrapper>
                <NavList
                    scrollTo={props.scrollTo}
                    links={[
                        {name: "Location", nav: pageRefs.location},
                        {name: "Design", nav: pageRefs.design},
                        {name: "Amenities", nav: pageRefs.amenities},
                        {name: "Availability", nav: pageRefs.availability},
                        {name: "History", nav: pageRefs.history},
                        {name: "Agencies", nav: pageRefs.agency},
                        {name: "Enquiry", nav: pageRefs.enquire},
                    ]}
                >
                </NavList>
            </S.NavigationWrapper>
        </S.Container>
    );
}