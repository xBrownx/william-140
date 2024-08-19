import {AvailButton} from "../../Buttons/Buttons.styled";
import {ModalThirdSpace} from "./Modal.ThirdSpace";
import * as CONSTANTS from "./Availability.constants";
import {ModalGeneric} from "./Modal.generic";
import React from "react";

export const LevelButtons = ({setOpen, setModalBody}) => {
    return (
        <>
            <AvailButton
                $large
                margin={"118.025vh 0 0 21.597vw"}
                onClick={() => {
                    setModalBody(ModalThirdSpace)
                    setOpen(true)
                }}
            >
                LVL 28 Third Space
            </AvailButton>

            {CONSTANTS.floorItems.map((item, i) =>

                <LevelItem
                    key={i}
                    levelItem={item}
                    body={item.modalBody}
                    setOpen={setOpen}
                    setModalBody={setModalBody}
                />
            )}
        </>
    );
}

const LevelItem = ({levelItem, body, setOpen, setModalBody}) => {
    console.log(typeof body)
    return (
        <AvailButton
            margin={levelItem.btnMargin}
            onClick={() => {
                setOpen(true)
                setModalBody(
                    <ModalGeneric
                        heading={levelItem.modalTitle}>
                        items={body},
                    </ModalGeneric>
                )
            }}
        >
            {levelItem.btnName}
        </AvailButton>
    )
}