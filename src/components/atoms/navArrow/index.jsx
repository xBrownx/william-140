import { ReactComponent as Arrow } from '../../../assets/icons/Up-Arrow.svg'
import {Wrapper} from "./styles";

export const NavArrow = props => {
    return(
        <Wrapper {...props}>
            <Arrow onClick={props.onClick}/>
        </Wrapper>
    );
}