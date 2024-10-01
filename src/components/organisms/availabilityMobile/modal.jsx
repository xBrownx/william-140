import {
    CustomSubheading,
    ImageWrapper,
    ModalContainer,
    ModalWrapper,
    TenancyWrapper
} from "../availabilityModal/styles";
import { CustomHeading } from "./styles";
import { constants as CONST } from "./constants";
import { useState } from "react";
import { MobileModalNav } from "./index";

function MobileModal(props) {
    const buttonArr = Object.keys(CONST.levels).map(key => CONST.levels[key]);
    const buttonNumbers = buttonArr.filter(item => item.isActive).map(item => {
        return item.lvl
    }).reverse();

    const [startIndex, setStartIndex] = useState(0);
    const [visibleButtons, setVisibleButtons] = useState(
        buttonNumbers.slice(0, 5)
    );

    const navLeft = () => {
        let idx = startIndex
        if(idx > 0) {
            idx--;
            setStartIndex(idx);
        }
        setVisibleButtons(buttonNumbers.slice(idx, idx + 5));
    }

    const navRight = () => {
        let idx = startIndex
        if(idx < buttonNumbers.length - 5) {
            idx++;
            setStartIndex(idx);
        }
        setVisibleButtons(buttonNumbers.slice(idx, idx + 5));
    }
    return (
        <ModalContainer>
            <ModalWrapper>
                <MobileModalNav {...props} />
                <CustomHeading>

                </CustomHeading>
                <TenancyWrapper>
                    <CustomSubheading>

                    </CustomSubheading>
                </TenancyWrapper>
                <ImageWrapper>

                </ImageWrapper>
            </ModalWrapper>
        </ModalContainer>
    );
}

export default MobileModal;