import React from 'react';
import { TableRow, TableCell } from '../Table';
import './styles.css';

function InvoiceInformation() {
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
        Acme, GmbH.
        <br />
        Bob Hans Jens, The Great <br />
        youknowit@star-wars-is-real.pew
      </TableCell>
    </TableRow>
  );
}

export default InvoiceInformation;
