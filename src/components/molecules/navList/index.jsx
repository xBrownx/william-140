import {StyledUl} from "./styled";
import {StyledLink} from "../../atoms/link/styles";

export const NavList = props => {
    const links = props.links
    return(
        <StyledUl {...props}>
            {links.map((link) => (
                <StyledLink
                    $nav key={link.name}
                    onClick={() => props.scrollTo(link.nav)}
                >
                    {link.name}
                </StyledLink>
            ))}
        </StyledUl>
    );
}