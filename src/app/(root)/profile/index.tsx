import { DefaultPage, TextField } from "@/presentation/components";
import { ButtonPhoto, SvgIcon, ButtonProfile, CheckboxAccount, CheckboxAccountContainer, ColorPicker, ProfileContainer, SwitchContainer } from "./styles";
import svgCam from "@/presentation/assets/Profile/camera-Image width={200} height={100}.svg"
import perfilIcon  from "@/presentation/assets/Profile/user-icon.svg" 
import mailIcon  from "@/presentation/assets/Profile/mail-icon.svg" 
import passwordIcon  from "@/presentation/assets/Profile/password-icon.svg" 
import Divider from "@mui/material/Divider";
import CustomSwitchButton from "@/presentation/components/SwitchButton"
import ColorOptionChecked from "@/presentation/assets/Profile/theme-colors/ColorChecked";
import ColorOptionUnchecked from "@/presentation/assets/Profile/theme-colors/ColorUnchecked";
import React from "react";
import DropdownBase from "@/presentation/components/DropdownBase";
import CheckboxChecked from "@/presentation/assets/Profile/checkbox-account/CheckboxChecked";
import CheckboxUnchecked from "@/presentation/assets/Profile/checkbox-account/CheckboxUnchecked";
import { ButtonBase as CustomButton } from "@/presentation/components";
import ErrorModal from "@/presentation/components/Modals/ErrorModal";
import SuccessModal from "@/presentation/components/Modals/SuccessModal";
import Image from "next/image";
import { Box } from "@mui/material";
import ToolsBand from "@/presentation/components/ToolsBand";


export default function ProfilePage() {

    return (
      <Box>
        <ToolsBand text={"Boa noite, Felipe"} subTextComponent={<h3>Minhas Configurações</h3>} sideComponent={undefined} />
        <ProfileBody />
      </Box>
      //   <DefaultPage body={<ProfileBody />}
      // path={"Home / Minhas Configurações"} selectedIcon={"Home"}
      // text="Boa noite, Felipe"
      // subTextComponent={<h3>Minhas Configurações</h3>} sideComponent={undefined} CustomSelectedIcon={undefined} />
    )
}

