import { ErrorField } from "@/domain/services";
import { TextField } from "@/presentation/components";
import React from "react";
import { useForm } from "react-hook-form";
import {
  ButtonSendCode,
  TextFieldBox,
  TextFieldDivider,
  TwoFactorAuthanticationContainer,
} from "./style";

import { schemaTwoFactorAuth } from "@/domain/models/SchemasValidations/schemaTwoFactorAuth";
import { yupResolver } from "@hookform/resolvers/yup";

interface IFormValues {
  code1: string;
  code2: string;
  code3: string;
  code4: string;
  code5: string;
  code6: string;
}

export default function TwoFactorAuthForm(): React.ReactNode {
  const methods = useForm({
    resolver: yupResolver<IFormValues>(schemaTwoFactorAuth),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { maxLength, name, value } = event.target;
    const nextFieldName = getNextFieldName(name);
    const prevFieldName = getPrevFieldName(name);

    if (value.length === maxLength && nextFieldName) {
      const nextField = document.getElementsByName(nextFieldName)[0];
      if (nextField instanceof HTMLInputElement) {
        nextField.focus();
      }
    }

    if (value === "" && prevFieldName) {
      const prevField = document.getElementsByName(prevFieldName)[0];
      if (prevField instanceof HTMLInputElement) {
        prevField.focus();
      }
    }
  };

  const getNextFieldName = (currentFieldName: string): string | null => {
    const currentNumber = parseInt(currentFieldName.slice(-1), 10);
    const nextNumber = currentNumber + 1;

    return nextNumber <= 6 ? `code${nextNumber}` : null;
  };

  const getPrevFieldName = (currentFieldName: string): string | null => {
    const currentNumber = parseInt(currentFieldName.slice(-1), 10);
    const prevNumber = currentNumber - 1;

    return prevNumber >= 1 ? `code${prevNumber}` : null;
  };

  const onSubmit = async (data: IFormValues) => {
    const concatenatedString = Object.values(data).join("");
    console.log("Concatenated Data:", concatenatedString);
  };

  return (
    <TwoFactorAuthanticationContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextFieldBox>
          {[1, 2, 3].map((index) => (
            <React.Fragment key={index}>
              <TextField
                props={{
                  name: `code${index}`,
                  placeholder: "",
                  inputProps: { maxLength: 1, onInput: onInput },
                  // required: true,
                }}
                label=""
                register={register}
                error={ErrorField.parseError(`code${index}`, errors)}
              />
            </React.Fragment>
          ))}
          <TextFieldDivider />
          {[4, 5, 6].map((index) => (
            <TextField
              key={index}
              props={{
                name: `code${index}`,
                placeholder: "",
                inputProps: { maxLength: 1, onInput: onInput },
                // required: true,
              }}
              label=""
              register={register}
              error={ErrorField.parseError(`code${index}`, errors)}
            />
          ))}
        </TextFieldBox>
        <ButtonSendCode variantbutton="secondary" type="submit">
          Verificar código
        </ButtonSendCode>
      </form>
    </TwoFactorAuthanticationContainer>
  );
}
