import { Button, Container } from "./styles";
import { Column } from "../../molecules";
import { NavArrow } from "../../atoms";
import {Availability} from "../../constants";
import {useEffect, useState} from "react";
import modal from "../../Pages/08-Availability/Modal/Modal";


export const ModalNav = props => {
    const items = Availability.buttons;
    const activeLevels = items.filter(item => item.isActive ? item : null).reverse();

    const navigateUp = () => {
        const activeIdx = activeLevels.indexOf(props.activeModal);
        if (activeIdx > 0) {
            props.setModal(activeLevels[activeIdx - 1])
        }
    };
    const navigateDn = () => {
        const activeIdx = activeLevels.indexOf(props.activeModal);
        if (activeIdx < activeLevels.length - 1) {
            props.setModal(activeLevels[activeIdx + 1])
        }
    }

    const isVisible = (item) => {
        const activeIdx = activeLevels.indexOf(props.activeModal);
        const idx = activeLevels.indexOf(item);

        if(activeIdx < 3 ) {
            return idx < 5
        }
        else if (activeIdx > activeLevels.length - 4) {
            return idx > activeLevels.length - 6
        }
        else {
            return idx > activeIdx - 3 && idx < activeIdx + 3
        }

    }

    return (
        <Container>
            <Column $centreX gap={8}>
                <NavArrow onClick={navigateUp}/>
                {activeLevels.map(item => {
                    return (
                        <Button
                            $active={props.activeModal === item}
                            $visible={isVisible(item)}
                            square={64}
                            fontSize={16}
                        >
                            <p>{item.lvl}</p>
                        </Button>
                    )
                })}
                <NavArrow $flipped onClick={navigateDn}/>
            </Column>
        </Container>
    );
}