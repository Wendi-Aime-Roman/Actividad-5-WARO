import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable() {

  const rows = [
    { nombre: "Aimé", apellido: "Román", edad: 21 },
    { nombre: "Brenda", apellido: "Tirado", edad: 17 },
    { nombre: "Luis", apellido: "Medina", edad: 22 },
    { nombre: "Kasandra", apellido: "Lizarraga", edad: 16 },
    { nombre: "Carlos", apellido: "Osuna", edad: 25 },
    { nombre: "Leslie", apellido: "Valenzuela", edad: 19 }
  ];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.nombre}</TableCell>
              <TableCell>{row.apellido}</TableCell>
              <TableCell>{row.edad}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}