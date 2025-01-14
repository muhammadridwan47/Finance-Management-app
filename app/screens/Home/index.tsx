import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import useHome from './useHome';

const Header = ({actions}) => (
  <View style={styles.header}>
    <Text style={styles.label}>List Transaction</Text>
    <TouchableOpacity onPress={actions.onAddTransaction}>
        <Text style={styles.btnAdd}>Add Transaction</Text>
    </TouchableOpacity>
</View>
)

const Card = ({item}) => (
  <View  key={item.key} style={styles.card}>
      <Text>ID Transaction: {item.id}</Text>
      <Text>Type: {item.type}</Text>
      <Text>Category: {item.category}</Text>
      <Text>Amount :{item.amount}</Text>
      <Text>Date :{item.date}</Text>
      <Text>description :{item.desc}</Text>
</View>
)

export default function Home() {
  const {actions, transactions} = useHome();

  return (
    <View style={styles.container}>
      <Header actions={actions} />
      <FlatList
          data={transactions}
          ListEmptyComponent={<Text style={styles.emptyState}>Have no Transaction</Text>}
          renderItem={({item}) => (
            <Card item={item}/>
          )}
        />
    </View>
  );
};
