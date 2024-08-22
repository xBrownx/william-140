import { Container } from './styles'
import { Subheading, Heading, Paragraph } from '../../atoms/'


export const Title = props => {
    const [subheading, heading, paragraph] = props.children;

    return (
        <Container {...props}>
            <Subheading {...props}>
                {subheading}
            </Subheading>
            <Heading {...props}>
                {heading}
            </Heading>
            {paragraph &&
                <IndentParagraph {...props}>
                    {paragraph}
                </IndentParagraph>
            }
        </Container>
    );
}
