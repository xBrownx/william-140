import { StyledParagraph } from './styles';
import { memo } from "react";

export const Paragraph = memo(function Paragraph(props) {
    return (
        <StyledParagraph {...props}>
            {props.children}
        </StyledParagraph>
    );
});

