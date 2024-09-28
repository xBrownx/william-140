import React, { useEffect } from "react";
import  { Image } from '../../atoms'
import { BackgroundOverlay, CloseButtonWrapper, ModalWindow } from "./styles";

import { useModalStatusContext } from "../../organisms/availabilityOverlay/context";
import { memo } from "react";

export const ModalPane = memo(
    function ModalPane(props) {
        const [isModalOpen, onLevelClick] = useModalStatusContext();
        return (
            <>
                <BackgroundOverlay
                    $open={isModalOpen}
                    onClick={props.closeModal}
                />
                <ModalWindow $open={isModalOpen}>
                    <CloseButtonWrapper onClick={props.closeModal} >
                        <p>Close</p>
                        <Image width={24} src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg"} />
                    </CloseButtonWrapper>
                    {props.children}
                </ModalWindow>
            </>
        );
    }
);