import { useEffect, useState } from "react";
import useNavHome from "./useNavHome";
import { useSelector } from "react-redux";

 const useHome = () => {
    const nav = useNavHome()
    const selector = useSelector(state => state);

    const [transactions, setTransactions] = useState([])

    const onAddTransaction = () => {
        nav.goToAddTransaction()
    };

    useEffect(() => {
        if(selector?.data)  setTransactions( selector?.data);
     }, [selector?.data ?? [] ])

    return {
        actions: {
            onAddTransaction,
        },
        transactions,
    }
}

export default useHome;
