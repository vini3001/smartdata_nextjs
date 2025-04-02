import { schemaTemplate } from "@/domain/models/SchemasValidations/schemaTemplate";
import { YupService } from "@/domain/services/YupService";
import BaseModal from "@/presentation/components/Modals/BaseModal";
import { FormButton, FormContainer } from "../styles";
import { DynamicTabs, FormProvider } from "@/presentation/components";
import React from "react";
import { ContainerModalTemplate } from "./styles";
import TemplateTeamsCarousel from "./TemplateTeams";
import { Box } from "@mui/material";
import TemplateWhatsappCarousel from "./TemplateWhatsapp";
import TemplateEmailCarousel from "./TemplateEmail";

interface TemplateProps {
    isOpen: boolean
    handleOpenModal: () => void
}

export default function ModalCreateTemplate({isOpen, handleOpenModal}: TemplateProps) {
    function closeModal() {
        handleOpenModal()
    }

    return (
        <BaseModal hasHeader={false} title="Criar Comunicação" opened={isOpen} children={<TemplateMain handleOpenModal={handleOpenModal} />} onClose={closeModal} closeIcon={true}/>
    )
}

function TemplateMain({handleOpenModal}: Pick<TemplateProps, "handleOpenModal">) {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: any, newValue: any) => {
        setValue(newValue);
    };

    const methods = YupService.useFormYup(schemaTemplate);

    const {
        handleSubmit,
        register,
        control,
        formState: { errors },
    } = methods;

    const onSubmit = async (data: any): Promise<void> => {
        handleOpenModal()
    };

    return (
       <ContainerModalTemplate>
           <FormProvider methods={methods}>
              <FormContainer>
                <DynamicTabs tabprops={{sx: {width: '50%'}}} tabs={[{name: 'EMAIL', content: <TemplateEmail handleOpenModal={handleOpenModal} />},
                                       {name: 'TEAMS', content: <TemplateTeams handleOpenModal={handleOpenModal} />},
                                       {name: 'WHATSAPP', content: <TemplateWhatsapp handleOpenModal={handleOpenModal} />}]} />          
              </FormContainer>
           </FormProvider>
       </ContainerModalTemplate>
    )
}

/*Templates */
function TemplateTeams({handleOpenModal}: Pick<TemplateProps, "handleOpenModal">) {
  return (
    <Box sx={{width: '100%'}}>
        <TemplateTeamsCarousel handleCloseModal={handleOpenModal} />
    </Box>
  )
}

function TemplateWhatsapp({handleOpenModal}: Pick<TemplateProps, "handleOpenModal">) {
    return (
      <Box sx={{width: '100%'}}>
          <TemplateWhatsappCarousel handleCloseModal={handleOpenModal} />
      </Box>
    )
}

function TemplateEmail({handleOpenModal}: Pick<TemplateProps, "handleOpenModal">) {
    return (
      <Box sx={{width: '100%'}}>
          <TemplateEmailCarousel handleCloseModal={handleOpenModal} />
      </Box>
    )
}