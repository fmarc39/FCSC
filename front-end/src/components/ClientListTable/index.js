import React, { useState } from 'react';
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
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './styles.scss';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';

const columns = [
  { id: 'commercial_name', label: 'Nom commercial', minWidth: 170 },
  { id: 'first_name', label: 'Prénom', minWidth: 100 },
  { id: 'last_name', label: 'Nom de famille', minWidth: 100 },
  { id: 'subscription', label: 'Contrat', minWidth: 100 },
  { id: 'debt', label: 'Dette', minWidth: 100 },
];

function createData(
  id,
  commercial_name,
  first_name,
  last_name,
  subscription,
  debt
) {
  return { id, commercial_name, first_name, last_name, subscription, debt };
}

const useStyles = makeStyles({
  root: {
    margin: '1rem',
  },
});

const ClientTable = ({ clientData, handleCheckFilter, fetchClients }) => {
  const classes = useStyles();

  const rows = clientData.map((client) => {
    return createData(
      client.id,
      client.commercial_name,
      client.first_name,
      client.last_name,
      client.subscription ? client.subscription : <NotInterestedIcon />,
      client.debt ? `${client.debt} €` : <MoneyOffIcon />
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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxBtn = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      handleCheckFilter();
    } else {
      fetchClients();
    }
  };
  return (
    <>
      <div className="client-list">
        <div className="check-box-filter">
          <FormControlLabel
            control={
              <Checkbox
                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                checkedIcon={<CheckBoxIcon fontSize="small" />}
                checked={isChecked}
                onChange={handleCheckBoxBtn}
              />
            }
            label="Client avec une dette"
          />
        </div>
      </div>
      {clientData.length !== 0 && (
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align="center"
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
                            <TableCell key={column.id} align="center">
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
