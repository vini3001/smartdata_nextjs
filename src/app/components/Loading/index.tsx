import { LoadingComponentContainer, LoadingComponentContent } from "./styles";
import Image from "next/image";


export default function LoadingPage() {
    return (
        <LoadingComponentContainer>
            <LoadingComponentContent>
                <Image width={200} height={100} src="assets/Loading/Loading.svg" alt={""} />
            </LoadingComponentContent>
        </LoadingComponentContainer>
    )
}