import React from 'react';
import {PageSection} from "../../components/styles/SectionContainer.styled";
import {PageContainerStyled} from "../../components/styles/PageContainer.styled";
import {TitleVariantOne} from "../../components/ui/Titles.ui";
import {CarouselComponent} from "./components/Carousel.component";
import {ContentContainer, ContentWrapper, ParagraphWrapper} from "../../components/styles/Content.ui";
import {ParagraphOne} from "../../components/styles/Typography.styled";

function Carousel(props) {

    return (
        <PageSection $secondary ref={props.pageRef.carousel}>
            <PageContainerStyled>
                <ContentContainer>
                    <TitleVariantOne
                        lineOne={"Everyday is an"}
                        lineTwo={"experience"}
                    />
                    <CarouselComponent/>
                    <ContentWrapper>
                        <ParagraphWrapper>
                            <ParagraphOne $secondary>
                                The essence of Melbourne's vibrant lifestyle, offering a
                            </ParagraphOne>
                            <ParagraphOne $secondary>
                                perfect blend of convenience, culture, and connectivity.
                            </ParagraphOne>
                        </ParagraphWrapper>
                    </ContentWrapper>
                </ContentContainer>
            </PageContainerStyled>
        </PageSection>
    );
}

export default Carousel;