import {StyledImg} from "./styles";

export const Image = props => {
    return <StyledImg src={props.src} alt={props.alt} {...props} />
}
