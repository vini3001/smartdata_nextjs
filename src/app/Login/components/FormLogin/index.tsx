'use client'

import { RoutesEnum } from "@/domain/models/Enums";
import { schemaLogin } from "@/domain/models/SchemasValidations";
import { ErrorField, YupService } from "@/domain/services";
import { FormProvider, TextField } from "@/app/components";
import {
  ButtonSignIn,
  Container,
  ContainerButtonsAuth,
  ContainerEmail,
  ContainerFooter,
  ContainerPassword,
  ContainerRememberDevice,
  Content,
  FormContainer,
  ContainerTextForgot,
  CheckBoxRemember,
} from "./styles";
import LoginLayout from "../../layout";
import CheckboxChecked from "@/assets/Login/checkbox-remember/CheckboxChecked";
import CheckboxUnchecked from "@/assets/Login/checkbox-remember/CheckboxUnchecked";
import { useRouter } from "next/navigation";
import { trpc } from "@/app/_trpc/client";
import useSnack from "@/app/components/hooks/useSnack";
import React, { FormEvent, useState } from "react";

export default function FormLogin(): React.ReactNode {
  const [state, setState] = useState({ email: '', password: '' })
  const methods = YupService.useFormYup(schemaLogin);
  const router = useRouter();
  const utils = trpc.useUtils()
  const openSnack = useSnack()

  
  const { mutate } = trpc.system.signin.useMutation({
    onSuccess: data => {
      openSnack('Seja bem vindo(a)!', 'success')
      utils.system.user.refetch()
      router.push(RoutesEnum.HOME);
    },
    onError: err => openSnack(err.message, 'error'),
  })

  const run = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate(state)
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => setState({ ...state, [e.target.name]: e.target.value })

  const onSubmit = async (data: any): Promise<void> => {
    router.push(RoutesEnum.HOME);
  };

  return (
    <LoginLayout>
      <Container>
        <FormProvider methods={methods}>
          <FormContainer>
            <Content><h1>Login</h1></Content>
            <form onSubmit={run}>
              <ContainerEmail>
                <TextField
                  props={{
                    name: "email",
                    onChange: handleChange,
                    placeholder: "Insira seu e-mail",
                    sx: {'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}
                  }}
                  label="E-mail"
                  register={register}
                  error={ErrorField.parseError("email", errors)}
                />
              </ContainerEmail>

              <ContainerPassword>
                <TextField
                  props={{
                    name: "password",
                    onChange: handleChange,
                    placeholder: "Insira sua senha",
                    type: "password",
                    sx: {'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}
                  }}
                  label="Senha"
                  register={register}
                  error={ErrorField.parseError("password", errors)}
                />
              </ContainerPassword>

              <ContainerFooter>
                <ContainerRememberDevice>
                  <CheckBoxRemember defaultChecked={false} checkedIcon={<CheckboxChecked />} icon={<CheckboxUnchecked />}/>
                  <span>Lembre-se de mim</span>
                </ContainerRememberDevice>

                <ContainerTextForgot onClick={() => router.push(RoutesEnum.RECOVERY_PASSWORD)}>
                    <span>Esqueceu a senha?</span>
                </ContainerTextForgot>
              </ContainerFooter>

              <ContainerButtonsAuth>
                <ButtonSignIn
                  type="submit"
                >
                  Entrar
                </ButtonSignIn>
              </ContainerButtonsAuth>
            </form>
          </FormContainer>
        </FormProvider>
      </Container>
    </LoginLayout>
  );
}