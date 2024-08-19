import React from 'react';
import * as Styled from './Modal.styled';
import {ReactComponent as Close} from "../../../assets/icons/close.svg";
import popupImg from "../../../assets/img/08-Availability-Popup-Background.png"


const Modal = ({open, children, onClose}) => {
    if (!open) return null

    return (
        <>
            <Styled.Overlay onClick={onClose}/>
            <Styled.Modal $open={open}>
                <Styled.ModalBgImg src={popupImg} alt={"bg"}/>
                {children}
                <Styled.CloseWrapper onClick={onClose}>
                    <Close/>
                </Styled.CloseWrapper>
            </Styled.Modal>
        </>
    );
};


export default Modal;