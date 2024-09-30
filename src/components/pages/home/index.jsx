import React, { forwardRef, memo } from "react";
import { home as CONST } from './constants'
import { Paragraph, Subheading } from "../../atoms";
import { ParallaxImg } from '../../molecules'
import { Page } from "../../templates";
import {
    CustomButton,
    CustomParagraph,
    CustomSubheading,
    ImgWrapper,
    Pane,
    StyledColumn,
    StyledSplitScreen
} from "./styles";

const Home = memo(
    forwardRef(
        function ({id, onDiscoverClick}, ref) {
            const assets = CONST.assets
            return (
                <Page
                    pageRef={ref}
                    $fullScreen
                >
                    <StyledSplitScreen>
                        <Pane id={'left-pane'} >
                            <ImgWrapper >
                                <ParallaxImg image={assets.hero} />
                            </ImgWrapper >
                        </Pane >
                        <Pane id={'right-pane'} >
                            <StyledColumn >
                                <CustomSubheading>
                                    {CONST.headingTxt}
                                </CustomSubheading >
                                <CustomParagraph>
                                    {CONST.paragraphTxt}
                                </CustomParagraph >
                                <CustomButton onClick={onDiscoverClick} >
                                    {CONST.buttonTxt}
                                </CustomButton >
                            </StyledColumn >
                        </Pane >
                    </StyledSplitScreen >
                </Page >
            );
        }
    )
);

export default Home;


