import React, {forwardRef, useState} from 'react';
import {ReactComponent as FooterLogo} from "../../../assets/svg/140W_Logo_RGB_Stacked_White.svg";

import {StyledSection} from "../../Core/SectionContainer.styled";

export const Enquire = forwardRef(function(
    {
        id,
        minHeight
    },
    ref
) {

    const [inputs, setInputs] = useState({});


    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();

    }

    return (
        <StyledSection
            id={id}
            ref={ref}
            minHeight={minHeight}
            $secondary
        >
            <div className="page-container">
                <div className="content-container">
                    <div className="heading-wrapper">
                        <div className="title">

                        </div>
                    </div>

                    <div className="content-wrapper">
                        <div className="form-container">
                            <div className="form-wrapper">
                                <form onSubmit={handleSubmit}>
                                    <div className="enquiry-row two">

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

                                    <div className="enquiry-row one">

                                        <input
                                            type="text"
                                            name={"email"}
                                            value={inputs.email || ""}
                                            placeholder="Email"
                                            onChange={handleChange}
                                        />

                                    </div>

                                    <div className="enquiry-row one">
                                        <input
                                            type="text"
                                            name={"phone"}
                                            value={inputs.phone || ""}
                                            placeholder="Phone Number"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="enquiry-row one">
                                        <textarea
                                            className="enquiry-input-msg"
                                            name={"message"}
                                            value={inputs.message || ""}
                                            placeholder="Message"
                                            onChange={handleChange}
                                            rows="4"
                                        />
                                    </div>
                                    <div className="btn-wrapper">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
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
                        <p>Website designed by Replika.</p>
                    </div>
                </div>
            </div>
        </StyledSection>
    )
        ;
});
