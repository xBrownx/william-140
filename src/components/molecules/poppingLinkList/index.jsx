import { memo } from "react";
import { StyledUl, StyledLi } from "./styles";
import { PoppingLink } from "../poppingLink";


export const PoppingLinkList = memo(
    function PoppingLinkList(props) {
        return (
            <StyledUl>
                {props.items.map(item => {
                    return (
                        <StyledLi key={item.title}>
                            <PoppingLink>{item.title}</PoppingLink>
                        </StyledLi>
                    );
                })}
            </StyledUl>
        );
    }
);