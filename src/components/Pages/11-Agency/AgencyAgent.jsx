import React from "react";
import styled from "styled-components";

export const Agent = ({agent}) => {
    return (
        <ListItemStyled>
            <StyledImg src={agent.img} alt="Agent"/>
            <AgentDetails>
                <h3>{agent.name}</h3>
                <p>
                    {agent.phone}<br/>
                    {agent.email}
                </p>
            </AgentDetails>
        </ListItemStyled>
    );
}

const ListItemStyled = styled.li`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row;
    gap: var(--height-16px);

    &:hover {
        cursor: pointer;
    }
`
const AgentDetails = styled.div`
    h3 {
        margin: 0;
        padding: 0;
        color: white;
        font-size: var(--font-size-xsmall);
        font-family: "TWKEverett-Regular", serif;
        font-weight: 400;
    }

    p {
        margin: 0;
        padding: var(--height-8px) 0 0 0;
        color: white;
        opacity: 0.7;
        font-size: var(--font-size-14px);
        line-height: var(--line-height-14px);
        font-weight: 400;
        font-family: var(--font-fmaily-secondary-light), serif;
    }
`

const StyledImg = styled.img`
    width: 9.887vh;
    height: 9.887vh;
`
