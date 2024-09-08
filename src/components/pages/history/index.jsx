import React, { forwardRef, memo } from 'react';
import { history as CONST } from './constants'
import { PageTitle } from "../../molecules";
import { HistoryVideo } from "../../organisms";
import { Page } from "../../templates";



const History = memo(
    forwardRef(
        function ({id,}, ref) {
            return (
                <Page
                    pageRef={ref}
                    paddingInlineBlock={{block: 90}}
                >
                    <PageTitle
                        $row
                        $displayEnd
                        paddingInlineBlock={{inline: 160}}
                    >
                        {CONST.subheadingTxt}
                        {CONST.headingTxt}
                        {CONST.paragraphTxt}
                    </PageTitle>
                    <HistoryVideo assets={CONST.assets}/>
                </Page>
            );
        }
    )
);

export default History;
