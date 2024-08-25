import {Availability} from "../../constants";
import {LevelButton} from "../levelButton";
import React from "react";

export const LevelButtons = props => {
    return (
        <>
            {Availability.buttons.map((item) => {
                return (
                    <>
                        <LevelButton
                            active={item.isActive}
                            key={item.lvl}
                            idx={item.lvl}
                            item={item}
                            left={item.left}
                            top={item.top}
                            height={item.height}
                            hoverIdx={props.hoverIdx}
                            setHover={props.setHover}
                            onClick={props.onClick}
                        >
                            {item.lvl}
                        </LevelButton>
                    </>
                );}
            )}
        </>
    );
}