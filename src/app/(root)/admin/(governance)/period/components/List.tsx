import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { ListButton, TableCustom } from "./styles";
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
                        sx={{ 'td, th': { border: 0, textWrap: 'nowrap', fontSize: '15px', fontWeight: 400 }, 'th': {backgroundColor: '#D6D9EF', borderRadius: '10px'} }}
                        >
                        <TableCell sx={{backgroundColor: '#D6D9EF', width: '10%'}} align="center">ID</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Nome</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Data de Início</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Data de Término</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Tipo de Período</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Tipo Subdivisão</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Empresa</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF', width: '10%'}} align="center" >Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {currentItems.map((row) => (
                    <TableRow
                    key={row.nome}
                    sx={{ 'td, th': { border: 0,  textWrap: 'nowrap', fontSize: '14px' }, 'td': {backgroundColor: 'white', borderRadius: '10px'} }}
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
                    <TableCell sx={{padding: 0, minWidth: '64px'}}>
                        <ListButton>
                            <Image width={200} height={100} src="/assets/Schedule/edit-icon.svg" alt={""} />
                        </ListButton>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </TableCustom>
        </TableContainer>
    )
}