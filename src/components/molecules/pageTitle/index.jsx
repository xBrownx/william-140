import { Container, Wrapper } from './styles'
import { Subheading, Heading } from '../../atoms/'
import { IndentParagraph } from '../indentParagraph'
import { memo } from "react";

export const PageTitle = memo(
    function PageTitle(props) {
        const [subheading, heading, paragraph] = props.children;

        return (
            <Container {...props}>
                <Wrapper {...props}>
                    <Subheading {...props}>
                        {subheading}
                    </Subheading>
                    <Heading {...props}>
                        {heading}
                    </Heading>
                </Wrapper>
                {paragraph &&
                    <IndentParagraph {...props}>
                        {paragraph}
                    </IndentParagraph>
                }
            </Container>
        );
    }
);