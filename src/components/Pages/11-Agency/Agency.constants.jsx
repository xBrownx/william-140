import JamPap from "../../../assets/svg/1-James-Pappas.svg";
import HamSut from "../../../assets/svg/2-Hamish-Sutherland.svg";
import GeoMur from "../../../assets/svg/3-Georgina-Murray.svg";
import MicDar from "../../../assets/svg/4-Michael-Darvell.svg";
import ShaBur from "../../../assets/svg/5-Shane-Burns.svg";

import React from "react";

export const headingText =
    <>
        Agencies
    </>

export const paragraphText =
    <>
        If you'd like to inspect this property in person, please<br/>
        contact your preferred agent for further info or to arrange<br/>
        a private inspection.
    </>

export const subHeadingOne =
    <>
        KNIGHT FRANK
    </>

export const subHeadingTwo =
    <>
        COLLIERS
    </>

export const knightFrankAgents = [
    {
        name: "JAMES PAPPAS",
        phone: "+61 419 319 367",
        email: "james.pappas@au.knightfrank.com",
        img: JamPap
    },
    {
        name: "HAMISH SUTHERLAND",
        phone: "+61 439 033 612",
        email: "hamish.sutherland@au.knightfrank.com",
        img: HamSut
    },

];

export const colliersAgents = [
    {
        name: "GEORGINA MURRAY",
        phone: "+61 412 232 030",
        email: "georgina.murray@colliers.com",
        img: GeoMur
    },
    {
        name: "MICHAEL DARVELL",
        phone: "+61 401 033 303",
        email: "michael.darvell@colliers.com",
        img: MicDar
    },
    {
        name: "SHANE BURNS",
        phone: "+61 439 035 002",
        email: "shane.burns@colliers.com",
        img: ShaBur
    },
];

