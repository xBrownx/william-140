import React, { useState, memo } from "react";
import { Button, Input, TextArea } from "../../atoms";
import { Column, Container, Row } from "../../molecules";
import { CustomButton, CustomContainer } from "./styles";

export const EnquireForm = memo(
    function EnquireForm(props) {
        const fields = props.fields
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
            <CustomContainer width={576}>
                <form onSubmit={handleSubmit}>
                    <Column gap={16}>
                        <Row
                            $justifySpaceBetween
                            gap={14}
                        >
                            <Input
                                name={"lastName"}
                                value={inputs.lastName || ""}
                                placeholder={fields.lastName}
                                onChange={handleChange}
                            />
                            <Input
                                name={"firstName"}
                                value={inputs.firstName || ""}
                                placeholder={fields.firstName}
                                onChange={handleChange}
                            />
                        </Row>
                        <Row>
                            <Input
                                name={"email"}
                                value={inputs.email || ""}
                                placeholder={fields.email}
                                onChange={handleChange}
                            />
                        </Row>
                        <Row>
                            <Input
                                name={"phone"}
                                value={inputs.phone || ""}
                                placeholder={fields.phone}
                                onChange={handleChange}
                            />
                        </Row>
                        <Row>
                            <TextArea
                                className="enquiry-input-msg"
                                name={"message"}
                                value={inputs.message || ""}
                                placeholder={fields.msg}
                                onChange={handleChange}
                                rows="4"
                            />
                        </Row>
                        <CustomButton
                            $fillParent
                            $variantOne
                            type="submit"
                        >
                            Submit
                        </CustomButton>
                    </Column>
                </form>
            </CustomContainer>
        );
    }
);

