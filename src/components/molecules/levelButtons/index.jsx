import { LevelButton } from "../levelButton";
import React from "react";
import { Container, Wrapper } from "./styles";

export const LevelButtons = props => {

    const btnsObject = props.buttons;
    const btnsArr = Object.keys(btnsObject).map(key => {
        return { key: key, lvl: btnsObject[key].lvl, isActive: btnsObject[key].isActive, }
    });

    const buttons = [...btnsArr].reverse();
    const buttonsTop = [...buttons].slice(0, 17);
    const buttonsBottom = [...buttons].slice(17);

    return (
        <Container>
            <Wrapper $top>
                {buttonsTop.map((item) => {
                        return (
                            <LevelButton
                                key={item.key}
                                item={item}
                            >
                                {item.lvl ? item.lvl : null}
                            </LevelButton>
                        );
                    }
                )}
            </Wrapper>

            <Wrapper $bottom>
                {buttonsBottom.map((item) => {
                        return (
                            <LevelButton
                                key={item.key}
                                active={item.isActive}
                                item={item}
                                hoverKey={props.hoverKey}
                                setHover={props.setHover}
                                onLevelClick={props.onLevelClick}
                            >
                                {item.lvl ? item.lvl : null}
                            </LevelButton>
                        );
                    }
                )}
            </Wrapper>
        </Container>
    );
}