import {StyledHeading, StyledSubheading} from "./Title.styled";
import styled from "styled-components";

export const TitleRow = ({children}) => {
    const [subheading, heading, paragraph] = children;

    return (
        <Container>
            <TitleWrapper>
                <StyledSubheading>
                    {subheading}
                </StyledSubheading>
                <StyledHeading>
                    {heading}
                </StyledHeading>
            </TitleWrapper>
            <ParagraphWrapper>
                <StyledParagraph>
                    {paragraph}
                </StyledParagraph>
            </ParagraphWrapper>
        </Container>
    )
}

const Container = styled.div`
    padding: 0 var(--width-160px);
    display: flex;
    flex-direction: row;
    gap: var(--width-32px)
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: var(--width-640px);
`

const ParagraphWrapper = styled.div`
    border-left: 1px solid var(--color-primary-4);
    margin: 0;
    padding: 0 0 0 var(--width-32px);
    display: flex;
    align-items: end;
    justify-content: end;
`

const StyledParagraph = styled.p`
    margin: 0;
    padding: 0;
    opacity: 0.7;
    color: #164A49;
    font-size: var(--font-size-18px);
    font-family: var(--font-fmaily-secondary-light), serif;
    line-height: var(--line-height-18px);
`