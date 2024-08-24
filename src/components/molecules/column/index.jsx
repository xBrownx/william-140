import { StyledColumn } from './styles';

export const Column = props => {
    return <StyledColumn {...props}>{props.children}</StyledColumn>;
}