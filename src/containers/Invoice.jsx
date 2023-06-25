import React, { useEffect, useState } from 'react';
import { Table, TableBody } from '../components/Table';

import InvoiceHeader from '../components/InvoiceHeader';
import InvoiceInformation from '../components/InvoiceInformation';
import InvoiceItems from '../components/InvoiceItems';
import InvoiceTotal from '../components/InvoiceTotal';
import { fetchData } from '../api';

function Invoice() {
  const [invoice, setInvoiceData] = useState({});

  const fetchInvoice = async () => {
    const invoiceData = await fetchData('https://api.jsonserver.io/invoice');
    setInvoiceData(invoiceData);
  }

  useEffect(() => {
    fetchInvoice();
  }, [])

  return (
    <Table cellPadding="0" cellSpacing="0">
      <TableBody>
        <InvoiceHeader />
        <InvoiceInformation />
        <InvoiceItems items={invoice.lineItems} />
        <InvoiceTotal />
      </TableBody>
    </Table>
  );
}

export default Invoice;
