import { ReactComponent as FooterLogo } from "../../../assets/svg/Footer-Logo.svg";
import React, { memo } from "react";
import { CentreDiv, Container, CustomImage, LeftDiv, MobileWrapper, RightDiv, StyledText, Wrapper } from "./styles";
import { Image } from "../../atoms";
import { useMobile } from "../../../hooks/useMobile";

export const Footer = memo(
    function Footer() {
        const isMobile = useMobile();
        return (
            <Container>
                <Wrapper>
                    {!isMobile && <LeftDiv>
                        <StyledText>
                            Privacy Policy
                        </StyledText>
                    </LeftDiv>
                    }
                    <CentreDiv>
                        <FooterLogo />
                    </CentreDiv>
                    {!isMobile && <RightDiv>
                        <Image
                            src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/replika-logo.png"} />
                    </RightDiv>
                    }
                </Wrapper>
                {isMobile && <MobileWrapper>
                    <StyledText>
                        Privacy Policy
                    </StyledText>
                    <CustomImage src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/replika-logo.png"} />
                </MobileWrapper>
                }
            </Container>
        );
    }
);
