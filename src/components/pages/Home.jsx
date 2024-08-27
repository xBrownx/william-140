import React, { forwardRef } from "react";
import { home as CONST } from '../../constants'
import { Button, Paragraph, Subheading } from "../atoms";
import { SplitScreen, Column, ParallaxImg } from '../molecules'
import { Page } from "../templates";
import { ImgWrapper } from "../molecules/parallaxImage/styles";


export const Home = forwardRef(function ({id, onDiscoverClick}, ref) {
    const assets = CONST.assets
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
                        {CONST.headingTxt}
                    </Subheading>
                    <Paragraph size={36} weight={300}>
                        {CONST.paragraphTxt}
                    </Paragraph>
                    <Button
                        onClick={onDiscoverClick}
                    >
                        {CONST.buttonTxt}
                    </Button>
                </Column>
            </SplitScreen>
        </Page>
    );
});
