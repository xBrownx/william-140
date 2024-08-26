import {Column, ModalPane, Row} from "../../molecules";
import {ModalNav} from "../modalNav";
import React, {useState} from "react";
import {Tenancy, TenancyDetails, Title} from "./styles";
import {Link, Paragraph} from "../../atoms";
import {availability} from "../../constants";

export const AvailabilityModal = props => {
    const activeModal = availability.buttons[props.modalKey];
    const lvlVectors = availability.assets.lvlVectors;
    const [tenancy, setTenancy] = useState(0)

    if(props.modalKey === null) return;
    return (
        <ModalPane
            $open={props.$open}
            closeModal={props.closeModal}
        >
            <Row
                padding={{top: 62, left: 48, right: 48}}
                gap={60}
            >
                <ModalNav
                    activeModalKey={props.modalKey}
                    setModal={props.setModal}
                />
                <Column gap={16}>
                    <Title>
                        Level {activeModal.lvl ? activeModal.lvl : "error"}
                    </Title>
                    <Row gap={16}>
                        <Link
                            $underlined
                            $active={tenancy === 0}
                            onClick={() => setTenancy(0)}
                        >
                            TENANCY 1
                        </Link>
                        <Link
                            $underlined
                            $active={tenancy === 1}
                            onClick={() => setTenancy(1)}
                        >
                            TENANCY 2
                        </Link>
                    </Row>
                    <Row gap={34}>
                        <Tenancy>
                            {lvlVectors[props.modalKey].tenancy[tenancy].src}
                        </Tenancy>
                        <Column $flex gap={16}>
                            <Paragraph $secondary size={14}>
                                Molestie suspendisse fames vel eu tortor<br/>
                                at. Eu facilisis sit tempus id sed mattis.
                            </Paragraph>
                            <Row gap={12}>
                                <TenancyDetails>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            Timing:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            Landlord:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1} padding={{bottom: 16}}>
                                            Lease Type:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            18pax Boardroom:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            8pax Meeting Room:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            Small Meeting Office:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            Office:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            Workstation:
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={1}>
                                            Kitchen Breakout:
                                        </Paragraph>
                                    </li>
                                </TenancyDetails>
                                <TenancyDetails>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            Immediate
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            REST
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7} padding={{bottom: 16}}>
                                            Direct
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            xx
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            xx
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            xx
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            xx
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            xx
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph $secondary size={16} weight={400} opacity={0.7}>
                                            xx
                                        </Paragraph>
                                    </li>
                                </TenancyDetails>
                            </Row>
                        </Column>
                    </Row>
                </Column>
            </Row>
        </ModalPane>
    );
}