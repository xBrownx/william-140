import * as CONSTANTS from "./Enquire.constants";
import React, {useState} from "react";
import styled from "styled-components";


export const EnquireForm = () => {

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
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <InputRow>

                    <StyledInput
                        type="text"
                        name={"lastName"}
                        value={inputs.lastName || ""}
                        placeholder={CONSTANTS.lastName}
                        onChange={handleChange}
                    />

                    <StyledInput
                        type="text"
                        name={"firstName"}
                        value={inputs.firstName || ""}
                        placeholder={CONSTANTS.firstName}
                        onChange={handleChange}
                    />

                </InputRow>

                <InputRow>

                    <StyledInput
                        type="text"
                        name={"email"}
                        value={inputs.email || ""}
                        placeholder={CONSTANTS.email}
                        onChange={handleChange}
                    />

                </InputRow>

                <InputRow>
                    <StyledInput
                        type="text"
                        name={"phone"}
                        value={inputs.phone || ""}
                        placeholder={CONSTANTS.phoneNumber}
                        onChange={handleChange}
                    />
                </InputRow>

                <InputRow>
                    <StyledTextArea
                        className="enquiry-input-msg"
                        name={"message"}
                        value={inputs.message || ""}
                        placeholder={CONSTANTS.message}
                        onChange={handleChange}
                        rows="4"
                    />
                </InputRow>

                <div className="btn-wrapper">
                    <StyledButton type="submit">Submit</StyledButton>
                </div>
            </form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    width: 30vw;
    @media only screen and (max-width: 750px) {
        width: 100%;
    }
`

const InputRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    margin: 0 0 20px 0;

    ::placeholder {
        color: var(--primary-text-colour);
`

const StyledInput = styled.input`
    width: 100%;
    height: 51px;
    font-size: 16px;
    font-family: 'SuisseIntl-Regular', serif;
    background-color: transparent;
    color: var(--primary-text-colour);
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 0 0 0 20px;
    
`

const StyledTextArea = styled.textarea`
    width: 100%;
    background-color: transparent;
    color: var(--primary-text-colour);
    box-sizing: border-box;
    border: 1px solid #E6E6E6;
    padding: 15px 0 0 20px;
    font-size: 16px;
    font-family: 'SuisseIntl-Regular', serif;
    resize: none;
`

const StyledButton = styled.button`
    padding: 0;
    margin: 0;
    width: 100%;
    height: 51px;
    color: var(--primary-bg-colour);
    font-size: 16px;
    font-family: 'SuisseIntl-Regular', serif;
    text-align: center;
    text-decoration: none;
    display: inline-block;
`