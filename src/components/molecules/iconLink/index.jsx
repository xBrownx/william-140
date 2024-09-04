import { Wrapper } from './styles'
import { memo } from "react";

export const IconLink = memo(
    function IconLink(props) {
        return (
            <Wrapper{...props}>
                <props.Icon />
                {props.children}
            </Wrapper>
        );
    }
);