import { View, Text,ActivityIndicator } from 'react-native'
import React,{useEffect, useState} from 'react'
import { DataTable } from 'react-native-paper'
import Colors from '../../../constants/Colors'
//utility imporst
import { styles } from './Style'
//end of utililty impors
const GenerateStatement = () => {
  const [isLoading, setisLoading] = useState(true);
  const [tableData, setTableData] = useState([]);

  const getData=async()=>{
    try {
      const response=await fetch("https://ef0d-197-231-183-2.ngrok.io/api/products");
      const jsonResult=await response.json();
      setTableData(jsonResult)

      
    } catch (error) {
      console.log(error);

      
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
        <DataTable.Title ><Text style={styles.title}>Serial</Text></DataTable.Title>
        <DataTable.Title numberOfLines={2} ><Text style={styles.title}>Period</Text></DataTable.Title>
        <DataTable.Title numberOfLines={4}   ><Text style={styles.title}>Tran Date</Text></DataTable.Title>
        <DataTable.Title ><Text style={styles.title}>  Module</Text></DataTable.Title>
        <DataTable.Title numeric><Text style={styles.title}>Description</Text></DataTable.Title>


      </DataTable.Header>
      {isLoading?<ActivityIndicator
      color={Colors.light.background}
      />:tableData.map((item,id)=>(
          <DataTable.Row key={id}>
          <DataTable.Cell><Text style={styles.dataText}>{item.name}</Text></DataTable.Cell>
          <DataTable.Cell><Text style={styles.dataText}>Dec 2021</Text></DataTable.Cell>
          <DataTable.Cell><Text style={styles.dataText}>Dec 2021</Text></DataTable.Cell>
          <DataTable.Cell><Text style={styles.dataText}>4635N7</Text></DataTable.Cell>
          <DataTable.Cell ><Text style={styles.dataText} numberOfLines={2}>BASIC CONTRIBUTIONS	</Text></DataTable.Cell>
        </DataTable.Row>
        ))

      }


    </DataTable>


  )
}

export default GenerateStatement