import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../module/Home/Header';
import Color from '../utils/Color';
import Incomplete from '../module/Home/Incomplete';
import Completed from '../module/Home/Completed';
import CreateButton from '../module/Home/CreateButton';
import AddTask from '../module/Home/AddTask';
import {useDispatch, useSelector} from 'react-redux';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import AllTasks from '../module/Home/AllTasks';
import {readData, storeData} from '../redux-toolkit/todoThunk';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {taskList, showingAddTask} = useSelector(state => state.todo);
  const [type, setType] = useState(2);
  useEffect(() => {
    dispatch(storeData(taskList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskList]);
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.typeChoice}>
        <TouchableOpacity onPress={() => setType(2)}>
          <Text
            style={[
              styles.heading,
              {color: `${type === 2 ? Color.heading : Color.secondary}`},
            ]}>
            All Tasks
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType(0)}>
          <Text
            style={[
              styles.heading,
              {color: `${type === 0 ? Color.heading : Color.secondary}`},
            ]}>
            Incomplete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setType(1)}>
          <Text
            style={[
              styles.heading,
              {color: `${type === 1 ? Color.heading : Color.secondary}`},
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      {type === 0 && <Incomplete />}
      {type === 1 && <Completed />}
      {type === 2 && <AllTasks />}
      <CreateButton />
      {showingAddTask && <AddTask />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    paddingHorizontal: 16,
  },
  heading: {
    fontFamily: 'inter',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    color: Color.primary,
    marginBottom: scaleSizeUI(16, true),
  },
  typeChoice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default HomeScreen;
