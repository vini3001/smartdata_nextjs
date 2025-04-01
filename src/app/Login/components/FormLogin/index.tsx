'use client'

import { RoutesEnum } from "@/domain/models/Enums";
import { schemaLogin } from "@/domain/models/SchemasValidations";
import { ErrorField, YupService } from "@/domain/services";
import { FormProvider, TextField } from "@/presentation/components";
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
import CheckboxChecked from "@/presentation/assets/Login/checkbox-remember/CheckboxChecked";
import CheckboxUnchecked from "@/presentation/assets/Login/checkbox-remember/CheckboxUnchecked";
import { useRouter } from "next/navigation";

export default function FormLogin(): React.ReactNode {
  const methods = YupService.useFormYup(schemaLogin);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: any): Promise<void> => {
    router.push(RoutesEnum.HOME);
  };

  return (
    <LoginLayout>
      <Container>
        <FormProvider methods={methods}>
          <FormContainer>
            <Content><h1>Login</h1></Content>
            <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
              <ContainerEmail>
                <TextField
                  props={{
                    name: "email",
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
