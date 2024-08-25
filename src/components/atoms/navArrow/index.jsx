import { ReactComponent as Arrow } from '../../../assets/svg/arrow.svg'
import {Wrapper} from "./styles";

export const NavArrow = props => {
    return(
        <Wrapper {...props}>
            <Arrow onClick={props.onClick}/>
        </Wrapper>
    );
}