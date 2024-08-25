import {Availability} from "../../constants";
import {LevelButton} from "../levelButton";
import React from "react";
import {Container, Wrapper} from "./styles";

export const LevelButtons = props => {
    const buttons = [...Availability.buttons].reverse();
    const buttonsTop = [...buttons].slice(0, 17)
    const buttonsBottom = [...buttons].slice(17)
    return (
        <Container>
            <Wrapper gap={5.6}>
                {buttonsTop.map((item) => {
                        return (
                            <LevelButton
                                active={item.isActive}
                                key={item.lvl}
                                item={item}
                                hoverIdx={props.hoverIdx}
                                setHover={props.setHover}
                                onLevelClick={props.onLevelClick}
                            >
                                {item.lvl ? item.lvl : null}
                            </LevelButton>
                        );
                    }
                )}
            </Wrapper>

            <Wrapper gap={6.2}>
                {buttonsBottom.map((item) => {
                        return (
                            <LevelButton
                                active={item.isActive}
                                key={item.lvl}
                                item={item}
                                hoverIdx={props.hoverIdx}
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