import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HomeScreen = () => {
  // const [data, setData] = useState([
  //   {
  //     title: 'Wake up',
  //   },
  // ]);
  const [data, setData] = useState([]);
  const [activity, setActivity] = useState('');

  const addData = () => {
    setData([...data, {title: activity}]);
    setActivity('');
  };

  const deleteData = index => {
    // alert(index);
    let filterData = data.filter((value, key) => {
      //key==index
      //0==0
      // 1==0
      //2==0
      return key != index;
    });
    setData(filterData);
  };

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
              <TouchableOpacity
                style={styles.buttonDelete}
                onPress={() => deleteData(key)}>
                <Icon name="trash-2" color={'white'} size={25} />
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
      {/* Add button */}
      <View style={styles.containerInput}>
        <TextInput
          placeholder="Masukan kegiatan"
          placeholderTextColor={'grey'}
          style={styles.input}
          value={activity}
          onChangeText={text => setActivity(text)}
        />
        <TouchableOpacity style={styles.addButton} onPress={addData}>
          <Icon name="plus" size={25} color={'white'} />
        </TouchableOpacity>
      </View>
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
  containerInput: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    backgroundColor: 'white',
  },
  addButton: {
    height: 40,
    width: 40,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  input: {
    // backgroundColor: 'blue',
    flex: 1,
    color: 'black',
  },
});
export default HomeScreen;
