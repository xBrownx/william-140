import {
    CloseButtonWrapper,
    CustomHeading, CustomImage,
    CustomSubheading,
    ImageWrapper, ModalContentWrapper,
    ModalHeading,
    ModalWrapper, TenancyImage,
    TenancyWrapper
} from "./styles";

import React from "react";
import { MobileModalNav } from "./index";
import { Image } from "../../atoms";
import { ModalContainer } from "./styles";

function MobileModal(props) {

    if (typeof window != 'undefined' && window.document && props.showModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <ModalContainer $open={props.showModal}>
            <CloseButtonWrapper onClick={props.closeModal}>
                <CustomImage src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg"} />
            </CloseButtonWrapper>
            <ModalWrapper $open={props.showModal}>
                <MobileModalNav {...props} />
                <ModalHeading>
                    Level 33
                </ModalHeading>
                <TenancyWrapper>
                    <CustomSubheading>
                        TENANCY 1
                    </CustomSubheading>
                    <CustomSubheading>
                        TENANCY 2
                    </CustomSubheading>
                </TenancyWrapper>
                <ImageWrapper>
                    <TenancyImage src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/availability/leasing/l14.svg"} />
                </ImageWrapper>
                <ModalContentWrapper>

                </ModalContentWrapper>
            </ModalWrapper>
        </ModalContainer>
    );
}

export default MobileModal;