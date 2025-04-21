import { ListItemButton, ListItemIcon, ListItemText, Modal } from "@mui/material";
import { ButtonMic, ChatBox, ChatContainer, ChatMessageContainer, Container, ContainerSideBarBody, CustomChatButton, CustomList, ModalBody, SecondColumn } from "./styles";
import { ContainerSideBar } from "./styles";
import { Menu } from "@mui/icons-material";
import Close from "@mui/icons-material/Close";
import UserIcon from "../../PerfilIcon";
import { useLayoutEffect, useRef, useState } from "react";
import TextField from "../../TextFields/TextFieldBase";
import Image from "next/image";

interface ChatAIModalProps {
    isOpen: boolean
    handleModal: () => void
  }

export default function ModalChatAI({isOpen, handleModal}: ChatAIModalProps) {
    const [isOpenSide, setIsOpenSide] = useState<boolean>(false)
    const [permission, setPermission] = useState(false);
    //variáveis para o áudio
    const mediaRecorder = useRef<MediaRecorder>(null);
    const [recordingStatus, setRecordingStatus] = useState("inactive");
    const [audioChunks, setAudioChunks] = useState<any[]>([]);
    const [audio, setAudio] = useState<string>();
    const [stream, setStream] = useState<MediaStream>();

    async function getMicrophonePermission () {
        if ("MediaRecorder" in window) {
            try {
                const streamData: MediaStream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                    video: false,
                });
                setPermission(true);
                setStream(streamData);
            } catch (err: any) {
                alert(err.message);
            }
        } else {
            alert("O gravador não é suportado no seu navegador.");
        }
    }

    async function startRecording() {
      setRecordingStatus("recording");

      if (stream !== undefined) {
        const media = new MediaRecorder(stream, {mimeType: 'audio/webm'});


        mediaRecorder.current = media;
        mediaRecorder.current.start();
        let localAudioChunks:  any[] = [];
        mediaRecorder.current.ondataavailable = (event: any) => {
          if (typeof event.data === "undefined") return;
          if (event.data.size === 0) return;
          localAudioChunks.push(event.data);
        }

        setAudioChunks(localAudioChunks);
      } 
    };

    const stopRecording = () => {
      setRecordingStatus("inactive");

      if (mediaRecorder.current)  {

      mediaRecorder.current.stop();
      mediaRecorder.current.onstop = async () => {
        try {
          const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' })
          const audioUrl = URL.createObjectURL(audioBlob);
 
          setAudio(audioUrl);
          setAudioChunks([]);
        } catch (error: any) {
          alert(`Erro no download: ${error.message}`);
        }
      };
     }
    };
    
    function handleOpenSideBar() {
      setIsOpenSide(!isOpenSide)
    }

    useLayoutEffect(() => {
      async function verifyMicPermission() {
      if ("MediaRecorder" in window) {
        try {
            const streamData: MediaStream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            setPermission(true);
            setStream(streamData);

        } catch (err: any) {
            alert(err.message);
        }
    } }

    verifyMicPermission()
    }, [])

    return (
        <Modal open={isOpen} onClose={handleModal}>
            <Container>
              <ContainerSideBar opendrawer={isOpenSide ? "true" : "false"}>
                <div style={{ cursor: 'pointer' }} onClick={handleOpenSideBar}>
                    <Menu />
                </div>
                <ContainerSideBarBody opendrawer={isOpenSide ? "true" : "false"}>
                  <div className="box1">
                    <CustomChatButton startIcon={<Image width={200} height={100} src="assets/ChatAI/add-icon.svg" alt={""} />}>Nova Conversa</CustomChatButton>
                  </div>
                  <div className="box2">
                    <h4>Recentes</h4>
                    <CustomList>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                      <ListItemButton>
                        <ListItemIcon><Image width={200} height={100} src="assets/ChatAI/chat-icon.svg" alt={""} /></ListItemIcon>
                        <ListItemText>What is Lorem Ipsum?</ListItemText>
                      </ListItemButton>
                    </CustomList>
                  </div>
                </ContainerSideBarBody>
              </ContainerSideBar>
              <SecondColumn>
                <ModalBody>
                  <div className="title-container">
                    <h3>Pergunte à AI Smart Data</h3>
                    <span>Faça  pergunta sobre qualquer coisa que AI Smart Data</span>
                  </div>
                  <ChatContainer>
                    <ChatBox>
                       <ListItemIcon sx={{minWidth: '50px'}}>
                          <UserIcon style={{minWidth: '35px', minHeight: '35px'}} size={"medium"} />
                       </ListItemIcon>
                       <ListItemText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItemText>
                    </ChatBox>
                    <ChatBox>
                       <ListItemIcon sx={{minWidth: '50px'}}>
                          <UserIcon style={{minWidth: '35px', minHeight: '35px'}} size={"medium"} />
                       </ListItemIcon>
                       <ListItemText>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</ListItemText>
                    </ChatBox>
                  </ChatContainer>
                  <ChatMessageContainer>
                    <div style={{width: '90%'}}>
                      <TextField props={{
                        InputProps:{
                          placeholder: "Digite uma pergunta",
                          endAdornment: 
                          <div>
                            {permission && recordingStatus === "inactive" && (
                              <ButtonMic onClick={startRecording} type="button">
                                  <Image width={200} height={100} src="/assets/ChatAI/microphone-icon.svg" alt={""} />
                              </ButtonMic>
                            )}

                           {!permission && (
                            <ButtonMic onClick={getMicrophonePermission} type="button">
                              <Image width={200} height={100} src="/assets/ChatAI/microphone-icon.svg" alt={""} />
                            </ButtonMic>
                            )} 

                            {recordingStatus === "recording" && (
                            <ButtonMic style={{backgroundColor: '#828DD4'}} onClick={stopRecording} type="button">
                              <Image width={200} height={100} src="/assets/ChatAI/microphone-icon.svg" alt={""} />
                            </ButtonMic>
                            )}
                          </div>
                        },
                        sx: {'.MuiInputBase-root': {borderRadius: '51px', backgroundColor: 'white !important', paddingRight: 0, padding: '28px 0px 28px 0px'}},
                      }} />
                      <span>O AI Smart Data pode apresentar informações contidas no RISTI DATA & ANALYTCS</span>
                    </div>
                  </ChatMessageContainer>
                  <div className="close-modal" onClick={handleModal}>
                    <Close />
                  </div>
                </ModalBody>
              </SecondColumn>
            </Container>
        </Modal>
    )
}