import React, {forwardRef} from "react";
import {TextButtonVariant} from "../Styled/Buttons/Buttons.styled";
import { home as CONSTANTS } from '../constants'
import {ImgWrapper} from "../Pages/02-Home/Home.styled";

import { Paragraph, Subheading } from "../atoms";
import { SplitScreen, Column, ParallaxImg } from '../molecules'
import { Page } from "../templates";



export const Home = forwardRef(function ({id, onDiscoverClick}, ref) {
    const assets = CONSTANTS.assets
    return (
        <Page
            pageRef={ref}
            $fullScreen
        >
            <SplitScreen $padding>
                <ImgWrapper
                    width={assets.hero.width}
                    height={assets.hero.height}
                >
                    <ParallaxImg image={assets.hero}/>
                </ImgWrapper>
                <Column
                    $centreY
                    paddingInlineBlock={{inline: 16}}
                    gap={32}
                >
                    <Subheading $variant>
                        {CONSTANTS.headingTxt}
                    </Subheading>
                    <Paragraph size={36} weight={300}>
                        {CONSTANTS.paragraphTxt}
                    </Paragraph>
                    <TextButtonVariant
                        $secondary
                        onClick={onDiscoverClick}
                    >
                        {CONSTANTS.buttonTxt}
                    </TextButtonVariant>
                </Column>
            </SplitScreen>
        </Page>
    );
});
