import { CheckboxProps } from "@mui/material/Checkbox";
import { CheckBoxCustom } from "./styles";

interface CheckBoxProps {
    props: CheckboxProps;
}

export default function Checkbox(checkBoxProps: CheckBoxProps): React.ReactNode {
    const { props } = checkBoxProps;
    return <CheckBoxCustom {...props} />;
}
