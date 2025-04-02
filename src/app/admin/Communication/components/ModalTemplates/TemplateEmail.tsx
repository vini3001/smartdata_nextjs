import Carousel from 'react-multi-carousel';
import { ContainerFields, FormButtonTemplate, LeftArrow, RightArrow, TemplateBox, TemplateContainer, TemplateLabel, TemplateOptionContainer, TemplateSubLabel, TemplateWrapper } from "./styles";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, CardContent } from "@mui/material";
import { TextField } from "@/presentation/components";
import Image from "next/image";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const LeftArrowIcon = ({ onClick }: any) => {
    return (
        <LeftArrow onClick={onClick}>
            <KeyboardArrowLeftIcon sx={{color: 'white'}} />
        </LeftArrow>
    );
  };

  const RightArrowIcon = ({ onClick }: any) => {
    return (
        <RightArrow onClick={onClick}>
            <KeyboardArrowRightIcon sx={{color: 'white'}} />
        </RightArrow>
    );
  };

interface TemplateProps {
    handleCloseModal: () => void
}

export default function TemplateEmailCarousel({handleCloseModal}: TemplateProps) {
    return (
        <TemplateContainer>
            <Box sx={{width: '100%'}}>
            <Carousel
                    containerClass='carousel-container'
                    responsive={responsive}
                    autoPlay={false}
                    infinite={false}
                    partialVisbile={false}
                    customLeftArrow={<LeftArrowIcon />}
                    customRightArrow={<RightArrowIcon />}
                    swipeable={true}
                    draggable={true}
                    itemClass='container-item'
                    showDots={false}
                    >
                        <TemplateOne />
                        <TemplateTwo />
                        <TemplateThree />
                        <TemplateFour />
                </Carousel>
            </Box>
            <ContainerFields>
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Texto 1*', name:"text_1"}}/>
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Texto 2*', name:"text_2"}}/>
                <FormButtonTemplate onClick={handleCloseModal} sx={{color: '#FF4228', borderColor: '#FF4228'}} variant="outlined">
                    Cancelar
                </FormButtonTemplate>
            </ContainerFields>
        </TemplateContainer>
    )
}

function TemplateOne() {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'rgb(245, 245, 245)'}}>
                <CardContent>
                    <Image width={200} height={100} className="image-container" src="/assets/Rectangle 608.png" alt={''} />
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox>
                    <TemplateSubLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
        </TemplateWrapper>
    )
}

function TemplateTwo() {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'rgb(245, 245, 245)'}}>
                <CardContent sx={{p: 0, pb: 0}}>
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <Image width={200} height={100} className="image-container" src="/assets/Rectangle 608.png" alt={''} />
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox>
                    <TemplateSubLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
        </TemplateWrapper>
    )
}

function TemplateThree() {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'rgb(245, 245, 245)'}}>
                <CardContent sx={{p: 0, pb: 0}}>
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <Image width={200} height={100} className="image-container" src="/assets/Rectangle 608.png" alt={''} />
                    <TemplateBox>
                    <TemplateSubLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
        </TemplateWrapper>
    )
}

function TemplateFour() {
    return (
        <TemplateWrapper elevation={0}>
            <TemplateOptionContainer sx={{backgroundColor: 'rgb(245, 245, 245)'}}>
                <CardContent sx={{p: 0, pb: 0}}>
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox>
                    <TemplateLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateLabel>
                    </TemplateBox>
                    <TemplateBox>
                    <TemplateSubLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateSubLabel>
                    </TemplateBox>
                    <Image width={200} height={100} className="image-container" src="/assets/Rectangle 608.png" alt={''} />
                </CardContent>
            </TemplateOptionContainer>
        </TemplateWrapper>
    )
}