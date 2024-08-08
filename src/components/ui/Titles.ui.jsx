import React from 'react';
import styled from "styled-components";
import {HeadingOne, HeadingThree} from "../styles/Typography.styled";

const ContentPadding = styled.div`
    padding: 0 91px 0 91px;
`

export const TitleVariantOne = (props) => {
    return(
        <ContentPadding>
            <HeadingOne $secondary>{props.lineOne}</HeadingOne>
            <HeadingOne $secondary>{props.lineTwo}</HeadingOne>
        </ContentPadding>
    );
}

export const TitleVariantTwo = (props) => {
      return(
        <ContentPadding>
            <HeadingThree $secondary>{props.subHeading}</HeadingThree>
            <HeadingOne $secondary>{props.lineOne}</HeadingOne>
            <HeadingOne $secondary>{props.lineTwo}</HeadingOne>
        </ContentPadding>
    );
}