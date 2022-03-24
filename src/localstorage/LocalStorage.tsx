import AsyncStorage from '@react-native-async-storage/async-storage';

const localStorage = {
  async getJwt() {
    try {
      const value = await AsyncStorage.getItem('@token');
      if (value !== null) {
        return value;
      }
      return '';
    } catch (e) {
      return '';
    }
  },
  async storeJwt(value: string) {
    try {
      await AsyncStorage.setItem('@token', value);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default localStorage;