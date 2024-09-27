import React, { memo } from 'react';
import { Container } from './styles';
import { constants as CONST } from "./constants";
import { PageTitle } from "../../molecules";

function ThirdSpace(props) {
    return (
        <Container {...props}>
            <PageTitle $variant $noPStyle padding={{ top: 47, left: 64 }}>
                {CONST.subheadingTxt}
                {CONST.headingTxt}

            </PageTitle>
        </Container>
    );
}


export default memo(ThirdSpace);
