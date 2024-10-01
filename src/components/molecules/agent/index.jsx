import { CustomImageContainer, Name, Phone, StyledImg, Wrapper } from "./styles";
import {Column} from "../column";
import { memo } from "react";


export const Agent = memo(function Agent(props) {
    const {name, phone, email} = props.agent;
    const img = props.img
    return (
        <Wrapper>
            <CustomImageContainer {...img}>
                <StyledImg {...img}/>
            </CustomImageContainer>
            <Column padding={{left: 8}}>
                <Name>{name}</Name>
                <Phone>
                    {phone}<br/>
                    {email}
                </Phone>
            </Column>
        </Wrapper>
    );
});