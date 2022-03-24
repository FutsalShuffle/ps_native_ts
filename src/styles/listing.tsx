import {
    StyleSheet
} from 'react-native';

const ListingStyles = StyleSheet.create({
    image: {
      height: 200,
    },
    name: {
      fontSize: 14,
    },
    price: {
      fontSize: 16,
      fontWeight: 'bold'
    },
    container: {
      // flex:1,
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    miniContainer: {
      width: '46%',
      textAlign: 'center',
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      marginLeft: 10,
      marginTop: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
});

export default ListingStyles;