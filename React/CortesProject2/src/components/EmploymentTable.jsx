import React, {useState} from "react";
import './Employment.css';
import getData from '../utils/getData.js';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const EmploymentTable = () => {
    const [loaded, setLoaded] = useState(false);
    const [empObj, setEmpObj] = useState();

    //go get data...
    React.useEffect(() => {
        getData('employment/employmentTable')
            .then((json) => {
                console.log(json);
                setEmpObj(json);
                setLoaded(true);
            })
    }, []);

    const columns = [
    { id: 'employer', label: 'Employer', minWidth: 170 },
    { id: 'degree', label: 'Degree', minWidth: 100 },
    {
        id: 'city',
        label: 'City',
        minWidth: 170,
    },
    {
        id: 'title',
        label: 'Title',
        minWidth: 170,
    },
    {
        id: 'startDate',
        label: 'Start Date',
        minWidth: 170,
    },
    ];

    function createData(employer, degree, city, title, startDate, id) {
        return { employer, degree, city, title, startDate, id };
    }

    const rows = empObj && empObj.employmentTable.professionalEmploymentInformation 
    ? empObj.employmentTable.professionalEmploymentInformation.map((p, index) => 
        createData(p.employer, p.degree, p.city, p.title, p.startDate, index)
    )
    : [];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  if(!loaded) return (
    <>
        <h1>...Loading Employers...</h1>
    </>
)

  return (
    <>
        <h2 id="employment">Employment Table</h2>
        
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                {columns.map((column) => (
                    <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    >
                    {column.label}
                    </TableCell>
                ))}
                </TableRow>
            </TableHead>
            <TableBody>
                    {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.employer}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number'
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                </TableBody>
            </Table>
        </TableContainer>
        <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
        </Paper>
    </>
  );
}

export default EmploymentTable;