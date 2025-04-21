import { Box, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { ListButton, TableCustom } from "./styles";
import { MenuBook } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "@/domain/models/Enums";

interface ListProps {
    currentItems: {id: number, nome: string, idade: number}[]
}

export default function List({currentItems}: ListProps) {
    const navigate =  useNavigate()
    
    function handleNavigateFCA() {
        navigate(RoutesEnum.FCA);
    }

    return (
        <TableContainer sx={{backgroundColor: 'unset'}} component={Paper}>
            <TableCustom sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '10px 10px'  }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{ 'td, th': { border: 0, textWrap: 'nowrap', fontSize: '15px', fontWeight: 400 }, 'th': {backgroundColor: '#D6D9EF', borderRadius: '10px'} }}
                        >
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">ID</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Meta</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Dt. Lançamento</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Dt. Alteração</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Versão</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Período</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Dt. Inicial</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Dt. Final</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Previsto</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Realizado</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Usr. Cadastro</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center">Usr. Alteração</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >FCA</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {currentItems.map((row) => (
                    <TableRow
                    key={row.nome}
                    sx={{ 'td, th': { border: 0,  textWrap: 'nowrap', fontSize: '14px' }, 'td': {backgroundColor: 'white', borderRadius: '10px'} }}
                    >
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell>{row.nome}</TableCell>
                    <TableCell sx={{padding: 0, maxWidth: '10px'}}>
                       <Tooltip title={"FCA"}>
                           <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <ListButton onClick={handleNavigateFCA}>
                                    <MenuBook sx={{color: 'black'}} />
                                </ListButton>
                            </Box>
                       </Tooltip>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </TableCustom>
        </TableContainer>
    )
}