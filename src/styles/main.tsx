import {
    StyleSheet
} from 'react-native';

const CategoryStyles = StyleSheet.create({
    input: {
      height: 40,
      margin: 10,
      padding: 8,
      borderWidth: 1,
      borderRadius: 5,
    },
    label: {
      fontSize: 16,
      marginLeft: 10
    },
    labelError: {
      fontSize: 16,
      marginLeft: 10,
      color: 'red'
    },
    button: {
      padding: 10,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'lightblue'
    }
});

export default CategoryStyles;