import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ListButton, TableCustom } from "./styles";
import CustomSwitchButton from "@/pages/components/SwitchButton";
import Image from "next/image";

interface ListProps {
    currentItems: {id: number, nome: string, idade: number}[]
}

export default function List({currentItems}: ListProps) {
    return (
        <TableContainer sx={{backgroundColor: 'unset'}} component={Paper}>
            <TableCustom sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '10px 10px'  }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{height: '100%', 'td, th': { border: 0, textWrap: 'nowrap', fontSize: '15px', fontWeight: 400 }, 'th': {backgroundColor: '#D6D9EF', borderRadius: '10px'} }}
                        >
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} scope="center">Indicador</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Conceito</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Relevância</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Un. Medida</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >NRT</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Departamento</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Assunto</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Teste de Indicador</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Maturidade</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Complexidade</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Destino</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Origem</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Onda</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Tipo de Visão</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Informações</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Dimensões</TableCell>
                        <TableCell colSpan={2} sx={{backgroundColor: '#D6D9EF'}} align="center" >Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {currentItems.map((row) => (
                    <TableRow
                    key={row.nome}
                    sx={{ 'td, th': { position: 'relative' ,border: 0,  textWrap: 'nowrap', fontSize: '14px' }, 'td': {backgroundColor: 'white', borderRadius: '10px'} }}
                    >
                    <TableCell scope="row">
                        {row.nome}
                    </TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell sx={{padding: 0, minWidth: '64px'}}>
                        <ListButton>
                            <Image width={200} height={100} src="/assets/Schedule/edit-icon.svg" alt={""} />
                        </ListButton>
                    </TableCell>
                    <TableCell>
                        <CustomSwitchButton />
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </TableCustom>
        </TableContainer>
    )
}