import * as React from 'react';
import { BodyContent, ButtonIcon, ColorfulButton, ContainerText, CustomButton, HeaderContent, Modal, ModalContent, styleMain, styleChild, TimeContainer, BodyContentChildModal, StyledBackdrop, DayButton, ButtonContainer } from './styles';
import { Cached, Close } from '@mui/icons-material';
import { Divider, IconButton } from '@mui/material';
import DateCalendarCustom from '@/app/components/DateTimeCalendar';
import CustomSwitchButton from '@/app/components/SwitchButton';
import ManualMinuteUpdater from '@/app/components/TimePicker';
import DropdownContact from '@/app/components/DropdownBase';
import DateTimePickerCustom from '@/app/components/DateTimePicker';
import DropdownBase from '@/app/components/DropdownBase/DropdownCustom';
import { Checkbox } from '@/app/components';
import Image from "next/image";

interface ScheduleModalProps {
  isOpen: boolean
  handleModal: () => void
}

export default function ScheduleModal({isOpen, handleModal}: ScheduleModalProps) {
  const [isOpenSchedule, setIsOpenSchedule] = React.useState(false)
  const [value, setValue] = React.useState('')

  const handleClose = () => {
    handleModal()
  };

  function handleOpenModal() {
    setIsOpenSchedule(!isOpenSchedule)
  }

  function handleSetValue(item: string) {
    setValue(item)
  }

  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
  const contactOptions = ['Whatsapp', 'Email', 'Telefone', 'SMS']

  return (
        <Modal
        open={isOpen}
        disableAutoFocus
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={styleMain}>
          <HeaderContent>
            <div className='title-container'>
              <span>Agendamento</span>
              <h4>22 - Matriz de Hipóteses</h4>
            </div>
            <IconButton style={{width: '40px', height: '40px'}} onClick={() => handleClose()}>
               <Close />
            </IconButton>
          </HeaderContent>
          <Divider sx={{marginTop: '1rem', marginBottom: '1rem'}}/>
          <BodyContent>
            <div className='box1'>
                <div className='text-box'>
                  <h4 className='main-text'>Meio de comunicação</h4>
                  <a className='subtext'>Quero receber essa informação pelo:</a>
                  <DropdownContact submenu={contactOptions} handleReturnValue={handleSetValue} props={{}} error={undefined} />
                </div>
                <div className='text-box'>
                  <h4 className='main-text'>Define dia e mês</h4>
                  <a className='subtext'>Quero receber essa informação no dia:</a>
                  <DateCalendarCustom />
                </div>
            </div>
            <div className='box2'>
              <div className='text-box'>
                <h4 className='main-text'>Define o horário</h4>
                <a className='subtext'>Quero receber essa informação no horário:</a>
              </div>
              <TimeContainer>
                {weekDays.map((item) => {
                  return (
                    <div key={item} className='row1'>
                      <a>{item}</a>
                      <CustomSwitchButton />
                      <ManualMinuteUpdater />
                      <div>
                        <span>às</span>
                      </div>
                      <ManualMinuteUpdater />
                    </div>
                  )
                })}  
              </TimeContainer>
              <CustomButton onClick={handleOpenModal} startIcon={<Cached sx={{color: '#828DD4'}} />} variant='outlined'>Repetir agendamento</CustomButton>
            </div>
            <div className='box3'>
             <div className='text-box'>
                <h4 className='main-text'>Sua Definição</h4>
                <a className='subtext'>Fica definido o envio pelas ferramentas  no  dia, mes e horas</a>
                <ContainerText>
                  <span>Whatsapp -  sexta-feira  entre  às  8h00  e  9h00</span>
                  <ButtonIcon>
                      <Image width={200} height={100} src="/assets/Schedule/botao-lixeira-vermelho.svg" alt={''} />
                  </ButtonIcon>
                </ContainerText>
             </div>
             <div className='buttons-container'>
                <ColorfulButton background='purple'>Criar mais agendamento</ColorfulButton>
                <ColorfulButton background='green'>Salvar agendamento</ColorfulButton>
             </div>
            </div>
          </BodyContent>
          <ChildModal isOpen={isOpenSchedule} handleModal={handleOpenModal}/>
        </ModalContent>
      </Modal>
  );
}

