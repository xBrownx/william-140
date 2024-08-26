import React from 'react';
import styled, {css} from 'styled-components';
import * as STYLED from "../../../Styled/GlobalStyles"
import {ReactComponent as Arrow} from "../../../../assets/icons/Down-Arrow.svg";

export const ModalNav = ({idx, items, onSelectLevel}) => {
    const [lvlNum, setLvlNum] = React.useState(idx);

    // const selectLevel = (lvl) => {
    //     setLvlNum(lvl);
    //     onSelectLevel(lvl)
    // }
    //
    // const levelUp = (i) => {
    //     if (lvlNum > 0) {
    //         selectLevel(lvlNum - i);
    //     }
    // }
    // const levelDn = (i) => {
    //     if ((items.length - lvlNum) > 1) {
    //         selectLevel(lvlNum + i);
    //     }
    // }
    //
    // return (
    //     <Container>
    //         <ArrowContainer
    //             $rotate
    //             $visible={lvlNum.valueOf() > 0}
    //             onClick={() => levelUp(1)}
    //         >
    //             <Arrow/>
    //         </ArrowContainer>
    //         {
    //             lvlNum > 1
    //                 ? <Button onClick={() => levelUp(2)}>
    //                     {items[lvlNum - 2].lvlNum}
    //                 </Button>
    //                 : <ButtonBlank/>
    //         }
    //         {
    //             lvlNum > 0
    //                 ? <Button onClick={() => levelUp(1)}>
    //                     {items[lvlNum - 1].lvlNum}
    //                 </Button>
    //                 : <ButtonBlank/>
    //         }
    //         <Button $selected>{items[lvlNum].lvlNum}</Button>
    //         {
    //             (items.length - lvlNum) > 1
    //                 ? <Button onClick={() => levelDn(1)}>
    //                     {items[lvlNum + 1].lvlNum}
    //                 </Button>
    //                 : <ButtonBlank/>
    //         }
    //         {
    //             (items.length - lvlNum) > 2
    //                 ? <Button onClick={() => levelDn(2)}>
    //                     {items[lvlNum + 2].lvlNum}
    //                 </Button>
    //                 : <ButtonBlank/>
    //         }
    //         <ArrowContainer
    //             $visible={(items.length - lvlNum.valueOf()) > 1}
    //             onClick={() => levelDn(1)}
    //         >
    //             <Arrow/>
    //         </ArrowContainer>
    //     </Container>
    // );
};









