import {
    CloseButtonWrapper, CustomButton, CustomColumn,
    CustomImage,
    CustomSubheading, DetailsWrapper, FloorPlanButton,
    ImageWrapper, LabelWrapper, ModalContentWrapper,
    ModalHeading, ModalParagraph,
    ModalWrapper, StyledLi, StyledUl, TenancyImage,
    TenancyWrapper, ValueWrapper
} from "./styles";

import React, { useEffect } from "react";
import { MobileModalNav } from "./index";
import { Image, Paragraph } from "../../atoms";
import { ModalContainer } from "./styles";
import { _availabilityAssets } from "../../../assets";
import { Column } from "../../molecules";

function MobileModal(props) {
    const lvlData = _availabilityAssets.lvlVectors;

    if (typeof window != 'undefined' && window.document && props.showModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    const activeLvl = props.activeLvl;

    return (
        <>{props.showModal && <ModalContainer $open={props.showModal}>
            <ModalWrapper $open={props.showModal}>
                <CloseButtonWrapper onClick={props.closeModal}>
                    <CustomImage src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg"} />
                </CloseButtonWrapper>
                <MobileModalNav {...props} />
                <ModalHeading>
                    Level {activeLvl.lvl}
                </ModalHeading>
                {lvlData[activeLvl.key].tenancy.length > 1 &&
                    <TenancyWrapper>
                        <CustomSubheading>
                            TENANCY 1
                        </CustomSubheading>
                        <CustomSubheading>
                            TENANCY 2
                        </CustomSubheading>
                    </TenancyWrapper>
                }
                <ImageWrapper>
                    <TenancyImage
                        src={lvlData[activeLvl.key].tenancy[0].src} />
                </ImageWrapper>
                <Details tenancy={lvlData[activeLvl.key].tenancy[0]} />
                <FloorPlanButton>
                    <img
                        src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg"}
                        alt="Tenancy deet" />
                    Floor Plan
                </FloorPlanButton>
            </ModalWrapper>
        </ModalContainer>
        }
        </>
    );
}


const Details = (props) => {
    const tenancy = props.tenancy
    return (
        <DetailsWrapper>
            <CustomColumn>
                {tenancy.paragraph !== undefined &&
                    <StyledUl>
                        <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300}
                                   opacity={1}>
                            {tenancy.paragraph}
                        </Paragraph>
                    </StyledUl>
                }
                <StyledUl>
                    <StyledLi>
                        <LabelWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                Status
                            </Paragraph>
                        </LabelWrapper>
                        <ValueWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}
                                       style={{ color: "#84936E" }}>
                                {tenancy.status}
                            </Paragraph>
                        </ValueWrapper>
                    </StyledLi>
                    <StyledLi>
                        <LabelWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                Floor Area
                            </Paragraph>
                        </LabelWrapper>
                        <ValueWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                {tenancy.floorArea}
                            </Paragraph>
                        </ValueWrapper>
                    </StyledLi>
                    <StyledLi>
                        <LabelWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                Timing
                            </Paragraph>
                        </LabelWrapper>
                        <ValueWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                {tenancy.timing}
                            </Paragraph>
                        </ValueWrapper>
                    </StyledLi>
                    <StyledLi>
                        <LabelWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                Fitout
                            </Paragraph>
                        </LabelWrapper>
                        <ValueWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                {tenancy.fitout}
                            </Paragraph>
                        </ValueWrapper>
                    </StyledLi>
                    <StyledLi>
                        <LabelWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                Lease Type
                            </Paragraph>
                        </LabelWrapper>
                        <ValueWrapper>
                            <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300} opacity={1}>
                                {tenancy.leaseType}
                            </Paragraph>
                        </ValueWrapper>
                    </StyledLi>
                </StyledUl>
                {tenancy.furtherDetails !== undefined &&
                    <StyledUl>
                        {tenancy.furtherDetails.map(item => {
                            return (
                                <StyledLi>
                                    <LabelWrapper>
                                        <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300}
                                                   opacity={1}>
                                            {item.label}
                                        </Paragraph>
                                    </LabelWrapper>
                                    <ValueWrapper>
                                        <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300}
                                                   opacity={1}>
                                            {item.value}
                                        </Paragraph>
                                    </ValueWrapper>
                                </StyledLi>
                            );
                        })}
                    </StyledUl>
                }

            </CustomColumn>
        </DetailsWrapper>
    );
}

export default MobileModal;