"use client"

import React, { useState } from 'react';
import {
  Table, TableHead, TableBody, TableRow, TableCell,
  TableContainer, Paper, Button, TablePagination
} from '@mui/material';


const users = [
  { id: 1, name: 'A', age: 22, email: 'A@123' },
  { id: 2, name: 'B', age: 25, email: 'B@123' },
  { id: 3, name: 'C', age: 30, email: 'C@123'},
  { id: 4, name: 'D', age: 28, email: 'D@123'},
  { id: 5, name: 'E', age: 24, email: 'E@123' },
  { id: 6, name: 'F', age: 34, email: 'F@123' },
  { id: 7, name: 'G', age: 12, email: 'G@123' },
  { id: 8, name: 'H', age: 33, email: 'H@123' },
  { id: 9, name: 'I', age: 23, email: 'I@123' },
  { id: 10, name: 'J', age: 40, email: 'J@123' }

];

export default function SimpleTable() {
  const [sortedAsc, setSortedAsc] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); 

 
  const sortedUsers = [...users].sort((a, b) => {
    return sortedAsc
      ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
  });

  
  const visibleUsers = sortedUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

 
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

 
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0); 
  };

  return (
    <Paper sx={{ width: '80%', margin: '2rem auto', padding: '1rem' }}>
      <Button
        variant="contained"
        onClick={() => setSortedAsc(!sortedAsc)}
        sx={{ marginBottom: '1rem' }}
      >
        Sort by Name ({sortedAsc ? 'A-Z' : 'Z-A'})
      </Button>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {visibleUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        component="div"
        count={users.length}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[2, 3, 5]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}