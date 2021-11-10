import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 24,
    borderRadius: '10px',
  },
  reportTitle: {
    color: '#61dafb',
    letterSpacing: 4,
    fontSize: 20,
    textAlign: 'left',
    textTransform: 'uppercase',
  },
});

const InvoiceTitle = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>FCSC</Text>
    <Text>23 RUE CARNOT</Text>
    <Text>39200 SAINT CLAUDE</Text>
    <Text>EMAIL: commercial.fcsc@gmail.com</Text>
    <Text>Site internet : www.saintclauderugby.fr</Text>
    <Text>S.I.R.E.T : 334569282000... N.A.F : 9312Z</Text>
  </View>
);

export default InvoiceTitle;
