import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', padding: 16},
  label: {
    fontSize: 16,
    color: '#333',
  },
  emptyState: {textAlign: 'center', marginTop: 80, fontSize: 16, color: '#333'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  btnAdd: {
    fontSize: 16,
    color: 'green',
  },
  card: {
    backgroundColor: '#E3DEDE',
    borderRadius: 8,
    marginTop: 10,
    padding: 10,
  },
});

export default styles;
