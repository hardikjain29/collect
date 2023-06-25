import React, { useEffect, useState, useMemo } from 'react';
import { Table, TableBody } from '../components/Table';

import InvoiceHeader from '../components/InvoiceHeader';
import InvoiceInformation from '../components/InvoiceInformation';
import InvoiceItems from '../components/InvoiceItems';
import InvoiceTotal from '../components/InvoiceTotal';
import DragAndDrop from '../components/DragAndDrop';
import { fetchData } from '../api';

function Invoice() {
  const [invoice, setInvoiceData] = useState({});

  const fetchInvoice = async () => {
    try {
      const invoiceData = await fetchData('https://api.jsonserver.io/invoice');
      setInvoiceData(invoiceData);
    } catch(err) {
      console.log(err);
      setInvoiceData({
        id: '',
        company: '',
        fullName: '',
        createdAt: '',
        dueAt: '',
        lineItems: [],
        email: '',
      }); // For now setting it to this, but ideally there should be an error state and user should be informed of an error.
    }
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

  const onFileUpload = (jsonData) => {
    // Assuming the file is with expected JSON here. But we should do validation before setting it to state.
    setInvoiceData(jsonData);
  }

  const total = useMemo(() => {
    return lineItems?.reduce((acc, item) => acc + item.price, 0);
  }, [lineItems]); // Can either generate this inside <InvoiceTotal>. But choosing to do here, because I don't want to pass all the lineItems to <InvoiceTotal> component because, let's say if there's only change in the description, I don't want the InvoiceTotal to re-render, it should only re render, if the total changes(Hence also useMemo).

  return (
    <>
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
      <DragAndDrop onFileUpload={onFileUpload} />
      {/* Another way is to use react-dropzone library */}
    </>
  );
}

export default Invoice;
