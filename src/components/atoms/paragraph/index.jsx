import { StyledParagraph } from './styles';

const Paragraph = props => {
    return <StyledParagraph {...props}>{props.children}</StyledParagraph>;
}

export default Paragraph;
