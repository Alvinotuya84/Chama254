import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, DataTable } from 'react-native-paper'
import { mainStyles } from '../../../constants/Styles'
//utility imporst
import { styles } from './style'
import Colors from '../../../constants/Colors'
//end of utililty impors
const QuickSummary = () => {
  const [isLoading, setisLoading] = useState(true);
  const [tableData, setTableData] = useState([]);
  const getData=async()=>{
    try {
      const response=await fetch("https://reactnative.dev/movies.json");
      const jsonResult=await response.json();
      setTableData(jsonResult.movies)

      
    } catch (error) {
      console.log(error)
      
    }finally{
      setisLoading(false)
    }

  }
  useEffect(()=>{
    getData();


  },[])
  return (
    <DataTable>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title ><Text style={styles.title}>Description</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Expected</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Paid</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Balance</Text></DataTable.Title>
        

      </DataTable.Header>
      {
        isLoading?<ActivityIndicator
        size="large"  
        color={Colors.light.background}        

        style={mainStyles.activityIndicator}
        />:tableData.map((item,id)=>(   

        <DataTable.Row key={id}>
          <DataTable.Cell>{item.title}</DataTable.Cell>
          <DataTable.Cell numeric>2.00</DataTable.Cell>
          <DataTable.Cell numeric>1.00</DataTable.Cell>
          <DataTable.Cell numeric>1.00</DataTable.Cell>
        </DataTable.Row>))
      }


    </DataTable>

  )
}

export default QuickSummary