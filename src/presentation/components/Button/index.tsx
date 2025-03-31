import { ButtonProps } from "@mui/material";
import { Container } from "./styles";

interface ButtonBase extends ButtonProps {
    variantbutton?: "primary" | "secondary";
}

export default function ButtonBase(props: ButtonBase): React.ReactNode {
    return <Container {...props} />;
}

ButtonBase.defaultProps = {
    variantbutton: "primary",
};
