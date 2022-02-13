import { View, Text } from 'react-native'
import React from 'react'
import { DataTable } from 'react-native-paper'

//utility imporst
import { styles } from './Style'
import { white } from 'react-native-paper/lib/typescript/styles/colors'
//end of utililty impors
const GenerateStatement = () => {
  return (
    <DataTable>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title ><Text style={styles.title}>Serial</Text></DataTable.Title>
        <DataTable.Title numberOfLines={2} ><Text style={styles.title}>Period</Text></DataTable.Title>
        <DataTable.Title numberOfLines={4}   ><Text style={styles.title}>Tran Date</Text></DataTable.Title>
        <DataTable.Title ><Text style={styles.title}>  Module</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Description</Text></DataTable.Title>


      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell><Text style={styles.dataText}>1000</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.dataText}>Dec 2021</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.dataText}>Dec 2021</Text></DataTable.Cell>
        <DataTable.Cell><Text style={styles.dataText}>4635N7</Text></DataTable.Cell>
        <DataTable.Cell ><Text style={styles.dataText} numberOfLines={2}>BASIC CONTRIBUTIONS	</Text></DataTable.Cell>


      </DataTable.Row>
    </DataTable>


  )
}

export default GenerateStatement