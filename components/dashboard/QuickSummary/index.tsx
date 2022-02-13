import { View, Text } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

//utility imporst
import { styles } from './style'
//end of utililty impors
const QuickSummary = () => {
  return (
    <DataTable>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title ><Text style={styles.title}>Description</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Expected</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Paid</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Balance</Text></DataTable.Title>
        

      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>ABSENT</DataTable.Cell>
        <DataTable.Cell numeric>2.00</DataTable.Cell>
        <DataTable.Cell numeric>1.00</DataTable.Cell>
        <DataTable.Cell numeric>1.00</DataTable.Cell>
      </DataTable.Row>
    </DataTable>

  )
}

export default QuickSummary