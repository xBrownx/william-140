import React, { memo } from 'react';
import { CarouselWrapper, Container } from './styles';
import { constants as CONST } from "./constants";
import { PageTitle, SlideCarousel } from "../../molecules";
import { _galleryAssets } from "../../../assets";

function ThirdSpace(props) {
    return (
        <Container {...props}>
            <PageTitle $noPStyle padding={{ top: 47, left: 160, bottom: 16 }}>
                {CONST.subheadingTxt}
                {CONST.headingTxt}
            </PageTitle>
            <CarouselWrapper>
                <SlideCarousel images={CONST.carousel} />
            </CarouselWrapper>

        </Container>
    );
}


export default memo(ThirdSpace);
