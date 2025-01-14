import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useNavAddTransaction from './useNavAddTransaction';
import { getDateNow } from '../../utils';

const initValue = {
    id: '',
    type: '',
    category: '',
    amount: '',
    date: '',
    desc: '',
};

 const useAddTransaction = () => {
    const nav = useNavAddTransaction();

    const onBackToHome = () => {
        nav.goToHome();
    };

    const dispatch = useDispatch();
    const selector = useSelector(state => state);

    const [value, setValue] = useState(initValue);


    const onChangeText = (text: string, label: string) => {
      if(label === 'type') {setValue({...value, type: text});}
      if(label === 'category') {setValue({...value, category: text});}
      if(label === 'amount') {setValue({...value, amount: text});}
      if(label === 'desc') {setValue({...value, desc: text});}
    };

    const onSetTransaction = async () => {
      const uniqId = (new Date().getTime());
      if(!selector?.data) {
        dispatch({type: 'TRANSACTION', value: [{...value, date: getDateNow(), id: uniqId}]});
      } else {
        dispatch({type: 'TRANSACTION', value: [...selector?.data, {...value, date: getDateNow(), id: uniqId}]});
      }
    };

    const onSubmit = async () => {
      onSetTransaction();
      onBackToHome();
    };

    return {
        actions: {
            onBackToHome,
            onSubmit,
            onChangeText,
        },
        value,
    };
};

export default useAddTransaction;