function ChildModal({isOpen, handleModal}: ScheduleModalProps) {
  const [selectedDayList, setSelectedDayList] = React.useState<string[]>([])
  const [selectedPeriod, setSelectedPeriod] = React.useState('dia')
  const [pickerDate, setPickerDate] = React.useState<Date | undefined>()

  const handleClose = () => {
    handleModal();
  };

  const handlePickerDate = (day: Date | undefined)  => {
    setPickerDate(day)
  }

  const handleSelectDay = (day: string) => {
    if (selectedDayList.includes(day)) {
      setSelectedDayList([]);
    } else {
      setSelectedDayList([day])
    }
  };

  const handleSelectList = (day: string) => {
    if (selectedDayList.includes(day)) {
      const newList = selectedDayList.filter((item) => item !== day);
      setSelectedDayList(newList);
    } else {
      setSelectedDayList((prevList) => [...prevList, day])
    }
  };

  function handleSelectPeriod(item: string) {
    setSelectedPeriod(item)
  }

  const listNumber =  ['1', '2', '3', '4']
  const listOfWeek = [{id: 1, label: 'D', fullName: 'Domingo'},
  {id: 2, label: 'S', fullName: 'Segunda-feira'}, {id: 3, label: 'T', fullName: 'Terça-feira'}, 
  {id: 4, label: 'Q', fullName: 'Quarta-feira'}, {id: 5, label: 'Q', fullName: 'Quinta-feira'}, 
  {id: 6, label: 'S', fullName: 'Sexta-feira'}, {id: 7, label: 'S', fullName: 'Sábado'}]

  const listPeriod  = ['dia', 'mês', 'semana', 'ano']

  console.log(pickerDate)

  return (
    <React.Fragment>
      <Modal
        open={isOpen}
        disableAutoFocus
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        slots={{ backdrop: StyledBackdrop }}
      >
        <ModalContent sx={styleChild}>
          <HeaderContent>
            <div className='title-container'> 
              <h4>Repetir Agendamento</h4>
            </div>
            <IconButton sx={{'&.MuiIconButton-root': {padding: '5px'}}} onClick={() => handleClose()}>
               <Close />
            </IconButton>
          </HeaderContent>
          <Divider sx={{marginTop: '0.5rem', marginBottom: '0.5rem'}}/>
          <BodyContentChildModal>
              <div>
                 <DateTimePickerCustom handleDate={handlePickerDate} text='Inicio' type={'standard'} containerProps={undefined} props={{}} />
                 <span>Data que inicia repetição de envio</span>
              </div>
              <div className='box2'>
                 <a style={{marginTop: '2px'}}>Repetir a cada</a>
                 {/* Nº de repetições */}
                 <DropdownBase isNumber={true} submenu={listNumber} hidden={false} handleSetValue={() => console.log('teste')} />
                 {/* período de repetições */}
                 <DropdownBase isNumber={false} submenu={listPeriod} hidden={false} handleSetValue={handleSelectPeriod} />
              </div>
              <div className='box3'>
                  {(selectedPeriod === 'dia' || selectedPeriod === 'semana') ?
                  <div className='option1'>
                    <div className='week-container'>
                      {listOfWeek.map((item) => {
                        const isSelected = selectedDayList.includes(item.fullName)

                        return (
                          <DayButton
                            selected={isSelected ? 'true' : 'false'}
                            disableElevation
                          >
                          {selectedPeriod === 'dia' ? (
                            <ButtonContainer key={item.id} selected={isSelected ? 'true' : 'false'} onClick={() => {handleSelectList(item.fullName)}}>
                              <a>{item.label}</a>
                            </ButtonContainer>
                          ) : (
                            <ButtonContainer key={item.id} selected={isSelected ? 'true' : 'false'} onClick={() => {handleSelectDay(item.fullName)}}>
                              <a>{item.label}</a>
                            </ButtonContainer>
                          )}
                          </DayButton>
                        )
                      })}
                    </div>
                    {selectedPeriod === 'dia' ? <span>Ocorre diariamente até o: </span> : <span>Ocorre a cada {selectedDayList[0]} até o: </span>}
                  </div> : 
                  <div>
                    <div className='option2'><Checkbox props={{}}  />
                       {!pickerDate ? <>--</> : <a>No dia {pickerDate.getDate()} de {pickerDate.toLocaleString('pt-BR', { month: 'long' })}</a>}
                    </div>
                    <div className='option2'><Checkbox props={{}} />
                       {!pickerDate ? <> -- </> : <a>{pickerDate.toLocaleString('pt-BR', { weekday: 'long' }).slice(-1) === 'a' ? 'Na primeira' : 'No primeiro'} {pickerDate.toLocaleString('pt-BR', { weekday: 'long' })}</a>}
                    </div>
                    {selectedPeriod === 'mês' ? <span>Ocorre dia {!pickerDate ? '' : pickerDate.getDate()} até o: </span> : <span>Ocorre todo dia {selectedDayList[0]} até o: </span>}
                  </div>
                  }
                <DateTimePickerCustom handleDate={handlePickerDate} text='Término' type={'standard'} containerProps={undefined} props={{}} />
                <div className='subtext-container'>
                  <span>Data que termina repetição de envio</span>
                  <span style={{color: '#828DD4', cursor: 'pointer'}}>Remover data de término</span>
                </div>
                <div className='buttons-container'>
                  <div className='button1'>
                    <ColorfulButton background='green'>Salvar</ColorfulButton>
                    <ColorfulButton background='purple'>Descartar</ColorfulButton>
                  </div>
                  <div className='button2'>
                    <ColorfulButton background='neutral'>Remover</ColorfulButton>
                  </div>
                </div>
              </div>
          </BodyContentChildModal>
        </ModalContent>
      </Modal>
    </React.Fragment>
  )
}