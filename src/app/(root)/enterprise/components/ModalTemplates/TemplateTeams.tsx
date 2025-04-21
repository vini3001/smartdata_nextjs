import { ContainerFields, FormButtonTemplate, TemplateBox, TemplateCheckboxContainer, TemplateContainer, TemplateLabel, TemplateOptionContainer, TemplateSubLabel, TemplateWrapper } from "./styles";
import { Box, CardContent, Typography } from "@mui/material";
import { Checkbox, TextField } from "@/app/components";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import TextFieldArea from "@/app/components/TextFields/TextFieldArea";
import React from "react";

interface TemplateProps {
    handleCloseModal: () => void
}

export default function TemplateTeamsCarousel({handleCloseModal}: TemplateProps) {
    const [textOne, setTextOne] = React.useState<string>('Lorem ipsum is simply dummy text of the printing and typesetting industry.')
    const [textTwo, setTextTwo] = React.useState<string>('Lorem ipsum is simply dummy text of the printing and typesetting industry.')
    const [textThree, setTextThree] = React.useState<string>('Lorem ipsum is simply dummy text of the printing and typesetting industry.')

    const mockText = 'Lorem ipsum is simply dummy text of the printing and typesetting industry.'

    return (
        <TemplateContainer>
            <Box sx={{width: '100%'}}>
                <Swiper
                    slidesPerView={'auto'}
                    navigation={true}
                    freeMode={true}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Navigation]}
                >
                    <SwiperSlide><TemplateOne textOne={textOne} textTwo={textTwo} textThree={textThree} /></SwiperSlide>
                    <SwiperSlide><TemplateTwo textOne={textOne} textTwo={textTwo} textThree={textThree} /></SwiperSlide>
                    <SwiperSlide><TemplateThree textOne={textOne} textTwo={textTwo} textThree={textThree} /></SwiperSlide>
                    <SwiperSlide><TemplateFour textOne={textOne} textTwo={textTwo} textThree={textThree} /></SwiperSlide>
                </Swiper>
            </Box>
            <ContainerFields>
                <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                    <TextField props={{onChange: (item: any) => {
                        item.target.value !== '' ? setTextOne(item.target.value) : setTextOne(mockText)
                        }, inputProps: { maxLength: 100 }, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Texto 1*', name:"text_1"}}/>
                    <TextField props={{onChange: (item: any) => {
                        item.target.value !== '' ? setTextTwo(item.target.value) : setTextTwo(mockText)
                        }, inputProps: { maxLength: 100 }, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Texto 2*', name:"text_2"}}/>
                    <TextFieldArea props={{onChange: (item: any) => {
                        item.target.value !== '' ? setTextThree(item.target.value) : setTextThree(mockText)
                        }, inputProps: { maxLength: 150 }, sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Texto 3*', name:"text_3"}} />
                </Box>
                <FormButtonTemplate onClick={handleCloseModal} sx={{color: '#FF4228', borderColor: '#FF4228'}} variant="outlined">
                    Cancelar
                </FormButtonTemplate>
            </ContainerFields>
        </TemplateContainer>
    )
}

interface TemplateTexts {
    textOne: string
    textTwo: string
    textThree: string
}

function TemplateOne(textProps: TemplateTexts) {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'black'}}>
                <CardContent>
                    <img className="image-container" src="assets/Rectangle 608.png" />
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textOne}</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textTwo}</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateSubLabel>{textProps.textThree}</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
            <TemplateCheckboxContainer>
                <Checkbox props={{checked: true}} />
                <Typography>Quero este modelo</Typography>
            </TemplateCheckboxContainer>
        </TemplateWrapper>
    )
}

function TemplateTwo(textProps: TemplateTexts) {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'black'}}>
                <CardContent sx={{p: 0, pb: 0}}>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textOne}</TemplateLabel>
                    </TemplateBox>
                    <img className="image-container" src="assets/Rectangle 608.png" />
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textTwo}</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateSubLabel>{textProps.textThree}</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
            <TemplateCheckboxContainer>
                <Checkbox props={{checked: true}} />
                <Typography>Quero este modelo</Typography>
            </TemplateCheckboxContainer>
        </TemplateWrapper>
    )
}

function TemplateThree(textProps: TemplateTexts) {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'black'}}>
                <CardContent sx={{p: 0, pb: 0}}>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textOne}</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textTwo}</TemplateLabel>
                    </TemplateBox>
                    <img className="image-container" src="assets/Rectangle 608.png" />
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateSubLabel>{textProps.textThree}</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
            <TemplateCheckboxContainer>
                <Checkbox props={{checked: true}} />
                <Typography>Quero este modelo</Typography>
            </TemplateCheckboxContainer>
        </TemplateWrapper>
    )
}

function TemplateFour(textProps: TemplateTexts) {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'black'}}>
                <CardContent sx={{p: 0, pb: 0}}>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textOne}</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateLabel>{textProps.textTwo}</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox sx={{backgroundColor: 'rgb(41, 41, 41)'}}>
                    <TemplateSubLabel>{textProps.textThree}</TemplateSubLabel>
                    </TemplateBox>
                    <img className="image-container" src="assets/Rectangle 608.png" />
                </CardContent>
            </TemplateOptionContainer>
            <TemplateCheckboxContainer>
                <Checkbox props={{checked: true}} />
                <Typography>Quero este modelo</Typography>
            </TemplateCheckboxContainer>
        </TemplateWrapper>
    )
}