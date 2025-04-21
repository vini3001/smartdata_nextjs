import { BaseModal } from "@/app/components";
import { ContainerModal, PaperContainer } from "./styles";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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
            <Swiper
                slidesPerView={'auto'}
                navigation={true}
                freeMode={true}
                pagination={{
                clickable: true,
                }}
                modules={[Navigation]}
            >
                {
                    items.map( (item, i) => {
                    return <SwiperSlide key={i}><Item item={item} /></SwiperSlide> })
                }
            </Swiper>
       </ContainerModal>
    )
}

function Item(props: any)
{
    return (
        <PaperContainer elevation={0}>
            <Image width={200} height={100} className="image-container" src="/assets/Frame.svg" alt={""} />
        </PaperContainer>
    )
}