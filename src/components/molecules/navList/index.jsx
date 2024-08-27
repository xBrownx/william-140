import {StyledUl} from "./styled";
import {StyledLink} from "../../atoms/link/styles";
import {Button} from "../../atoms";

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
                        <Button $secondary>
                            {link.txt}
                        </Button>
                    }
                </StyledLink>
            ))}
        </StyledUl>
    );
}