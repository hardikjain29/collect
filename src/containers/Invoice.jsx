import React from 'react';
import { Table, TableBody } from '../components/Table';

import InvoiceHeader from '../components/InvoiceHeader';
import InvoiceInformation from '../components/InvoiceInformation';
import InvoiceItems from '../components/InvoiceItems';
import InvoiceTotal from '../components/InvoiceTotal';

function Invoice() {
  return (
    <Table cellPadding="0" cellSpacing="0">
      <TableBody>
        <InvoiceHeader />
        <InvoiceInformation />
        <InvoiceItems />
        <InvoiceTotal />
      </TableBody>
    </Table>
  );
}

export default Invoice;
