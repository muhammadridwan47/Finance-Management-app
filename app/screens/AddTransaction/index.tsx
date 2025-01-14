import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import useAddTransaction from './useAddTransaction';


const Input = ({label, value, onChangeText}) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <TextInput
       value={value}
       onChangeText={onChangeText}
        placeholder="Enter your expense or income..."
        style={styles.input}
      />
    </>
  );
};

const BtnSubmit = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.btnContainer} >
        <Text style={styles.btnLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

export default function AddTransaction() {
  const {actions, value} = useAddTransaction();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={actions.onBackToHome}>
        <Text style={styles.btnBack}>{'<Back'}</Text>
      </TouchableOpacity>
      <Input label="Type" value={value.type}  onChangeText={(txt: string) => actions.onChangeText(txt, 'type')}/>
      <Input label="Category" value={value.category}  onChangeText={(txt: string) => actions.onChangeText(txt, 'category')}/>
      <Input label="Amount" value={value.amount}  onChangeText={(txt: string) => actions.onChangeText(txt, 'amount')}/>
      <Input label="Description" value={value.desc}  onChangeText={(txt: string) => actions.onChangeText(txt, 'desc')}/>
      <BtnSubmit label={'Submit'} onPress={actions.onSubmit} />
    </View>
  );
}
