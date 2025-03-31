import { DefaultPage, TextField } from "@/presentation/components";
import { Container, HelpBox, IconImg } from "./styles";
import SearchIcon from "/src/presentation/assets/Help/lupa-icon.svg"


export default function Help() {

    return (
        <DefaultPage body={<HelpBody />}
        path={"Home / ajuda"} selectedIcon={"Home"}
        text="Boa noite, Felipe Santos"
        subTextComponent={<h3>Como podemos ajudar?</h3>} 
        sideComponent={<SearchBar />}        />
    )
}

function HelpBody() {
    return (
        <Container>
            <HelpBox>
                <h4>What is Lorem Ipsum?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </HelpBox>
            <HelpBox>
                <h4>What is Lorem Ipsum?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </HelpBox>
            <HelpBox>
                <h4>What is Lorem Ipsum?</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </HelpBox>
        </Container>
    )
}

function SearchBar() {
    return (
            <div style={{width: '30rem'}} >
            <TextField
            props={{
                sx: {
                '.MuiOutlinedInput-input::placeholder': {color: 'black', fontSize: '13px', opacity: 0.8}  
                },
                placeholder: "Buscar por Documentos",
                InputProps: {
                style: {
                    borderRadius: '47px',
                    border: 0,
                    paddingLeft: 0,
                    height: '2rem',
                    width: '100%',
                    marginTop: '2px',
                    backgroundColor: 'white',
                    color: 'black',
                    justifyContent: 'center',
                    alignItems: 'center',
                },
                startAdornment: <IconImg src={SearchIcon} />
                }
            }} />
            </div>
    )
}