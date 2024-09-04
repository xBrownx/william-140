import { ReactComponent as FooterLogo } from "../../../assets/svg/Footer-Logo.svg";
import React, { memo } from "react";
import { CentreDiv, Container, LeftDiv, RightDiv, StyledText, Wrapper } from "./styles";

export const Footer = memo(
    function Footer() {
        return (
            <Container>
                <Wrapper>
                    <LeftDiv>
                        <StyledText>
                            Privacy Policy
                        </StyledText>
                    </LeftDiv>
                    <CentreDiv>
                        <FooterLogo />
                    </CentreDiv>
                    <RightDiv>
                        <StyledText>
                            Designed and developed by replika
                        </StyledText>
                    </RightDiv>
                </Wrapper>
            </Container>
        );
    }
);
