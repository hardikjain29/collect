import React from 'react';
import { TableRow, TableCell } from '../Table';

function InvoiceItems({ items }) {
  return (
    <>
      <TableRow className="heading">
        <TableCell>Item</TableCell>
        <TableCell>Price</TableCell>
      </TableRow>
      {
        items.map((item) => (
          <TableRow className="item last">
            <TableCell>{item.description}</TableCell>
            <TableCell>{item.price} EUR </TableCell>
          </TableRow>
        ))
      }
    </>
  );
}

export default InvoiceItems;
