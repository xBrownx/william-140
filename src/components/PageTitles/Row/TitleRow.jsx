import styled from "styled-components";
import {StyledHeading, StyledSubheading} from "../../Styled";
import {media} from '../../Styled/Media'
import * as Padding from '../../Styled/Padding';
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
    gap: var(--width-32px);
    
    ${media.md`
        flex-direction: column;
        gap: 0;
        ${Padding.x16Mobile};
    `};
`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-width: var(--width-640px);
    
    ${media.md`
        width: 100%;
    `};
`

const ParagraphWrapper = styled.div`
    border-left: 1px solid var(--color-primary-4);
    margin: 0;
    padding: 0 0 0 var(--width-32px);
    display: flex;
    align-items: end;
    justify-content: end;
    
    ${media.md`
        padding: 0 16px 16px 16px;
        margin: 16px 0 0 0;
        width: 100%;
        max-width: 100%;
        box-sizing: border-box;
        overflow: hidden;
        justify-content: start;
    `}
`

const StyledParagraph = styled.p`
    margin: 0;
    padding: 0;
    opacity: 0.7;
    color: #164A49;
    font-size: var(--font-size-18px);
    font-family: var(--font-fmaily-secondary-light), serif;
    line-height: var(--line-height-18px);
    
    ${media.md`
        padding: 0;
        width: 100%;
        max-width: 100%;
        font-size: 1rem;
        line-height: 1.1rem;
    `}
`