import {AvailButton} from "../../Styled/Buttons/Buttons.styled";
import {ModalThirdSpace} from "./Modal/Modal.ThirdSpace";
import {availability} from "../../constants";
import React from "react";
import Modal from "./Modal/Modal";
import {ModalGeneric} from "./Modal/Modal.generic";
import {LevelButton} from "../../molecules";
import {LevelVector} from "../../molecules/levelVector";


export const LevelButtons = ({setOpen, setModal}) => {
    return (
        <>
            {availability.buttons.map((item) => {
                return (
                    <>
                        <LevelButton
                            active={item.isActive}
                            left={item.left}
                            top={item.top}
                            height={item.height}
                        >
                            {item.lvl}
                        </LevelButton>
                    </>
                );}
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