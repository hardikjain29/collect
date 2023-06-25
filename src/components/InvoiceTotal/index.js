import React from 'react';
import { TableRow, TableCell } from '../Table';

function InvoiceTotal() {
  return (
    <>
      <TableRow className="total">
        <TableCell></TableCell>
        <TableCell>Total: 1500,38 EUR</TableCell>
      </TableRow>
      <TableRow className="vat">
        <TableCell></TableCell>
        <TableCell>VAT (19%): 285,07 EUR</TableCell>
      </TableRow>
    </>
  );
}

export default InvoiceTotal;
