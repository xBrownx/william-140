import {_agencyAssets} from "../../../assets";

export const agency = {
    headingTxt: "Agencies",
    paragraphTxt: "If you'd like to inspect this property in person, please\n" +
        "contact your preferred agent for further info or to arrange\n" +
        "a private inspection.",
    agencies: {
        knightFrank: {
            label: "KNIGHT FRANK",
            link: "https://www.knightfrank.com.au/contact/melbourne",
            agents: [
                {
                    key: "jamPap",
                    name: "JAMES PAPPAS",
                    phone: "+61 419 319 367",
                    email: "james.pappas@au.knightfrank.com",
                },
                {
                    key: "hamSut",
                    name: "HAMISH SUTHERLAND",
                    phone: "+61 439 033 612",
                    email: "hamish.sutherland@au.knightfrank.com",
                },
            ],
        },
        colliers: {
            label: "COLLIERS",
            link: "https://www.colliers.com.au/en-au",
            agents: [
                {
                    key: "geoMur",
                    name: "GEORGINA MURRAY",
                    phone: "+61 412 232 030",
                    email: "georgina.murray@colliers.com",
                },
                {
                    key: "micDar",
                    name: "MICHAEL DARVELL",
                    phone: "+61 401 033 303",
                    email: "michael.darvell@colliers.com",
                },
                {
                    key: "shaBur",
                    name: "SHANE BURNS",
                    phone: "+61 439 035 002",
                    email: "shane.burns@colliers.com",
                }
            ],
        },
    },
    assets: _agencyAssets
}
