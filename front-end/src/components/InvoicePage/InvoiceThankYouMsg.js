import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'column',
    marginTop: 16,
  },
  reportTitle: {
    fontSize: 12,
    textAlign: 'left',
  },
});

const InvoiceThankYouMsg = () => (
  <View style={styles.titleContainer}>
    <Text style={styles.reportTitle}>
      Pas de pénalité de retard - Pas d'escopte en cas de paiement anticipé
    </Text>
    <Text style={styles.reportTitle}>
      Association loi 1901 non assujettie à la TVA
    </Text>
  </View>
);

export default InvoiceThankYouMsg;
