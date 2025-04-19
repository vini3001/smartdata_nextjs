import { ButtonBase, DefaultPage } from "@/presentation/components";
import { Container } from "./styles";
import PaginatedItems from "./components/InformationPaginate";
import { Box, SvgIcon } from "@mui/material";
import { useState } from "react";
import CreateGroup from "./components/ModalCreate";
import DropdownBase from "@/presentation/components/DropdownBase";
import { ErrorField, YupService } from "@/domain/services";
import { schemaTeams } from "@/domain/models/SchemasValidations/schemaTeams";
import { Article } from "@mui/icons-material";
import ToolsBand from "@/presentation/components/ToolsBand";


export default function Information() {
    return (
        <Box>
          <ToolsBand text={"Boa noite, Felipe Santos"} sideComponent={<AddButton />} />
          <InformationBody />
        </Box>
        // <DefaultPage body={<InformationBody />} path={"Informações"}
        //     selectedIcon={undefined} text={"Boa noite, Cláudio"} 
        //     sideComponent={<AddButton />} CustomSelectedIcon={<Article />} 
        //     filters={[{id: 1, name: 'Nome', isDropdown: false, submenu: [] },
        //     {id: 2, name: 'ID do Cliente', isDropdown: false, submenu: [] },
        //     {id: 3, name: 'Origem', isDropdown: false, submenu: [] },
        //     {id: 4, name: 'Formato Destino', isDropdown: false, submenu: [] },
        //     {id: 5, name: 'Grupo', isDropdown: false, submenu: [] }]}/>
    )
}

function InformationBody() {
  const methods = YupService.useFormYup(schemaTeams);
  
  const {
  handleSubmit,
  register,
  control,
  formState: { errors },
  } = methods;
  
  return (
    <Container>
        <Box sx={{display: 'grid', paddingInline: '10px', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.7rem'}}>
          <DropdownBase props={{name: 'company', label: "Finalidade"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("company", errors)} />
          <DropdownBase props={{name: 'company', label: "Divisão"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("company", errors)} />
          <DropdownBase props={{name: 'company', label: "Departamento"}} submenu={['teste']} handleReturnValue={() => { } } register={register} error={ErrorField.parseError("company", errors)} />
        </Box>
        <PaginatedItems />
    </Container>
  )
}

function AddButton() {
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenModal() {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ButtonBase startIcon={<SvgIcon sx={{fontSize: '30px !important', marginRight: '2px'}}>
                                 <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6z" fill="#FFFFFF"></path>
                             </SvgIcon>} 
        sx={{'.MuiButton-startIcon': {marginRight: '4px'}, fontSize: '15px', alignItems: 'center', backgroundColor: '#71B475', borderRadius: '99px', paddingInline: '20px'}}
        onClick={handleOpenModal}>
        NOVO GRUPO
      </ButtonBase>
      <CreateGroup isOpen={isOpen} handleOpenModal={handleOpenModal} />
    </>
  )
}