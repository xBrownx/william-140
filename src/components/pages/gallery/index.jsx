import React, { forwardRef, memo } from 'react';
import { _galleryAssets } from "../../../assets";
import { SlideCarousel } from "../../molecules";
import { Page } from "../../templates";

const Gallery = memo(
    forwardRef(
        function ({id}, ref) {
            return (
                <Page
                    id={id}
                    pageRef={ref}
                >
                    <SlideCarousel
                        images={_galleryAssets.carousel}
                    />
                </Page>
            );
        }
    )
);

export default Gallery;
