import React, {useState} from 'react';
import './EnquiryPage.css'
import {ParallaxLayer} from "@react-spring/parallax";

import {ReactComponent as FooterLogo} from "../../assets/140W_Logo_RGB_Stacked_White.svg";
import Page from "../../components/Page";
import {SecondaryTitle} from "../../components/TitleVariants";
import {useHomeAnim} from "../../hooks/HomeAnim";
import {ScrollConst} from "../../util/PageRefs";

function EnquiryPage(props) {

    const [inputs, setInputs] = useState({});

    const anim = useHomeAnim(props.mainRef, ScrollConst.enquiryHead, ScrollConst.homeBody);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <Page pageRef={props.pageRef} size={"page-100"}>

            <SecondaryTitle
                variant={" enquire"}
                heading={"Enquiry"}
                anim={anim}
            />

            <div className="primary-content-container enquire">
                <div className="primary-content-wrapper no-border centre-horiz">
                    <div className="enquire-form-wrapper">
                        <form onSubmit={handleSubmit}>

                            <div className="enquiry-2-row">
                                <input
                                    type="text"
                                    name={"lastName"}
                                    value={inputs.lastName || ""}
                                    placeholder="Last Name"
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name={"firstName"}
                                    value={inputs.firstName || ""}
                                    placeholder="First Name"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="enquiry-1-row">
                                <input
                                    type="text"
                                    name={"email"}
                                    value={inputs.email || ""}
                                    placeholder="Email"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="enquiry-1-row">
                                <input
                                    type="text"
                                    name={"phone"}
                                    value={inputs.phone || ""}
                                    placeholder="Phone Number"
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="enquiry-1-row">
                                    <textarea
                                        className="enquiry-input-msg"
                                        name={"message"}
                                        value={inputs.message || ""}
                                        placeholder="Message"
                                        onChange={handleChange}
                                        rows="4"
                                    />
                            </div>
                            <div className="submit-btn-wrapper">
                                <button type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer-container">
                <div className="footer-wrapper">
                    <div className="footer-div left">
                        <p>Privacy Policy</p>
                    </div>
                    <div className="footer-div centre">
                        <FooterLogo/>
                    </div>
                    <div className="footer-div right">
                        <p>Website by Replika.</p>
                    </div>
                </div>
            </div>
        </Page>
    );
}

export default EnquiryPage;