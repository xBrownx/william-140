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
            <CustomRow>
                <ArrowWrapper
                    $left
                    $hidden={startIndex === 0}
                >
                    <Arrow onClick={navLeft}/>
                </ArrowWrapper>
                <ButtonsWrapper>
                    <CustomButton>
                        {visibleButtons[0]}
                    </CustomButton>
                    <CustomButton>
                        {visibleButtons[1]}
                    </CustomButton>
                    <CustomButton>
                        {visibleButtons[2]}
                    </CustomButton>
                    <CustomButton>
                        {visibleButtons[3]}
                    </CustomButton>
                    <CustomButton>
                        {visibleButtons[4]}
                    </CustomButton>
                </ButtonsWrapper>
                <ArrowWrapper
                    $right
                    $hidden={startIndex === buttonNumbers.length - 5}
                >
                    <Arrow onClick={navRight}/>
                </ArrowWrapper>
            </CustomRow>
        </Container>
    );
}


export default memo(AvailabilityMobile);
