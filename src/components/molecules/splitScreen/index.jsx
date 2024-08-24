import {Container, Pane} from './styles';

export const SplitScreen = props=> {
    const [left, right] = props.children;
    return(
        <Container {...props}>
            <Pane>
                {left}
            </Pane>
            <Pane>
                {right}
            </Pane>
        </Container>
    );
}