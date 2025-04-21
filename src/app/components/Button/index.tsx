import { ButtonProps } from "@mui/material";
import { Container } from "./styles";
import { JSX } from "react";

interface ButtonBase extends ButtonProps {
    variantbutton?: "primary" | "secondary";
}

export default function ButtonBase({
    variantbutton = "primary",
    ...props
}: ButtonBase): JSX.Element {
    return <Container variantbutton={variantbutton} {...props} />;
}

// ButtonBase.defaultProps = {
//     variantbutton: "primary",
// };
