import React from 'react';
import { View, StyleSheet } from '@react-pdf/renderer';
import InvoiceTableHeader from './InvoiceTableHeader';
import InvoiceTableRow from './InvoiceTableRow';
import InvoiceTableBlankSpace from './InvoiceTableBlankSpace';
import InvoiceTableFooter from './InvoiceTableFooter';

const tableRowsCount = 11;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 24,
    borderWidth: 1,
    borderColor: '#bff0fd',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
});

const InvoiceItemsTable = ({ items }) => (
  <View style={styles.tableContainer}>
    <InvoiceTableHeader />
    <InvoiceTableRow items={items} />
    <InvoiceTableBlankSpace rowsCount={tableRowsCount - items.length} />
    <InvoiceTableFooter items={items} />
  </View>
);

export default InvoiceItemsTable;
