import {Wrapper} from './styles'

export const IconLink = props => {
    return (
        <Wrapper {...props}>
            <props.Icon/>
            {props.children}
        </Wrapper>
    );
}