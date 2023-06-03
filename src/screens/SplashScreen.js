import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Icon name="book-open" size={100} color={'green'} />
      <Text style={styles.title}>To Do List App</Text>
      <ActivityIndicator
        size={'small'}
        color={'green'}
        style={styles.loading}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'green',
    fontSize: 25,
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 10,
  },
});

export default SplashScreen;
