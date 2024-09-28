import { ReactComponent as FooterLogo } from "../../../assets/svg/Footer-Logo.svg";
import React, { memo } from "react";
import { CentreDiv, Container, LeftDiv, RightDiv, StyledText, Wrapper } from "./styles";
import { Image } from "../../atoms";

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
                        <Image src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/replika-logo.png"} />
                    </RightDiv>
                </Wrapper>
            </Container>
        );
    }
);
