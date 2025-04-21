import { ContainerFields, FormButtonTemplate, TemplateBox, TemplateContainer, TemplateOptionContainer, TemplateSubLabel, TemplateWrapper } from "./styles";
import { Box, CardContent } from "@mui/material";
import TextFieldArea from "@/app/components/TextFields/TextFieldArea";
import React from "react";

interface TemplateProps {
    handleCloseModal: () => void
}


export default function TemplateWhatsappCarousel({handleCloseModal}: TemplateProps) {
    const [textOne, setTextOne] = React.useState<string>('Lorem ipsum is simply dummy text of the printing and typesetting industry.')

    const mockText = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'
    
    return (
        <TemplateContainer>
            <Box sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
                <TemplateOne textOne={textOne} />
            </Box>
            <ContainerFields>
                <TextFieldArea props={{onChange: (item: any) => {
                    item.target.value !== '' ? setTextOne(item.target.value) : setTextOne(mockText)
                    }, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, 
                    inputProps: { maxLength: 300 },
                    placeholder: 'Texto 1*', name:"text_1"}} />
                <FormButtonTemplate onClick={handleCloseModal} sx={{color: '#FF4228', borderColor: '#FF4228'}} variant="outlined">
                    Cancelar
                </FormButtonTemplate>
            </ContainerFields>
        </TemplateContainer>
    )
}

interface TemplateTexts {
    textOne: string
}

function TemplateOne({textOne}: TemplateTexts) {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: '#f0fce4'}}>
                <CardContent>
                    <img className="image-container" src="assets/Rectangle 608.png" />
                    <TemplateBox>
                       <TemplateSubLabel style={{color: 'black'}}>{textOne}</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
        </TemplateWrapper>
    )
}