import {AvailButton} from "../../Buttons/Buttons.styled";
import {ModalThirdSpace} from "./Modal/Modal.ThirdSpace";
import * as CONSTANTS from "./Availability.constants";
import {ModalGeneric} from "./Modal/Modal.generic";
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
                    item={item}
                    setOpen={setOpen}
                    setModalBody={setModalBody}
                />
            )}
        </>
    );
}

const LevelItem = ({item, setOpen, setModalBody}) => {

    return (
        <AvailButton
            margin={item.btnMargin}
            onClick={() => {
                setOpen(true)
                setModalBody(
                    <ModalGeneric
                        item={item}
                    />
                )
            }}
        >
            {item.btnName}
        </AvailButton>
    )
}