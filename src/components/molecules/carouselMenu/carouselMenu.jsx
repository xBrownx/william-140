import { memo, useDeferredValue } from "react";
import { Container, MenuItem, Wrapper } from "./styles";
import { Image } from '../../atoms'


function CarouselMenu(props) {
    const {menuItems, activeShot, setActiveShot} = props
    return (
        <Container id="container">
            <Wrapper id="wrapper">
                {menuItems.map((item, index) => (
                    <MenuItem
                        id="menu-item"
                        key={index}
                        onClick={() => setActiveShot(index)}
                        $isActive={activeShot === index}
                    >
                        <Image src={item.iconSrc} />
                        <p>
                            {menuItems[index].title}
                        </p>
                    </MenuItem>
                ))}
            </Wrapper>
        </Container>
    );
}

export default memo(CarouselMenu);
