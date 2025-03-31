import { LoadingComponentContainer, LoadingComponentContent } from "./styles";


export default function LoadingPage() {
    return (
        <LoadingComponentContainer>
            <LoadingComponentContent>
                <img src="/src/presentation/assets/Loading/Loading.svg" />
            </LoadingComponentContent>
        </LoadingComponentContainer>
    )
}