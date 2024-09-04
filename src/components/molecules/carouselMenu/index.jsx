import { memo, useDeferredValue } from "react";
import { Container, MenuItem, Wrapper } from "./styles";

export const Index = memo(
    function Index({carouselItems, icons, activeIdx, setActiveIndex}) {

        const slideTitles = carouselItems.map(item => {
            return item.title
        });

        const slideIcons = icons.map(item => {
            return item.src
        });

        // const deferredIdx = useDeferredValue(activeIdx);

        return (
            <Container id="container">
                <Wrapper id="wrapper">
                    {slideIcons.map((Item, index) => (
                        <MenuItem
                            id="menu-item"
                            onClick={() => setActiveIndex(index)}
                            key={index}
                            $isActive={activeIdx === index}>
                            <Item />
                            <p>
                                {slideTitles[index]}
                            </p>
                        </MenuItem>
                    ))}
                </Wrapper>
            </Container>
        );
    }
);

