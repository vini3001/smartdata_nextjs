import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from "@mui/material";
import { ListButton, TableCustom } from "./styles";
import CustomSwitchButton from "@/app/components/SwitchButton";

interface ListProps {
    currentItems: {id: number, nome: string, idade: number}[]
}

export default function List({currentItems}: ListProps) {
    return (
        <TableContainer sx={{backgroundColor: 'unset'}} component={Paper}>
            <TableCustom sx={{ minWidth: 650, borderCollapse: 'separate', borderSpacing: '10px 10px'  }} aria-label="simple table">
                <TableHead>
                    <TableRow
                        sx={{ 'td, th': { border: 0, textWrap: 'nowrap', color: '#000000', fontSize: '17px', fontWeight: 400 }, 'th': {backgroundColor: '#D6D9EF', borderRadius: '10px'} }}
                        >
                        <TableCell sx={{backgroundColor: '#D6D9EF', width: '60%'}} scope="center">Nome</TableCell>
                        <TableCell sx={{backgroundColor: '#D6D9EF'}} align="center" >Data/Hora Início</TableCell>
                        <TableCell colSpan={2} sx={{backgroundColor: '#D6D9EF', flexGrow: 1}} align="center" >Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {currentItems.map((row) => (
                    <TableRow
                    key={row.nome}
                    sx={{ 'td, th': { border: 0,  textWrap: 'nowrap', fontSize: '17px' }, 'td': {backgroundColor: 'white', borderRadius: '10px'} }}
                    >
                    <TableCell scope="row">
                        {row.nome}
                    </TableCell>
                    <TableCell align="left">{row.nome}</TableCell>
                    <TableCell sx={{padding: 0, maxWidth: '10px'}}>
                        <Tooltip title={'Editar'}>
                            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                                <ListButton>
                                    <img src="assets/Schedule/edit-icon.svg" />
                                </ListButton>
                            </Box>
                        </Tooltip>
                    </TableCell>
                    <TableCell sx={{padding: 0, maxWidth: '10px'}}>
                        <Tooltip title={'Ativar / Inativar'}>
                            <Box>
                                <CustomSwitchButton props={{}} />
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