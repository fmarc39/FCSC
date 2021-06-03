import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';

const columns = [
  { id: 'commercial_name', label: 'Nom commercial', minWidth: 170 },
  { id: 'first_name', label: 'Prénom', minWidth: 100 },
  { id: 'last_name', label: 'Nom de famille', minWidth: 100 },
];

function createData(id, commercial_name, first_name, last_name) {
  return { id, commercial_name, first_name, last_name };
}

const useStyles = makeStyles({
  root: {
    margin: '2rem',
  },
  container: {
    maxHeight: 440,
  },
});

const ClientTable = ({ clientData }) => {
  const classes = useStyles();

  const rows = clientData.map((client) => {
    return createData(
      client.id,
      client.commercial_name,
      client.first_name,
      client.last_name
    );
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {clientData.length !== 0 && (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      <div className="header-title"> {column.label}</div>
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        component={Link}
                        style={{ textDecoration: 'none' }}
                        to={`/client/${row.id}`}
                        name={row.id}
                        className="tableRow"
                        tabIndex={-1}
                        key={row.id}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              <div className="header-body">
                                {column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                              </div>
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
            rowsPerPageOptions={[10, 25, 50]}
            labelRowsPerPage="Résultats par page"
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      )}
    </>
  );
};

export default ClientTable;
