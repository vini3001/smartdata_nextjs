import Radio from "@mui/material/Radio";

import { FormControlLabel, RadioProps } from "@mui/material";
import { ErrorField } from "@/domain/services/ErrorField";
import { Controller } from "react-hook-form";

interface RadioButtonProps {
  props: RadioProps;
  error?: ErrorField;
  label?: string;
  FormLabel: React.React.ReactNode
  control?: any
}

export default function RadioButton(radioButtonProps: RadioButtonProps) {
  const { props, control, FormLabel, error, label } = radioButtonProps;

  const name = props.name ? props.name : "";

  const makeError = (): React.ReactNode => {
    return error?.hasError ? (
      <span title={error?.message}>{error?.message}</span>
    ) : (
      <></>
    );
  };

  console.log(error)

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: '0.2rem'}}>
      <Controller
        name={name}
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <>
            {FormLabel}
            {error?.hasError && <span style={{fontSize: '14px', color: 'red'}} title={error?.message}>{error?.message}</span>}
          </>)} />
    </div>
  )
}
