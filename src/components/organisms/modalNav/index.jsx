import { Button, Container } from "./styles";
import { Column } from "../../molecules";
import { NavArrow } from "../../atoms";
import {availability} from "../../constants";
import {useEffect, useState} from "react";
import modal from "../../Pages/08-Availability/Modal/Modal";


export const ModalNav = props => {
    const itemsObj = availability.buttons;
    const itemsArr = Object.keys(itemsObj).map(key => {
        return {key: key, lvl: itemsObj[key].lvl, isActive: itemsObj[key].isActive}
    })

    const activeLevels = itemsArr.filter(item => item.isActive ? item : null).reverse();

    const activeIdx = () => {
        return activeLevels.findIndex(obj => obj.key === props.activeModalKey)
    }

    const getIdx = (key) => {
        return activeLevels.findIndex(obj => obj.key === key)
    }

    const navigateUp = () => {

        if (activeIdx() > 0) {
            props.setModal(activeLevels[activeIdx() - 1].key)
        }
    };

    const navigateDn = () => {
        if (activeIdx() < activeLevels.length - 1) {
            props.setModal(activeLevels[activeIdx() + 1].key)
        }
    }

    const isVisible = (item) => {

        const idx = getIdx(item.key);

        if(activeIdx() < 3 ) {
            return idx < 5
        }
        else if (activeIdx() > activeLevels.length - 4) {
            return idx > activeLevels.length - 6
        }
        else {
            return idx > activeIdx() - 3 && idx < activeIdx() + 3
        }

    }

    return (
        <Container>
            <Column $centreX gap={8}>
                <NavArrow onClick={navigateUp}/>
                {activeLevels.map(item => {
                    return (
                        <Button
                            $active={props.activeModalKey === item.key}
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