import React, {forwardRef} from "react";
import img from "../../assets/img/02-Home-Final.jpg";
import {TextButtonVariant} from "../Styled/Buttons/Buttons.styled";
import {ParallaxImg} from "../organisms/ParallaxComponents";
import * as Styles from "../Pages/02-Home/Home.styled";
import * as CONSTANTS from '../Pages/02-Home/Home.constants'
import {HomeImg as Image} from "../Styled/Images";
import {Page} from "../templates/page";
import {SplitScreen, Column} from '../molecules'
import {Paragraph, Subheading} from "../atoms";

export const Home = forwardRef(function ({id, onDiscoverClick}, ref) {
    return (
        <Page $fullScreen>
            <SplitScreen $padding>
                <Styles.LeftContainer id="home-left">
                    <Image>
                        <ParallaxImg src={img} alt={""}/>
                    </Image>
                </Styles.LeftContainer>
                <Column
                    $centreY
                    paddingInlineBlock={{inline: 16}}
                    gap={32}
                >
                    <Subheading $variant>
                        {CONSTANTS.headingText}
                    </Subheading>
                    <Paragraph size={36} weight={300}>
                        {CONSTANTS.paragraphText}
                    </Paragraph>
                    <TextButtonVariant
                        $secondary
                        onClick={onDiscoverClick}
                    >
                        {CONSTANTS.buttonText}
                    </TextButtonVariant>
                </Column>
            </SplitScreen>
        </Page>
    );
});
