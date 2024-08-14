import React from 'react';

import * as Styled from "./ColumnTitle.styled";
import {StyledHeading, StyledSubheading} from "../../Styled";

export const ColumnTitle = ({children}) => {
    const [subheading, heading, paragraph] = children;

    return(
        <Styled.Container>
            <StyledSubheading>
                {subheading}
            </StyledSubheading>
            <StyledHeading>
                {heading}
            </StyledHeading>
            <Styled.ParagraphWrapper>
                <Styled.StyledParagraph>
                    {paragraph}
                </Styled.StyledParagraph>
            </Styled.ParagraphWrapper>
        </Styled.Container>
    )
}



