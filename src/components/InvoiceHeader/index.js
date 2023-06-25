import React from 'react';
import { TableRow, TableCell } from '../Table';
import './style.css';

function InvoiceHeader() {
  return (
    <TableRow className="top">
      <TableCell>
        <img src="cai_logo.svg" className='logo' alt="logo" />
      </TableCell>
      <TableCell>
        Invoice #: 39291 <br />
        Created: 17/07/2021 <br />
        Due: 17/08/2021
      </TableCell>
    </TableRow>
  );
}

export default InvoiceHeader;
