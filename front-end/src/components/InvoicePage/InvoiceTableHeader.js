import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#90e5fc';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: '#bff0fd',
    backgroundColor: '#bff0fd',
    borderBottomWidth: 1,
    alignItems: 'center',
    height: 24,
    textAlign: 'center',
    fontStyle: 'bold',
    flexGrow: 1,
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  reference: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  designation: {
    width: '35%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  quantity: {
    width: '15%',
    borderRightColor: borderColor,
    borderRightWidth: 1,
  },
  price: {
    width: '35%',
  },
});

const InvoiceTableHeader = () => (
  <View style={styles.container}>
    <Text style={styles.reference}>Référence</Text>
    <Text style={styles.designation}>Désignation</Text>
    <Text style={styles.quantity}>Quantité</Text>
    <Text style={styles.price}>Prix Uni. TTC</Text>
  </View>
);

export default InvoiceTableHeader;
