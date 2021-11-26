import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 36,
    textAlign: 'right',
  },
  billTo: {
    marginTop: 20,
    paddingBottom: 3,
    fontFamily: 'Helvetica-Oblique',
  },
});

const BillTo = ({ invoice }) => (
  <View style={styles.headerContainer}>
    <Text>{invoice.commercialName}</Text>
    <Text>{invoice.adress}</Text>
    <Text>{invoice.zipCode}</Text>
    <Text>{invoice.city}</Text>
  </View>
);

export default BillTo;
