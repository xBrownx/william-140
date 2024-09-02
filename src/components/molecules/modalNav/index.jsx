import { Button, Container } from "./styles";
import { Column } from "../index";
import { NavArrow } from "../../atoms";
import {availability} from "../../../constants";
import { useModalKeyContext } from "../../organisms/availabilityOverlay/context";

export const ModalNav = props => {
    const [modalKey, setModalKey] = useModalKeyContext();

    const itemsObj = availability.buttons;
    const itemsArr = Object.keys(itemsObj).map(key => {
        return {key: key, lvl: itemsObj[key].lvl, isActive: itemsObj[key].isActive}
    })

    const activeLevels = itemsArr.filter(item => item.isActive ? item : null).reverse();

    const activeIdx = () => {
        return activeLevels.findIndex(obj => obj.key === modalKey)
    }

    const getIdx = (key) => {
        return activeLevels.findIndex(obj => obj.key === key)
    }

    const navigateUp = () => {

        if (activeIdx() > 0) {
            setModalKey(activeLevels[activeIdx() - 1].key)
        }
    };

    const navigateDn = () => {
        if (activeIdx() < activeLevels.length - 1) {
            setModalKey(activeLevels[activeIdx() + 1].key)
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
                            $active={modalKey === item.key}
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