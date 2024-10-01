import { memo, useState } from 'react';
import { ArrowWrapper, ButtonsWrapper, Container, CustomButton, CustomHeading, CustomRow } from './styles';
import { NavArrow } from "../../atoms";
import { constants as CONST } from './constants'
import { ReactComponent as Arrow } from '../../../assets/icons/Up-Arrow.svg'
function AvailabilityMobile(props) {
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
        <Container {...props}>
            <CustomHeading>
                AVAILABLE TENANCIES
            </CustomHeading>
            <MobileModalNav
                startIndex={startIndex}
                visibleButtons={visibleButtons}
                navLeft={navLeft}
                navRight={navRight}
                buttonNumbers={buttonNumbers}
            />
        </Container>
    );
}

export const MobileModalNav = (props) => {
    return (
        <CustomRow>
                <ArrowWrapper
                    $left
                    $hidden={props.startIndex === 0}
                >
                    <Arrow onClick={props.navLeft}/>
                </ArrowWrapper>
                <ButtonsWrapper>
                    <CustomButton>
                        {props.visibleButtons[0]}
                    </CustomButton>
                    <CustomButton>
                        {props.visibleButtons[1]}
                    </CustomButton>
                    <CustomButton>
                        {props.visibleButtons[2]}
                    </CustomButton>
                    <CustomButton>
                        {props.visibleButtons[3]}
                    </CustomButton>
                    <CustomButton>
                        {props.visibleButtons[4]}
                    </CustomButton>
                </ButtonsWrapper>
                <ArrowWrapper
                    $right
                    $hidden={props.startIndex === props.buttonNumbers.length - 5}
                >
                    <Arrow onClick={props.navRight}/>
                </ArrowWrapper>
            </CustomRow>
    );
}

export default memo(AvailabilityMobile);
