import React from 'react';
import { TableRow, TableCell } from '../Table';

function InvoiceTotal({ total = 0 }) {
  const VAT_PERCENTAGE = 19;
  const calculateVAT = (vatPercentage) => (total * vatPercentage) / 100;
  return (
    <>
      <TableRow className="total">
        <TableCell></TableCell>
        <TableCell>Total: {total} EUR</TableCell>
      </TableRow>
      <TableRow className="vat">
        <TableCell></TableCell>
        <TableCell>VAT ({VAT_PERCENTAGE}%): {calculateVAT(VAT_PERCENTAGE).toFixed(2)} EUR</TableCell> 
        {/* Since VAT for now is fixed, we define it on the top, if it was dynamic, we could pass it to the function from props and you would get the dynamic value */}
      </TableRow>
    </>
  );
}

export default InvoiceTotal;
