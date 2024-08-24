import {AvailButton} from "../../Styled/Buttons/Buttons.styled";
import {ModalThirdSpace} from "./Modal/Modal.ThirdSpace";
import {Availability} from "../../constants/Availability";
import React from "react";
import Modal from "./Modal/Modal";
import {ModalGeneric} from "./Modal/Modal.generic";
import {ActiveLevelButton} from "../../molecules";



export const LevelButtons = ({setOpen, setModal}) => {
    return (
        <>
            <AvailButton
                $large
                margin={"118.025vh 0 0 21.597vw"}
                onClick={() => {
                    setModal(ModalThirdSpace)
                    setOpen(true)
                }}
            >
                LVL 28 Third Space
            </AvailButton>

            {Availability.buttons.map((item) =>
                <ActiveLevelButton
                    active={item.isActive}
                    left={item.left}
                    top={item.top}
                >
                    {item.lvl}
                </ActiveLevelButton>
            )}
        </>
    );
}

const LevelItem = ({idx, item}) => {

    return (
        <Modal>
            <Modal.Open opens={idx}>

                {/*<AvailButton margin={item.btnMargin}>*/}
                {/*    {item.btnName}*/}
                {/*</AvailButton>*/}
            </Modal.Open>

            <Modal.Window idx={idx}>
                <Modal.Nav idx={idx}/>
                <ModalGeneric
                    idx={idx}
                />
            </Modal.Window>
        </Modal>
    )
}