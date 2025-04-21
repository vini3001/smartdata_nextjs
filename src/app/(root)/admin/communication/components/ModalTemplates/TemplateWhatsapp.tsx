import Carousel from 'react-multi-carousel';
import { ContainerFields, FormButtonTemplate, LeftArrow, RightArrow, TemplateBox, TemplateContainer, TemplateOptionContainer, TemplateSubLabel, TemplateWrapper } from "./styles";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Box, CardContent } from "@mui/material";
import { TextField } from "@/app/components";
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


export default function TemplateWhatsappCarousel({handleCloseModal}: TemplateProps) {
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
                </Carousel>
            </Box>
            <ContainerFields>
                <TextField props={{sx:{'.MuiInputBase-root': {borderRadius: '8px', backgroundColor: 'white !important'}}, placeholder: 'Texto 1*', name:"text_1"}}/>
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
            <TemplateOptionContainer sx={{backgroundColor: '#f0fce4'}}>
                <CardContent>
                    <Image width={200} height={100} className="image-container" src="assets/Rectangle 608.png" alt={''} />
                    <TemplateBox>
                    <TemplateSubLabel style={{color: 'black'}}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</TemplateSubLabel>
                    </TemplateBox>
                </CardContent>
            </TemplateOptionContainer>
        </TemplateWrapper>
    )
}