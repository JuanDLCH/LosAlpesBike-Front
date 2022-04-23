import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MdMode, MdOutlineDeleteForever } from "react-icons/md";
import Button from '@mui/material/Button';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('ABCD001', 'Bicicleta de Monataña', '$1.200.000', 'GW'),
    createData('ABCD002', 'Rodilleras', '$25.000', 'Protection'),
    createData('ABCD003', 'Casco', '$55.000', 'Protection'),
    createData('ABCD004', 'Luz intermitente', '$43.000', 'Lights'),
    createData('ABCD005', 'Guantes', '$22.000', 'Gloves'),
];

export const Admin = () => {
    return (
        <div>
            <center>
                <h1 style={{marginTop:"2%"}}>Panel de administración</h1>
            </center>
            <TableContainer component={Paper} style={{ width: "70%", margin: '5% auto' }}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Productos: <Button variant="contained"> Añadir Nuevo </Button> </StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                            <StyledTableCell></StyledTableCell>
                        </TableRow>
                        <TableRow>
                            <StyledTableCell>Codigo</StyledTableCell>
                            <StyledTableCell align="right">Producto</StyledTableCell>
                            <StyledTableCell align="right">Precio</StyledTableCell>
                            <StyledTableCell align="right">Marca</StyledTableCell>
                            <StyledTableCell align="right">Acciones</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.name}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                <StyledTableCell align="right"> <Button variant="contained"><MdMode style={{width:'40px', height: '25px'}}/></Button><Button variant="contained" color='error'><MdOutlineDeleteForever style={{width:'40px', height: '25px'}}/></Button></StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
