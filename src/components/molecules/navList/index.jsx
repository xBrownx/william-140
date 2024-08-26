import {StyledUl} from "./styled";
import {StyledLink} from "../../atoms/link/styles";
import {TextButtonVariant} from "../../Styled/Buttons/Buttons.styled";

export const NavList = props => {
    const links = props.links
    return(
        <StyledUl {...props}>
            {links.map((link) => (
                <StyledLink
                    $nav key={link.key}
                    onClick={() => props.scrollTo(link.route)}
                >
                    {link.type === "link" ? link.txt :
                        <TextButtonVariant>
                            {link.txt}
                        </TextButtonVariant>
                    }
                </StyledLink>
            ))}
        </StyledUl>
    );
}