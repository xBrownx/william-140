import {Email, Name, Phone, StyledImg, Wrapper} from "./styles";
import {Column} from "../column";
import { Image } from "../../atoms";

export const Agent = props => {
    const {name, phone, email} = props.agent;
    const img = props.img
    return (
        <Wrapper>
            <Image {...img}/>
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