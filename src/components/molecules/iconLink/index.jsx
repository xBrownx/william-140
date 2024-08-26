import {Wrapper} from './styles'

export const IconLink = props => {
    return (
        <Wrapper
            onMouseEnter={() => props.onHover(props.idx)}
            onMouseLeave={() => props.onHover(7)}
            {...props}
        >
            <props.Icon />
            {props.children}
        </Wrapper>
    );
}