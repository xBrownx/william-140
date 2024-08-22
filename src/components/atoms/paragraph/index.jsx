import { StyledParagraph } from './styles';

export const Paragraph = props => {
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
}

