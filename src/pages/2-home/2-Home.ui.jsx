import {Background, BackgroundContainer, ContentContainer, ContentWrapper} from "./2-Home.styled";
import React from "react";
import {HeadingOne, ParagraphOne} from "../../components/styles/Typography.styled";
import {TextButton} from "../../components/styles/Buttons.styled";

export const HomeBackground = () => {
    return (
        <BackgroundContainer>
            <Background/>
        </BackgroundContainer>
    );
}

const Title = () => {
    return (
        <ContentWrapper>
            <HeadingOne>Spaces for</HeadingOne>
            <HeadingOne>our tenants</HeadingOne>
            <HeadingOne>to thrive</HeadingOne>
        </ContentWrapper>
    );
}

const Paragraph = () => {
    return (
        <ContentWrapper>
            <ParagraphOne>Presenting a range of fully fitted tenancies available to lease.</ParagraphOne>
            <ParagraphOne>These opportunities, offer stunning views and natural light with</ParagraphOne>
            <ParagraphOne>access to the building’s first class facilities and amenities.</ParagraphOne>
        </ContentWrapper>
    );
}

export const Content = () => {
    return (
        <ContentContainer>
            <Title/>
            <Paragraph/>
            <ContentWrapper>
            <TextButton $secondary $large>Discover Availability</TextButton>
            </ContentWrapper>
        </ContentContainer>
    );
}