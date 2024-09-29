import React, { memo, useEffect, useState } from "react";
import {
    CarouselWrapper,
    CustomButton,
    DetailsWrapper,
    LabelWrapper,
    NavWrapper,
    StyledLi,
    StyledUl,
    Title,
    ValueWrapper,
    VectorWrapper
} from "./styles";
import { Button, Image, Link, Paragraph } from "../../atoms";
import { Column, ModalPane, ModalNav, Row, SlideCarousel } from "../../molecules";
import { useModalKeyContext, useModalStatusContext } from "../availabilityOverlay/context";
import ThirdSpace from "../thirdSpace";
import ThirdSpaceCarousel from "../thirdSpace/carousel";
import { constants as CONST } from "../thirdSpace/constants";


function AvailabilityModal(props) {

    const [isModalOpen, onLevelClick] = useModalStatusContext();
    const [modalKey, setModalKey] = useModalKeyContext();

    const [tenancy, setTenancy] = useState(0)
    const [TenancyVector, setTenancyVector] = useState(0);
    const activeModal = props.buttons[modalKey];
    const lvlVectors = props.assets.lvlVectors;

    const setTenancyWithVector = (t) => {
        setTenancy(t);
    }
    useEffect(() => {
        if (lvlVectors[modalKey]) {
            setTenancy(lvlVectors[modalKey].tenancy[0])
        }
    }, [modalKey]);

    if (modalKey === null) return;


    return (
        <ModalPane
            $open={isModalOpen}
            closeModal={() => onLevelClick(null)}
        >
            <Row
                paddingInlineBlock={{ inline: 64, block: 22 }}
                gap={64}
            >
                <NavWrapper>
                    <ModalNav buttons={props.buttons} />
                </NavWrapper>
                {modalKey === "l05" ? <ThirdspaceModal /> :
                    <>
                        <Column $fitContent padding={{ top: 64 }} gap={16}>
                            <Title>
                                Level {activeModal.lvl ? activeModal.lvl : "error"}
                            </Title>
                            {lvlVectors[modalKey].tenancy.length > 1 &&

                                <Row gap={16} $fitContent>
                                    <Link
                                        $underlined
                                        $active={tenancy.key === 'tenancy-1'}
                                        onClick={() => setTenancy(lvlVectors[modalKey].tenancy[0])}
                                    >
                                        TENANCY 1
                                    </Link>
                                    <Link
                                        $underlined
                                        $active={tenancy.key === 'tenancy-2'}
                                        onClick={() => setTenancy(lvlVectors[modalKey].tenancy[1])}
                                    >
                                        TENANCY 2
                                    </Link>
                                </Row>
                            }
                            <TenancyDeets tenancy={tenancy} />
                            <CustomButton>
                                <Image
                                    src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/download.svg"}
                                    alt="Tenancy deet" />
                                Floor Plan
                            </CustomButton>
                        </Column>
                        <VectorWrapper>
                            <Image src={tenancy.src} alt="Tenancy deet" />
                        </VectorWrapper>
                    </>}
            </Row>
        </ModalPane>
    );
}

const TenancyDeets = (props) => {
    const tenancy = props.tenancy
    return (
        <DetailsWrapper>
            <Column gap={16}>
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
                        })})
                    </StyledUl>
                }
                {tenancy.paragraph !== undefined &&
                    <StyledUl>
                        <Paragraph $secondary $light size={14} lineHeight={18.16} weight={300}
                                   opacity={1}>
                            {tenancy.paragraph}
                        </Paragraph>
                    </StyledUl>
                }
            </Column>
        </DetailsWrapper>
    );
}

const ThirdspaceModal = (props) => {
    return (
        <Column padding={{ top: 64 }} $borderBox $width={532} gap={33}>
            <Title>
                Level 5 Third Space
            </Title>
            <CarouselWrapper>
                <SlideCarousel images={CONST.carousel} />
            </CarouselWrapper>
        </Column>
    );
}

export default memo(AvailabilityModal);