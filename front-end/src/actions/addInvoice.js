export const EDITINVOICEMODAL = 'EDITINVOICEMODAL';
export const EDITINVOICEMODALITEMS = 'EDITINVOICEMODALITEMS';

export const editInvoiceModal = (fieldName, value) => ({
  type: EDITINVOICEMODAL,
  fieldName,
  value,
});

export const editInvoiceModalModalItems = (fieldName, value) => ({
  type: EDITINVOICEMODALITEMS,
  fieldName,
  value,
});
