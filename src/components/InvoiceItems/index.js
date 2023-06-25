import React from 'react';
import { TableRow, TableCell } from '../Table';

function InvoiceItems() {
  return (
    <>
      <TableRow className="heading">
        <TableCell>Item</TableCell>
        <TableCell>Price</TableCell>
      </TableRow>
      <TableRow className="item last">
        <TableCell>Death Star</TableCell>
        <TableCell>1100,39 EUR</TableCell>
      </TableRow>
      <TableRow className="item last">
        <TableCell>Star destroyer</TableCell>
        <TableCell>399,99 EUR</TableCell>
      </TableRow>
    </>
  );
}

export default InvoiceItems;
