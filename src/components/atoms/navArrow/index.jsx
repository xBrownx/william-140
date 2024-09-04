import { ReactComponent as Arrow } from '../../../assets/icons/Up-Arrow.svg'
import {Wrapper} from "./styles";
import { memo } from "react";

export const NavArrow = memo(function NavArrow(props) {
    return(
        <Wrapper {...props}>
            <Arrow onClick={props.onClick}/>
        </Wrapper>
    );
});