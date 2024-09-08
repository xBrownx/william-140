import { memo } from 'react';
import { Container } from "./styles";
import { Line } from "./line";


export const LandingTitleAnimation = memo(
    function LandingTitleAnimation(props) {
        const headings = props.heading
        return (
            <Container {...props}>
                {headings.map((item) => {
                    return (
                        <Line key={item.title} item={item} {...props} />
                    );
                })}
            </Container>
        );
    }
);








