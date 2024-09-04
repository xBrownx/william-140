import {StyledTextArea} from "./styles";
import { memo } from "react";

export const TextArea = memo(function TextArea(props) {
    return <StyledTextArea {...props} />;
});