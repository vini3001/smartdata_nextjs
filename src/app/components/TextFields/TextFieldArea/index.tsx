import { ErrorField } from "@/domain/services";
import { TextFieldProps } from "@mui/material";
import _ from "lodash";

import { UseFormRegister } from "react-hook-form";
import { Container, Label, TextFieldCustom, Title } from "./styles"
import React from "react";

interface FieldProps {
  props: TextFieldProps;
  style?: React.CSSProperties;
  error?: ErrorField;
  register?: UseFormRegister<any>;
  label?: string;
  title?: string;
}

export default function TextFieldArea(customProps: FieldProps): React.ReactNode {
  const { props, style = undefined, error, register, label, title } = customProps;

  const name = props.name ? props.name : "";

  const makeError = (): React.ReactNode => {
    return error?.hasError ? (
      <span title={error?.message}>{error?.message}</span>
    ) : (
      <></>
    );
  };

  /*const makeIconShowPassword = (): JSX.Element => {
    if (props.type !== "password") return <></>;

    return <LockOutlinedIcon />;
  };*/

  return (
      <Container style={style}>
        {!_.isEmpty(title) && <Title>{title}</Title>}
        {!_.isEmpty(label) && <Label>{label}</Label>}
        <TextFieldCustom
          {...props}
          {...(register && register(name))}
          placeholder={props.placeholder}
          onChange={(e) => props.onChange && props.onChange(e)}
          multiline
          rows={3}
          // onBlur={(e) => props.onBlur && props.onBlur(e)}
          // ref={ props.ref && props } // assign ref prop
          error={error?.hasError}
          helperText={makeError()}
          slotProps={{
            inputLabel: {
              ...props.slotProps?.inputLabel,
              sx: { top: "-1.1vh", "&.MuiInputLabel-shrink": { top: 0 },
                    "&.Mui-focused": {color: '#828dd4'} },
            },
            input: {
              ...props.slotProps?.input,
              startAdornment: props.InputProps?.startAdornment
                && props.InputProps?.startAdornment
            }
          }}

          InputProps={{
            ...props.InputProps,
            startAdornment: props.InputProps?.startAdornment
              && props.InputProps?.startAdornment
              //: makeIconShowPassword(),
          }}
        />
      </Container>
  );
}

TextFieldArea.defaultProps = {
  register: undefined,
  label: undefined,
};
