import { Container } from './styles'
import { Subheading, Heading, Paragraph } from '../../atoms/'


export const Title = props => {
    const [subheading, heading, paragraph] = props.children;

    return (
        <Container {...props}>
            <Subheading>
                {subheading}
            </Subheading>
            <Heading>
                {heading}
            </Heading>
            {paragraph &&
                <Paragraph>
                    {paragraph}
                </Paragraph>
            }
        </Container>
    );
}