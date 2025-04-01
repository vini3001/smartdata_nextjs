'use client'

import { RoutesEnum } from "@/domain/models/Enums";
import { schemaForgetPassword } from "@/domain/models/SchemasValidations/schemaForgetPassword";
import { ErrorField, YupService } from "@/domain/services";
import { FormProvider, TextField } from "@/presentation/components";
import {
  ButtonSignIn,
  Container,
  ContainerButtonsAuth,
  ContainerEmail,
  Content,
  FormContainer,
} from "./styles";
import LoginLayout from "../layout";
import { useState } from "react";
import ErrorModal from "@/presentation/components/Modals/ErrorModal";
import { useRouter } from "next/navigation";

export default function FormRecoveryPassword(): React.ReactNode {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const methods = YupService.useFormYup(schemaForgetPassword);
  const router = useRouter();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  const onSubmit = async (data: any): Promise<void> => {
    setIsOpen(!isOpen)
    router.push(RoutesEnum.LOGIN);
  };
  
  return (
    <LoginLayout>
      <Container>
        <FormProvider methods={methods}>
          <FormContainer>
            <Content><h1>Esqueceu sua senha?</h1></Content>
            <form onSubmit={handleSubmit((data: any) => onSubmit(data))}>
              <ContainerEmail>
                <TextField
                  props={{
                    sx: {'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}},
                    name: "email",
                    placeholder: "Insira seu e-mail"
                  }}
                  label="E-mail"
                  register={register}
                  error={ErrorField.parseError("email", errors)}
                />
              </ContainerEmail>

              <ContainerButtonsAuth>
                <ButtonSignIn
                  type="submit"
                >
                  Enviar
                </ButtonSignIn>
              </ContainerButtonsAuth>
            </form>
            <ErrorModal description={"Preencha  seu email ou senha correto!"} title={"Houve un erro!"} isOpen={isOpen} handleModal={() => {setIsOpen(!isOpen)}}/>
          </FormContainer>
        </FormProvider>
      </Container>
    </LoginLayout>
  );
}
