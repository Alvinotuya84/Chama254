import * as React from 'react';
import { ScrollView, Text } from 'react-native';
import { DataTable } from 'react-native-paper';
import { styles } from './style';

const numberOfItemsPerPageList = [2, 3, 4];

const items = [
    {
        key: 0,
        name: 'Page 1',
      },
  {
    key: 1,
    name: 'Page 2',
  },
  {
    key: 2,
    name: 'Page 3',
  },
  {
    key: 3,
    name: 'Page 4',
  },
];

const MyFines = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

  React.useEffect(() => {
     setPage(0);
  }, [numberOfItemsPerPage]);

  return (
      <ScrollView horizontal>
    <DataTable>
      <DataTable.Header style={styles.tableHeader}>
        <DataTable.Title style={styles.titleHolder} ><Text style={styles.title}>Invoice Date</Text></DataTable.Title>
        <DataTable.Title  style={styles.titleHolder}><Text style={styles.title}>Fine Name</Text></DataTable.Title>
        <DataTable.Title  style={styles.titleHolder} ><Text style={styles.title}>Fine Amount</Text></DataTable.Title>
        <DataTable.Title style={styles.titleHolder}><Text style={styles.title}>  Ref No</Text></DataTable.Title>
        <DataTable.Title style={styles.titleHolder}><Text style={styles.title}>Payment Date</Text></DataTable.Title>
        <DataTable.Title style={styles.titleHolder}><Text style={styles.title}>Amount Paid</Text></DataTable.Title>
        <DataTable.Title style={styles.titleHolder}><Text style={styles.title}>Payment Ref </Text></DataTable.Title>
        <DataTable.Title style={styles.titleHolder}><Text style={styles.title}>Method</Text></DataTable.Title>
        <DataTable.Title style={styles.titleHolder}><Text style={styles.title}>Balance</Text></DataTable.Title>


        


      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfga</Text></DataTable.Cell>
        <DataTable.Cell style={styles.dataTextHolder}><Text style={styles.dataText} >asdfsfgavj</Text></DataTable.Cell>





      </DataTable.Row>
    </DataTable>


{/* 
                                <DataTable.Pagination
                                page={page}
                                numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
                                onPageChange={page => setPage(page)}
                                label={`${from + 1}-${to} of ${items.length}`}
                                showFastPaginationControls
                                numberOfItemsPerPageList={numberOfItemsPerPageList}
                                numberOfItemsPerPage={numberOfItemsPerPage}
                                onItemsPerPageChange={onItemsPerPageChange}
                                selectPageDropdownLabel={'Rows per page'}
                                /> */}

      </ScrollView>

  );
};

export default MyFines;