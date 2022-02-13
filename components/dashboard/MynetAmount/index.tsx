import { View, Text } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

//utility imporst
import { styles } from './style'
//end of utililty impors
const MyNetAmount = () => {
  return (
    <DataTable>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title ><Text style={styles.title}>Description</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Amount</Text></DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>BASIC DESCRIPTIONS</DataTable.Cell>
        <DataTable.Cell numeric>2</DataTable.Cell>
      </DataTable.Row>
    </DataTable>

  )
}

export default MyNetAmount