function ProfileBody() {
  const [imagePreview, setImagePreview] = React.useState<string | null>(null);
  const [selected, setSelected] = React.useState<string | null>('Option1');
  const [isOpen, setIsOpen] = React.useState([false, false])

  const languageConfig = ['Português - Brasil']
  const worldHour = ['São Paulo / Brasil', 'California / EUA', 'Madri / Espanha', 'Munique / Alemanha']

  function handleOpenConfirmModal(modal: string) {
    modal === 'delete' ? setIsOpen([false, true]) : setIsOpen([true, false])
  }

  function handleCloseModal() {
    setIsOpen([false, false])
  }

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      };
      reader.readAsDataURL(file)
    }
  };

    return (
        <ProfileContainer>
            <section style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                <a>Avatar</a>
                <div className="profile-container">
                  <div style={{position: 'relative', width: '93px', height: '93px'}}>
                    <ButtonProfile>
                        <input id="fileInput" onChange={handleImageChange} type="file" className="input-file" />
                        {imagePreview && (
                            <Image width={200} height={100} id="preview" src={imagePreview} alt="Pré-visualização da imagem" className="image-container"/>
                        )}
                        <span>C</span>
                    </ButtonProfile >
                    <ButtonPhoto>
                            <Image width={200} height={100} src={svgCam} alt="Camera Icon" />
                    </ButtonPhoto>
                  </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <a>Claudio</a>
                        <a>Romeiro</a>
                    </div>
                </div>
            </section>
            <section className="personal-data-container">
                <div className="box1">
                    <TextField 
                      title="Nome Completo"
                      props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', paddingLeft:  '5px', backgroundColor: 'white !important'}}, placeholder: "Claudio Romeiro" , slotProps: {input: {startAdornment: <SvgIcon src={perfilIcon} />}}}}
                    />

                    <TextField 
                      title="Email"
                      props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', paddingLeft:  '5px', backgroundColor: 'white !important'}}, placeholder: "claudiomromeiro@gmail.com",slotProps: {input: {startAdornment: <SvgIcon src={mailIcon} />}}}}
                    />

                    <TextField 
                      title="Senha"
                      props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', paddingLeft:  '5px', backgroundColor: 'white !important'}}, placeholder: "Insira sua nova senha",slotProps: {input: {startAdornment: <SvgIcon src={passwordIcon} />}}}}
                    />
                </div>
                <div className="box1">
                    <TextField 
                      title="Whatsapp"
                      props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', paddingLeft:  '5px', backgroundColor: 'white !important'}}, placeholder: "Insira o seu número de Whatsapp",slotProps: {input: {startAdornment: <SvgIcon src={perfilIcon} />}}}}
                    />

                    <TextField 
                      title="Teams"
                      props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', paddingLeft:  '5px', backgroundColor: 'white !important'}}, placeholder: "Insira o seu usuário do Microsoft Teams",slotProps: {input: {startAdornment: <SvgIcon src={perfilIcon} />}}}}
                    />

                    <TextField 
                      title="Telegram"
                      props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', paddingLeft:  '5px', backgroundColor: 'white !important'}}, placeholder: "Insira o seu número do Telegram",slotProps: {input: {startAdornment: <SvgIcon src={perfilIcon} />}}}}
                    />
                </div>
            </section>
            <Divider />
            <a style={{fontWeight: 700, color: '#000000', fontSize: '14px'}}>Autenticação de envio</a>
            <section className="authentication-container">
                <SwitchContainer>
                    <div className="box">
                      <CustomSwitchButton />
                      <div className="text-container">
                        <a>Mensagem de Texto</a>
                        <span>Receber informações por SMS</span>
                      </div>
                    </div>
                    <div className="box">
                      <CustomSwitchButton />
                      <div className="text-container">
                        <a>Mensagem de Texto - PDF/Image width={200} height={100}</a>
                        <span>Receber informações por Whatsapp</span>
                      </div>
                    </div>
                </SwitchContainer>
                <SwitchContainer>
                    <div className="box">
                      <CustomSwitchButton />
                      <div className="text-container">
                        <a>Mensagem de Texto - PDF</a>
                        <span>Receber informações por EMAIL</span>
                      </div>
                    </div>
                    <div className="box">
                      <CustomSwitchButton />
                      <div className="text-container">
                        <a>Mensagem de Texto - PDF</a>
                        <span>Receber informações por Teams</span>
                      </div>
                    </div>
                </SwitchContainer>
                <SwitchContainer>
                    <div className="box">
                      <CustomSwitchButton />
                      <div className="text-container">
                        <a>Mensagem de Texto - PDF/Image width={200} height={100}</a>
                        <span>Receber informações por Telegram</span>
                      </div>
                    </div>
                </SwitchContainer>
            </section>
            <Divider />
            <section className="pickers-container">
                <div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem'}}>
                  <a style={{fontWeight: 700, color: '#000000', fontSize: '14px'}}>Cor do tema</a>
                  <span style={{fontSize: '14px'}}>Escolha seu tema preferido para o aplicativo.</span>
                </div>
                <div>
                  <ColorPicker id="Option1" checked={selected === 'Option1'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#828DD4"} />} icon={<ColorOptionUnchecked color={"#828DD4"}  />}/>
                  <ColorPicker id="Option2" checked={selected === 'Option2'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#2993DA"} />} icon={<ColorOptionUnchecked color={"#2993DA"}  />}/>
                  <ColorPicker id="Option3" checked={selected === 'Option3'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#EA6399"} />} icon={<ColorOptionUnchecked color={"#EA6399"}  />}/>
                  <ColorPicker id="Option4" checked={selected === 'Option4'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#B469DA"} />} icon={<ColorOptionUnchecked color={"#B469DA"}  />}/>
                  <ColorPicker id="Option5" checked={selected === 'Option5'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#6D8CF9"} />} icon={<ColorOptionUnchecked color={"#6D8CF9"}  />}/>
                  <ColorPicker id="Option6" checked={selected === 'Option6'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#F86116"} />} icon={<ColorOptionUnchecked color={"#F86116"}  />}/>
                  <ColorPicker id="Option7" checked={selected === 'Option7'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#299D9D"} />} icon={<ColorOptionUnchecked color={"#299D9D"}  />}/>
                  <ColorPicker id="Option8" checked={selected === 'Option8'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#595D66"} />} icon={<ColorOptionUnchecked color={"#595D66"}  />}/>
                  <ColorPicker id="Option9" checked={selected === 'Option9'} onChange={(item) => {setSelected(item.target.id)}} checkedIcon={<ColorOptionChecked color={"#55CDA0"} />} icon={<ColorOptionUnchecked color={"#55CDA0"}  />}/>
                </div>
            </section>
            <Divider />
            <section className="language-container">
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem'}}>
                  <a style={{fontWeight: 700, color: '#000000', fontSize: '14px'}}>Idioma e região</a>
                  <span style={{fontSize: '14px'}}>Personalize seu idioma e região.</span>
              </div> 
              <div style={{display: 'flex', flexDirection: 'column', width: '100%', gap: '1rem'}}>
                <DropdownBase title="Idioma" submenu={languageConfig} handleReturnValue={() => { } } props={{}} error={undefined} />
                <DropdownBase title="Fuso Horário" submenu={worldHour} handleReturnValue={() => { } } props={{}} error={undefined} />
              </div>
            </section>
            <Divider />
            <section className="preferences-container">
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.3rem'}}>
                  <a style={{fontWeight: 700, color: '#000000', fontSize: '14px'}}>Preferências</a>
                  <span style={{fontSize: '14px'}}>Gerencie suas preferências do SmartData</span>
              </div> 
              <SwitchContainer>
                <div className="box">
                  <CustomSwitchButton />
                  <div className="text-container">
                    <a>Sincronizar dados para o modo offline</a>
                    <span>Sincronize dados de tarefas em plano de fundo para poder visualizar tarefas no modo offline</span>
                  </div>
                </div>
                <div className="box">
                  <CustomSwitchButton />
                  <div className="text-container">
                    <a>Sincronizar dados para o modo offline</a>
                    <span>Sincronize dados de tarefas em plano de fundo para poder visualizar tarefas no modo offline</span>
                  </div>
                </div>
                <div className="box">
                  <CustomSwitchButton />
                  <div className="text-container">
                    <a>Sincronizar dados para o modo offline</a>
                    <span>Sincronize dados de tarefas em plano de fundo para poder visualizar tarefas no modo offline</span>
                  </div>
                </div>
                <div className="box">
                  <CustomSwitchButton />
                  <div className="text-container">
                    <a>Sincronizar dados para o modo offline</a>
                    <span>Sincronize dados de tarefas em plano de fundo para poder visualizar tarefas no modo offline</span>
                  </div>
                </div>
                <div className="box">
                  <CustomSwitchButton />
                  <div className="text-container">
                    <a>Sincronizar dados para o modo offline</a>
                    <span>Sincronize dados de tarefas em plano de fundo para poder visualizar tarefas no modo offline</span>
                  </div>
                </div>
                <div className="box">
                  <CustomSwitchButton />
                  <div className="text-container">
                    <a>Sincronizar dados para o modo offline</a>
                    <span>Sincronize dados de tarefas em plano de fundo para poder visualizar tarefas no modo offline</span>
                  </div>
                </div>
              </SwitchContainer>
            </section>
            <Divider />
            <section>
              <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
                  <a style={{fontWeight: 700, color: '#000000', fontSize: '14px'}}>Excluir conta</a>
                  <CheckboxAccountContainer>
                    <div className="box">
                      <CheckboxAccount checkedIcon={<CheckboxChecked />} icon={<CheckboxUnchecked />} />
                      <div className="text-container">
                        <a>concorda excluir sua conta no SmartData</a>
                      </div>
                    </div>
                    <CustomButton onClick={() => handleOpenConfirmModal('delete')} style={{backgroundColor: '#FF4228', borderRadius: '10px', paddingInline: '2rem', fontSize: '15px'}}><a>Excluir minha conta</a></CustomButton>
                </CheckboxAccountContainer>
              </div> 
            </section>
            <Divider />
            <section>
            <CustomButton onClick={() => handleOpenConfirmModal('save')} style={{backgroundColor: '#88D182', borderRadius: '10px', paddingInline: '2rem', fontSize: '15px'}}><a>Salvar todas as alterações</a></CustomButton>
            </section>
            {isOpen[0] && <SuccessModal description={"Olá ”Claudio” você concordou em alterar informações de sua conta SmartData."} title={"Alterações salvas"} isOpen={isOpen[0]} handleModal={handleCloseModal}/>}
            {isOpen[1] && <ErrorModal description={"Olá ”Claudio” você concordou em excluir sua conta SmartData."} title={"Conta excluída "} isOpen={isOpen[1]} handleModal={handleCloseModal}/>}
        </ProfileContainer>
    )
}