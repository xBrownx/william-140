import { Container } from './styles'
import { Subheading, Heading } from '../../atoms/'
import { IndentParagraph } from '../indentParagraph'


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
