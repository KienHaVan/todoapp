/* eslint-disable react/self-closing-comp */
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Color from '../../utils/Color';
import {Img} from '../../assets/images';
import {scaleSizeUI} from '../../utils/scaleSizeUI';
import {useDispatch, useSelector} from 'react-redux';
import {addTask, showAddTask} from '../../redux-toolkit/todoSlice';
import {useNavigation} from '@react-navigation/native';
import CategoryCard from '../../components/CategoryCard';

const AddTask = () => {
  const navigation = useNavigation();
  const [task, setTask] = useState('');
  const {taskList, taskItem} = useSelector(state => state.todo);

  const dispatch = useDispatch();
  const handleAddTask = () => {
    const newTask = {
      id: taskList.length + 1,
      name: task,
      completed: false,
      category: taskItem.category.payload,
    };
    dispatch(addTask(newTask));
    dispatch(showAddTask());
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => dispatch(showAddTask())}>
      <TouchableWithoutFeedback>
        <View style={styles.contentContainer}>
          <Text style={styles.contentHeading}>Add Task</Text>
          <Text style={styles.contentTask}>{task || 'Your task here'}</Text>
          <TextInput
            placeholder="Enter your task..."
            style={styles.contentInput}
            placeholderTextColor={Color.secondary}
            onChangeText={newText => setTask(newText)}
            value={task}></TextInput>
          <View style={styles.contentMeta}>
            <View style={styles.contentMetaLeft}>
              {/* <Image source={Img.TIMER} style={styles.contentMetaIcon}></Image> */}
              <View style={[styles.categoryContainer]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Category')}
                  activeOpacity={1}>
                  <Image
                    source={Img.TAG}
                    style={styles.contentMetaIcon}></Image>
                </TouchableOpacity>
                <CategoryCard data={taskItem.category.payload} />
              </View>
            </View>
            <TouchableOpacity onPress={handleAddTask}>
              <Image source={Img.SEND} style={styles.contentMetaIcon}></Image>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </TouchableOpacity>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: 10,
  },
  contentContainer: {
    padding: 25,
    backgroundColor: Color.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentHeading: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 26,
    lineHeight: 30,
    color: Color.heading,
    marginBottom: scaleSizeUI(20, true),
  },
  contentTask: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: Color.heading,
    marginBottom: scaleSizeUI(20, true),
  },
  contentInput: {
    borderColor: Color.secondary,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    color: Color.primary,
    fontSize: 16,
    marginBottom: 25,
  },
  contentMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentMetaLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentMetaIcon: {
    width: 30,
    height: 30,
    marginRight: 8,
  },
});
