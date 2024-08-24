import {StyledRow} from "./styles";

export const Row = props => {
    return (
        <StyledRow {...props}>
            {props.children}
        </StyledRow>
    );
}