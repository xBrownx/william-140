import React from 'react';
import styled from "styled-components";
import {HeadingOne, HeadingThree} from "./styles/Typography.styled";

const ContentPadding = styled.div`
    padding: 0 91px 0 91px;
`

export const TitleVariantOne = ({children}) => {
    return(
        <ContentPadding>
            <HeadingOne $secondary>
                {children}
            </HeadingOne>
        </ContentPadding>
    );
}

export const TitleVariantTwo = ({children}) => {
      return(
        <ContentPadding>
            <HeadingThree $secondary>{children}</HeadingThree>
        </ContentPadding>
    );
}