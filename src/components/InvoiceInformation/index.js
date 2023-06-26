import React from 'react';
import { TableRow, TableCell } from '../Table';
import './styles.css';

function InvoiceInformation({ company, fullName, email }) {
  return (
    <TableRow className="information">
      <TableCell>
        collectAI GmbH.
        <br />
        20457 Hamburg
        <br />
        Hamburg, Germany
      </TableCell>
      <TableCell>
        {company}
        <br />
        {fullName} <br />
        {email}
      </TableCell>
    </TableRow>
  );
}

export default InvoiceInformation;
