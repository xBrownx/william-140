import React, { forwardRef, useState, memo } from 'react';
import { amenities as CONST } from './constants'
import { Column, Container, FadeCarousel, PageTitle, SplitScreen } from "../../molecules";
import { AmenitiesList, AmenitiesVideo } from '../../organisms';
import { Page } from "../../templates";
import { CustomSplitScreen, VideoContainer } from "./styles";

const Amenities = memo(
    forwardRef(
        function ({id,}, ref) {
            return (
                <Page
                    pageRef={ref}
                    $fullScreen
                    $bgSecondary
                >
                    <CustomSplitScreen $padding>
                        <Container >
                            <Column>
                                <PageTitle $secondary>
                                    {CONST.subheadingTxt}
                                    {CONST.headingTxt}
                                </PageTitle>
                                <AmenitiesList />
                            </Column>
                        </Container>
                        <VideoContainer>
                            <AmenitiesVideo src={CONST.assets.video.src} />
                        </VideoContainer>
                    </CustomSplitScreen>
                </Page>

            );
        }
    )
);

export default Amenities;





