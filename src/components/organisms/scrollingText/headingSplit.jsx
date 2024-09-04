import React, { memo } from "react";
import { Heading } from "./styles";


export const HeadingSplit = memo(
    function HeadingSplit({children}) {
        return (
            <>
                {children.split("").map((item, i) => {
                    return (
                        <Heading key={`h_${i}`}>
                            {item === ' ' ? <>&nbsp;</> : item}
                        </Heading>
                    );
                })}
            </>
        );
    }
);