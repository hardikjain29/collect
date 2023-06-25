import React from 'react';
import { TableRow, TableCell } from '../Table';

function InvoiceItems({ items = [], onItemEdit }) {
  const handleDescriptionChange = (index, e) => {
    const updatedItems = [...items];
    updatedItems[index].description = e.target.value;
    onItemEdit(updatedItems);
  };

  const handlePriceChange = (index, e) => {
    const updatedItems = [...items];
    updatedItems[index].price = parseFloat(e.target.value);
    onItemEdit(updatedItems);
  };

  return (
    <>
      <TableRow className="heading">
        <TableCell>Item</TableCell>
        <TableCell>Price</TableCell>
      </TableRow>
      {items.map((item, index) => (
        <TableRow className="item last" key={index}>
          <TableCell>
            <input
              type="text"
              value={item.description}
              onChange={(e) => handleDescriptionChange(index, e)}
            />
          </TableCell>
          <TableCell>
            <input
              type="number"
              step="0.01"
              value={item.price}
              onChange={(e) => handlePriceChange(index, e)}
            />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}

export default InvoiceItems;
