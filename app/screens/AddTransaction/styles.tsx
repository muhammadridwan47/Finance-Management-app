import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16},
  label: {
    fontSize: 16,
    color: '#333',
    marginBottom: 7,
    marginTop: 10,
  },
  input: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#777',
    padding: 12,
  },
  btnContainer: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
  },
  btnLabel: {
    color: '#fff',
    fontWeight:'600',
  },
  btnBack: {
    color: 'green',
    fontWeight:'600',
  },
});

export default styles;

