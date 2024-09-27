import { Wrapper } from './styles'
import { Image } from "../../atoms";


export function IconLink(props) {
    return (
        <Wrapper {...props}>
            <Image src={props.iconSrc} />
            {props.children}
        </Wrapper>
    );
}
