import { BaseModal } from "@/presentation/components";
import { ContainerModal, PaperContainer } from "./styles";
import Carousel from 'react-material-ui-carousel'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface PowerBiModalProps {
    isOpen: boolean;
    handleModal: () => void
}

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
            NextIcon={<KeyboardArrowRightIcon style={{color: 'white'}} />}
            PrevIcon={<KeyboardArrowLeftIcon style={{color: 'white'}} />}
            height={undefined}
            autoPlay={false}
            indicators={false}
            navButtonsAlwaysVisible={true}
            fullHeightHover={false}
            navButtonsProps={{
                style: {
                    backgroundColor: '#6A81BF'
                }
            }} 
            navButtonsWrapperProps={{
                style: {
                    top: 'calc(50% - 50px)'
                }
            }}
            next={ (next, active) => console.log(`we left ${active}, and are now at ${next}`) }
            prev={ (prev, active) => console.log(`we left ${active}, and are now at ${prev}`) }
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
            <img className="image-container" src="/src/presentation/assets/Rectangle 608.png" />
        </PaperContainer>
    )
}