import { useEffect, useState } from 'react';
import useNavHome from './useNavHome';
import { useDispatch, useSelector } from 'react-redux';

 const useHome = () => {
    const nav = useNavHome();
    const selector = useSelector(state => state);
    const dispatch = useDispatch();

    const [transactions, setTransactions] = useState([]);

    const onAddTransaction = () => {
        nav.goToAddTransaction();
    };

    const onRemove = (id: string) => {
        const data = selector?.data.filter(item => item.id !== id);
        dispatch({type: 'TRANSACTION', value: data });
    };

    const onEdit = (id: string) => {
        console.log(id);
    };

    useEffect(() => {
        if(selector?.data)  {setTransactions( selector?.data);}
     }, [selector?.data ?? [] ]);

    return {
        actions: {
            onAddTransaction,
            onRemove,
            onEdit,
        },
        transactions,
    };
};

export default useHome;
