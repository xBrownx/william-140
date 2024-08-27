import {StyledContainer} from "./styles";

export const Container = props => {
    return <StyledContainer ref={props.pageRef} {...props}>{props.children}</StyledContainer>;
}