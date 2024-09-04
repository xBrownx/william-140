import { Container, Pane } from './styles';
import { memo } from "react";

export const SplitScreen = memo(
    function SplitScreen(props) {
        const [left, right] = props.children;
        return (
            <Container ref={props.pageRef} {...props}>
                <Pane>
                    {left}
                </Pane>
                <Pane>
                    {right}
                </Pane>
            </Container>
        );
    }
);