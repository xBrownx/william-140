import {Column, ModalPane, PageTitle, Row} from "../../molecules";
import {ModalNav} from "../modalNav";
import React from "react";
import {Tenancy, Title} from "./styles";
import {Link, Paragraph} from "../../atoms";

export const AvailabilityModal = props => {
    const level = props.modalItem;
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
                    activeModal={props.modalItem}
                    setModal={props.setModal}
                />
                <Column gap={16}>
                    <Title>
                        Level {level.lvl}
                    </Title>
                    <Row gap={16}>
                        <Link>TENANCY 1</Link>
                        <Link>TENANCY 2</Link>
                    </Row>
                    <Row gap={34}>
                        <Tenancy>
                            {level.tenancyOne}
                        </Tenancy>
                        <Column $flex>
                            <Paragraph $secondary size={14}>
                                Molestie suspendisse fames vel eu tortor<br/>
                                at. Eu facilisis sit tempus id sed mattis.
                            </Paragraph>
                        </Column>
                    </Row>
                </Column>
            </Row>

        </ModalPane>
    );
}