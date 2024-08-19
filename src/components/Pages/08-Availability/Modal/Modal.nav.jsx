import React from 'react';
import styled from 'styled-components';
import * as STYLED from "../../../Styled/GlobalStyles"
import {ReactComponent as Arrow} from "../../../../assets/icons/Arrow.svg";

export const ModalNav = () => {
    return (
        <Container>
            <UpArrow><Arrow /></UpArrow>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Button/>
            <Arrow />
        </Container>
    );
};

const Container = styled.div`
    ${STYLED.flexColumn};
    height: 100%;
    gap: 16px;
    padding: 0 48px;
    justify-content: center;
`

const Button = styled.div`
    flex: 1;
    border: 1px solid white;
    ${STYLED.imgBorderRadius}
    width: 64px;
    max-height: 64px;
`

const UpArrow = styled.div`
    transform: rotate(180deg);
`

const DownArrow = styled.div`

`




