import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableFooter,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Paper,
} from '@material-ui/core';
import { LogsType } from 'src/utils/types';

const useStyles = makeStyles({
  root: {
    margin: '2rem 0',
  },
  table: {
    minWidth: 650,
  },
});

interface LogsListProps {
  logs: LogsType[],
  barnId?: string | number,
}

const LogsList = ({ logs, barnId }: LogsListProps): JSX.Element => {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(1);
  const classes = useStyles();
  const showingLogs = React.useMemo(() => (
    logs.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  ), [rowsPerPage, page, logs]);

  const handlePageChange = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    newPage: number,
  ) => (
    setPage(newPage)
  );

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <TableContainer className={classes.root} component={Paper}>
      <Table className={classes.table} aria-label="logs table">
        <TableHead>
          <TableRow>
            <TableCell># de huevos recogidos</TableCell>
            <TableCell align="right">Fecha de recolección</TableCell>
            <TableCell align="right">Galpon</TableCell>
            <TableCell align="right">Gallinas productoras</TableCell>
            <TableCell align="right">Fecha del registro</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {showingLogs.map((log) => (
            <TableRow key={log.id}>
              <TableCell component="th" scope="row">
                {`${log.eggs} recogidos`}
              </TableCell>
              <TableCell align="right">{log.date}</TableCell>
              <TableCell align="right">{log.BarnId}</TableCell>
              <TableCell align="right">{log.chickensInIt}</TableCell>
              <TableCell align="right">{log.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={logs.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
};

export default LogsList;
