import { memo, useEffect, useState } from 'react';
import { ArrowWrapper, ButtonsWrapper, Container, CustomButton, CustomHeading, CustomRow } from './styles';
import { NavArrow } from "../../atoms";
import { constants as CONST } from './constants'
import { ReactComponent as Arrow } from '../../../assets/icons/Up-Arrow.svg'
import MobileModal from "./modal";

function AvailabilityMobile(props) {
    const buttonArr = Object.keys(CONST.levels).map(key => {
        return {key: key, ...CONST.levels[key]}
    });
    const buttonNumbers = buttonArr.filter(item => item.isActive).map(item => {
        return item;
    });

    const [startIndex, setStartIndex] = useState(0);
    const [visibleButtons, setVisibleButtons] = useState(
        buttonNumbers.slice(0, 5)
    );

    const navLeft = () => {
        let idx = startIndex
        if (idx > 0) {
            idx--;
            setStartIndex(idx);
        }
        setVisibleButtons(buttonNumbers.slice(idx, idx + 5));
    }

    const navRight = () => {
        let idx = startIndex
        if (idx < buttonNumbers.length - 5) {
            idx++;
            setStartIndex(idx);
        }
        setVisibleButtons(buttonNumbers.slice(idx, idx + 5));
    }

    const [isModal, setModal] = useState(false);

    const [activeLevel, setActiveLevel] = useState(0);

    const onButtonClick = (btn) => {
        setActiveLevel(btn);
        setModal(true);
    };

    useEffect(() => {
        props.setNavVis(!isModal);
    }, [isModal]);

    useEffect(() => {
        console.log(activeLevel)
    }, [activeLevel])

    return (
        <Container {...props}>
            <MobileModal
                showModal={isModal}
                closeModal={() => setModal(false)}
                startIndex={startIndex}
                visibleButtons={visibleButtons}
                navLeft={navLeft}
                navRight={navRight}
                buttonNumbers={buttonNumbers}
                activeLvl={activeLevel}
                onButtonClick={onButtonClick}
            />
            <CustomHeading>
                AVAILABLE TENANCIES
            </CustomHeading>
            <MobileModalNav
                startIndex={startIndex}
                visibleButtons={visibleButtons}
                navLeft={navLeft}
                navRight={navRight}
                buttonNumbers={buttonNumbers}
                onButtonClick={onButtonClick}
            />
        </Container>
    );
}

export const MobileModalNav = (props) => {
    return (
        <>

            <CustomRow>
                <ArrowWrapper
                    $left
                    $hidden={props.startIndex === 0}
                >
                    <Arrow onClick={props.navLeft} />
                </ArrowWrapper>
                <ButtonsWrapper>
                    <CustomButton onClick={() => props.onButtonClick(props.visibleButtons[0])}>
                        {props.visibleButtons[0].lvl}
                    </CustomButton>
                    <CustomButton onClick={() => props.onButtonClick(props.visibleButtons[1])}>
                        {props.visibleButtons[1].lvl}
                    </CustomButton>
                    <CustomButton onClick={() => props.onButtonClick(props.visibleButtons[2])}>
                        {props.visibleButtons[2].lvl}
                    </CustomButton>
                    <CustomButton onClick={() => props.onButtonClick(props.visibleButtons[3])}>
                        {props.visibleButtons[3].lvl}
                    </CustomButton>
                    <CustomButton onClick={() => props.onButtonClick(props.visibleButtons[4])}>
                        {props.visibleButtons[4].lvl}
                    </CustomButton>
                </ButtonsWrapper>
                <ArrowWrapper
                    $right
                    $hidden={props.startIndex === props.buttonNumbers.length - 5}
                >
                    <Arrow onClick={props.navRight} />
                </ArrowWrapper>
            </CustomRow>
        </>
    );
}

export default memo(AvailabilityMobile);
