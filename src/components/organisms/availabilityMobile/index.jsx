import { memo } from 'react';
import { ButtonsWrapper, Container, CustomButton, CustomHeading, CustomRow } from './styles';
import { NavArrow } from "../../atoms";
import { constants as CONST } from './constants'
function AvailabilityMobile(props) {
    const buttonArr = Object.keys(CONST.levels).map(key => CONST.levels[key]);
    console.log(buttonArr);
    const buttonNumbers = buttonArr.filter(item => item.isActive).map(item => {
        return item.lvl
    }).reverse();
    console.log(buttonNumbers);

    return (
        <Container {...props}>
            <CustomHeading>
                AVAILABLE TENANCIES
            </CustomHeading>
            <CustomRow>
                <NavArrow $left onClick={() => {}} />
                <ButtonsWrapper>
                    <CustomButton>
                        {buttonNumbers[0]}
                    </CustomButton>
                    <CustomButton>
                        {buttonNumbers[1]}
                    </CustomButton>
                    <CustomButton>
                        {buttonNumbers[2]}
                    </CustomButton>
                    <CustomButton>
                        {buttonNumbers[3]}
                    </CustomButton>
                    <CustomButton>
                        {buttonNumbers[4]}
                    </CustomButton>
                </ButtonsWrapper>
                <NavArrow $right onClick={() => {}} />
            </CustomRow>
        </Container>
    );
}


export default memo(AvailabilityMobile);
