import { StyledButton } from "./styles";

export const Button = props => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};
