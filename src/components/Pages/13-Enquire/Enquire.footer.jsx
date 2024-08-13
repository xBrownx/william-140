import React from "react";
import {ReactComponent as FooterLogo} from "../../../assets/svg/140W_Logo_RGB_Stacked_White.svg";
import styled from "styled-components";

export const EnquireFooter = () => {

    return (
        <Container>
            <Wrapper>

                <LeftDiv>
                    <StyledText>Privacy Policy</StyledText>
                </LeftDiv>

                <CentreDiv>
                    <FooterLogo/>
                </CentreDiv>

                <RightDiv>
                    <StyledText>By REPLIKA</StyledText>
                </RightDiv>

            </Wrapper>
        </Container>
    );
}

const Container = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    width: 100%;
    align-items: end;
    padding: 0 0 var(--height-32px);
    z-index: 0;
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
`

const LeftDiv = styled.div`
    flex: 1;
    padding: 0 0 0 var(--width-32px)
`
const CentreDiv = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
`
const RightDiv = styled.div`
    flex: 1;
    display: flex;
    padding: 0 var(--width-32px) 0 0;
    justify-content: end;
`

const StyledText = styled.p`
    margin: 0;
    padding: 0;
    font-size: var(--font-size-14px);
    font-weight: 700;
    font-family: var(--font-family-secondary-light), serif;
    color: #fff;
`