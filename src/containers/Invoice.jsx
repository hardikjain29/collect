import React, { useEffect, useState, useMemo } from 'react';
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

  const { id, company, fullName, createdAt, dueAt, lineItems, email } = invoice;

  const handleItemEdit = (editedItems) => {
    // Update the line items with the edited items
    setInvoiceData({
      ...invoice,
      lineItems: editedItems
    });
  };

  const total = useMemo(() => {
    return lineItems?.reduce((acc, item) => acc + item.price, 0);
  }, [lineItems]); // Can either generate this inside <InvoiceTotal>. But choosing to do here, because I don't want to pass all the lineItems to <InvoiceTotal> component because, let's say if there's only change in the description, I don't want the InvoiceTotal to render, it should only re render, if the total changes(Hence also useMemo).

  return (
    <Table cellPadding="0" cellSpacing="0">
      <TableBody>
        <InvoiceHeader
          invoiceNumber={id}
          createdAt={createdAt}
          dueAt={dueAt}
        />
        <InvoiceInformation
          company={company}
          fullName={fullName}
          email={email}
        />
        <InvoiceItems items={lineItems} onItemEdit={handleItemEdit} />
        <InvoiceTotal total={total} />
      </TableBody>
    </Table>
  );
}

export default Invoice;
