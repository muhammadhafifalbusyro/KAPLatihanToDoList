import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  const [data, setData] = useState([
    {
      title: 'Wake up',
    },
    {
      title: 'Breakfast',
    },
    // {
    //   title: 'Wake up',
    // },
    // {
    //   title: 'Breakfast',
    // },
    // {
    //   title: 'Wake up',
    // },
    // {
    //   title: 'Breakfast',
    // },
    // {
    //   title: 'Wake up',
    // },
    // {
    //   title: 'Breakfast',
    // },
    // {
    //   title: 'Wake up',
    // },
    // {
    //   title: 'Breakfast',
    // },
    // {
    //   title: 'Wake up',
    // },
    // {
    //   title: 'Breakfast',
    // },
  ]);

  return (
    <View style={styles.container}>
      {/* Header Component */}
      <View style={styles.header}>
        <Text style={styles.titleHeader}>To Do List App</Text>
      </View>
      {/* List Component */}
      <ScrollView>
        {data.map((value, key) => {
          return (
            <View style={styles.contentWrapper} key={key}>
              {/* Label */}
              <View style={styles.label}></View>
              {/* Title */}
              <View style={styles.textWrapper}>
                <Text style={styles.text}>{value.title}</Text>
              </View>
              {/* Delete button */}
              <TouchableOpacity style={styles.buttonDelete}>
                <Icon name="trash-2" color={'white'} size={25} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* Add button */}
      <TouchableOpacity style={styles.addButton}>
        <Icon name="plus" size={25} color={'white'} />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleHeader: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  contentWrapper: {
    height: 60,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 5,
    flexDirection: 'row',
  },
  label: {
    height: 60,
    width: 15,
    backgroundColor: 'green',
  },
  textWrapper: {
    height: 60,
    flex: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    padding: 5,
  },
  text: {
    color: 'black',
  },
  buttonDelete: {
    height: 60,
    width: 40,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    height: 40,
    width: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    position: 'absolute',
    zIndex: 999,
    right: 20,
    bottom: 20,
  },
});
export default HomeScreen;
