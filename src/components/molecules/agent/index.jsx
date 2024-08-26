import {Email, Name, Phone, StyledImg, Wrapper} from "./styles";
import {Column} from "../column";

export const Agent = props => {
    const {name, phone, email, img} = props.agent;
    return (
        <Wrapper>
            <StyledImg src={img} alt="Agent"/>
            <Column padding={{left: 8}}>
                <Name>{name}</Name>
                <Phone>
                    {phone}<br/>
                    {email}
                </Phone>
            </Column>
        </Wrapper>
    );
}