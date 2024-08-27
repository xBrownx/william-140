import React, { forwardRef } from 'react';
import { _galleryAssets } from "../../assets";
import { SlideCarousel } from "../molecules/";
import { Page } from "../templates";

export const Gallery = forwardRef(function ({ id }, ref) {
        return (
            <Page
                id={id}
                pageRef={ref}
                // paddingInlineBlock={{block: 64}}
            >
                <SlideCarousel images={_galleryAssets.carousel}/>
            </Page>
        );
    })
;

