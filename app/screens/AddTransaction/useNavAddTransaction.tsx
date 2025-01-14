import { useNavigation } from '@react-navigation/native';

const useNavAddTransaction = () => {
    const nav = useNavigation();
    const goToHome = () => {
        nav.goBack();
    };

    return {
        goToHome,
    };
};

export default useNavAddTransaction;
