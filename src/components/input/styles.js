import { StyleSheet } from 'react-native';
import { THEME } from '../../constants/theme/index';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    borderBottomColor: THEME.colors.primary,
    borderBottomWidth: 1,
    width: '90%',
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
  },
  message: {
    marginVertical: 5,
  },
  helperText: {
    fontSize: 12,
    fontFamily: 'Roboto-Regular',
    color: THEME.colors.error,
  },
});
