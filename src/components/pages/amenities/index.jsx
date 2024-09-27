import React, { forwardRef, useState, memo } from 'react';
import { amenities as CONST } from './constants'
import { Column, Container, FadeCarousel, PageTitle, SplitScreen } from "../../molecules";
import { AmenitiesList, AmenitiesVideo } from '../../organisms';
import { Page } from "../../templates";

const Amenities = memo(
    forwardRef(
        function ({id,}, ref) {
            return (
                <Page
                    pageRef={ref}
                    $fullScreen
                    $bgSecondary
                >
                    <SplitScreen $padding>
                        <Container >
                            <Column>
                                <PageTitle $secondary>
                                    {CONST.subheadingTxt}
                                    {CONST.headingTxt}
                                </PageTitle>
                                <AmenitiesList />
                            </Column>
                        </Container>
                        <Container
                            $fillSize
                            padding={{left: 16}}
                        >
                            <AmenitiesVideo src={CONST.assets.video.src} />
                        </Container>
                    </SplitScreen>
                </Page>

            );
        }
    )
);

export default Amenities;





