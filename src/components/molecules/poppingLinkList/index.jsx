import { memo } from "react";
import { StyledUl, StyledLi } from "./styles";
import { PoppingLink } from "../poppingLink";


export const PoppingLinkList = memo(
    function PoppingLinkList(props) {
        return (
            <StyledUl>
                {props.items.map((item, key) => {
                    return (
                        <StyledLi key={item.title}>
                            <PoppingLink
                                shotIdx={key}
                                currentShot={props.currentShot}
                                setShotChange={props.setShotChange}
                            >
                                {item.title}
                            </PoppingLink>
                        </StyledLi>
                    );
                })}
            </StyledUl>
        );
    }
);