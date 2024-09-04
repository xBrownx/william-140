import { StyledUl } from "./styled";
import { Link } from "../../atoms/";
import { Button } from "../../atoms";
import { memo } from "react";

export const NavList = memo(
    function NavList(props) {
        const links = props.links
        return (
            <StyledUl {...props}>
                {links.map((link) => (
                    <Link
                        $nav
                        key={link.key}
                        onClick={() => props.scrollTo(link.route)}
                    >
                        {link.type === "link" ? link.txt :
                            <Button $secondary>
                                {link.txt}
                            </Button>
                        }
                    </Link>
                ))}
            </StyledUl>
        );
    }
);