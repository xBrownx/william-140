import React, { forwardRef, memo } from 'react';
import { design as CONST } from './constants'
import { PageTitle } from "../../molecules";
import { DesignVideo } from "../../organisms";
import { Page } from "../../templates";
import { CustomContainer } from "./styles";

const Design = memo(
    forwardRef(
        function ({ id, }, ref) {
            return (
                <Page
                    pageRef={ref}
                    $fullScreen
                    $bgSecondary
                >
                    <CustomContainer>
                        <PageTitle
                            $secondary
                            paddingInlineBlock={{ inline: 160 }}
                        >
                            {CONST.subheadingTxt}
                            {CONST.headingTxt}
                        </PageTitle>
                        <DesignVideo
                            tour={CONST.tour}
                            menuItems={CONST.menuItems}
                        />
                    </CustomContainer>
                </Page>
            );
        }
    )
);

export default Design;

