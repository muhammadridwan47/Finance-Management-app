import { useEffect, useState } from 'react';
import useNavHome from './useNavHome';
import { useSelector } from 'react-redux';

 const useHome = () => {
    const nav = useNavHome();
    const selector = useSelector(state => state);

    const [transactions, setTransactions] = useState([]);

    const onAddTransaction = () => {
        nav.goToAddTransaction();
    };

    const onRemove = (id: string) => {
        console.log(id);
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
