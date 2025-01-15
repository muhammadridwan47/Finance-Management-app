import { useNavigation } from '@react-navigation/native';

const useNavHome = () => {
    const nav = useNavigation();
    const goToAddTransaction = () => {
        nav.navigate('AddTransaction');
    };

    return {
        goToAddTransaction,
    };
};

export default useNavHome;
