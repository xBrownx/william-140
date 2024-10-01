import {
    CloseButtonWrapper,
    CustomImage,
    CustomSubheading,
    ImageWrapper, ModalContentWrapper,
    ModalHeading, ModalParagraph,
    ModalWrapper, TenancyImage,
    TenancyWrapper
} from "./styles";

import React from "react";
import { MobileModalNav } from "./index";
import { Image } from "../../atoms";
import { ModalContainer } from "./styles";
import { _availabilityAssets } from "../../../assets";

function MobileModal(props) {
    const lvlData = _availabilityAssets.lvlVectors;

    if (typeof window != 'undefined' && window.document && props.showModal) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return (
        <>{props.showModal && <ModalContainer $open={props.showModal} >
            <ModalWrapper $open={props.showModal} >
                <CloseButtonWrapper onClick={props.closeModal} >
                    <CustomImage src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/icons/close.svg"} />
                </CloseButtonWrapper >
                <MobileModalNav {...props} />
                <ModalHeading >
                    Level {props.activeLvl.lvl}
                </ModalHeading >
                {lvlData[Object.keys(props.activeLvl)].tenancy.length > 1 &&
                    <TenancyWrapper >
                        <CustomSubheading >
                            TENANCY 1
                        </CustomSubheading >
                        <CustomSubheading >
                            TENANCY 2
                        </CustomSubheading >
                    </TenancyWrapper >
                }
                <ImageWrapper >
                    <TenancyImage
                        src={"https://140-william-assets.s3.ap-southeast-2.amazonaws.com/images/availability/leasing/l14.svg"} />
                </ImageWrapper >
                <ModalContentWrapper >
                    <ModalParagraph >

                    </ModalParagraph >
                </ModalContentWrapper >
            </ModalWrapper >
        </ModalContainer >
        }
        </>
    );
}

export default MobileModal;