import {Wrapper, StyledButton} from "./styles";
import {ReactComponent as Arrow } from '../../../assets/icons/Down-Arrow.svg'

export const ArrowButton = props => {
  return <Wrapper {...props}><StyledButton {...props}><Arrow /></StyledButton></Wrapper>;
};