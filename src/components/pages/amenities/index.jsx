import React, { forwardRef, useState, memo } from 'react';
import { amenities as CONST } from './constants'
import { Column, Container, FadeCarousel, PageTitle, SplitScreen } from "../../molecules";
import { AmenitiesList, AmenitiesVideo } from '../../organisms';
import { Page } from "../../templates";
import { CustomSplitScreen, Pane, VideoContainer } from "./styles";

const Amenities = memo(
    forwardRef(
        function ({ id, }, ref) {
            return (
                <Page
                    pageRef={ref}
                    $fullScreen
                    $bgSecondary
                >
                    <CustomSplitScreen $padding>
                        <Pane>
                            <Container>
                                <Column>
                                    <PageTitle $secondary>
                                        {CONST.subheadingTxt}
                                        {CONST.headingTxt}
                                    </PageTitle>
                                    <AmenitiesList />
                                </Column>
                            </Container>
                        </Pane>
                        <Pane>
                            <VideoContainer>
                                <AmenitiesVideo src={CONST.assets.video.src} />
                            </VideoContainer>
                        </Pane>
                    </CustomSplitScreen>
                </Page>

            );
        }
    )
);

export default Amenities;





