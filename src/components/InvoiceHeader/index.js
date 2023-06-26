import React from 'react';
import { TableRow, TableCell } from '../Table';
import './style.css';

function InvoiceHeader({ invoiceNumber, createdAt, dueAt }) {
  return (
    <TableRow className="top">
      <TableCell>
        <img src="cai_logo.svg" className='logo' alt="logo" />
      </TableCell>
      <TableCell>
        Invoice #: {invoiceNumber} <br />
        Created: {createdAt} <br />
        Due: {dueAt}
      </TableCell>
    </TableRow>
  );
}

export default InvoiceHeader;
