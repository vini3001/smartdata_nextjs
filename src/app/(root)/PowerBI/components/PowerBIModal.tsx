import { BaseModal } from "@/presentation/components";
import { ContainerModal, LeftArrow, PaperContainer, RightArrow } from "./styles";
import Carousel from 'react-multi-carousel';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Image from "next/image";

interface PowerBiModalProps {
    isOpen: boolean;
    handleModal: () => void
}

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
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

export default function PowerBiModal({isOpen, handleModal}: PowerBiModalProps) {

    return (
        <BaseModal opened={isOpen} onClose={handleModal} closeIcon={true} title="Nome do PDF" subtitle="Financeiro" children={<PowerBiBody />} />
    )
}

function PowerBiBody() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    return (
       <ContainerModal>
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
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
          </Carousel>
       </ContainerModal>
    )
}

function Item(props: any)
{
    return (
        <PaperContainer elevation={0}>
            <Image width={200} height={100} className="image-container" src="assets/Rectangle 608.png" alt={""} />
        </PaperContainer>
    )
}