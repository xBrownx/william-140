import React from 'react';
import * as Styled from './Modal.styled';
import {ReactComponent as Close} from "../../../../assets/icons/close.svg";

export const Modal = ({open, onClose, children}) => {
    if (!open) return null

    return (
        <>
            <Styled.Overlay onClick={onClose}/>
            <Styled.Modal $open={open}>
                    {children}
                    <Styled.CloseWrapper onClick={onClose}>
                        <Close/>
                    </Styled.CloseWrapper>
            </Styled.Modal>
        </>
    );
};
