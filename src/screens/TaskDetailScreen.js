import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Img} from '../assets/images';
import Color from '../utils/Color';
import {scaleSizeUI} from '../utils/scaleSizeUI';
import CategoryCard from '../components/CategoryCard';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {editTask} from '../redux-toolkit/todoSlice';

const TaskDetailScreen = ({route}) => {
  const [task, setTask] = useState('');
  const navigation = useNavigation();
  const {data} = route.params;
  const {name, id, completed, category} = data;
  const {taskItem, taskList} = useSelector(state => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    setTask(name);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleEditTask = () => {
    const newTask = {
      id,
      name: task,
      completed,
      category: taskItem.category.payload,
    };
    dispatch(editTask(newTask));
    navigation.navigate('HomeScreen');
  };
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image source={Img.CLOSE} style={styles.closeButton} />
        </TouchableOpacity>
        <Text style={styles.heading}>Edit your task</Text>
        <Text style={styles.task}>{name}</Text>
        <TextInput
          placeholder="Edit your task..."
          style={styles.taskEditing}
          placeholderTextColor={Color.primary}
          defaultValue={task}
          onChangeText={newText => setTask(newText)}
        />
        <View>
          <View style={styles.categoryContainer}>
            <Image source={Img.TAG} style={styles.tagIcon} />
            <Text style={styles.tagText}>Task Category</Text>
          </View>
          <View style={styles.tagEditContainer}>
            <CategoryCard data={taskItem.category.payload} />
            <TouchableOpacity
              style={styles.tagChooseButton}
              onPress={() => navigation.navigate('Category')}>
              <Text style={styles.tagText}>Edit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.tagEditButton} onPress={handleEditTask}>
        <Text style={styles.tagText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  heading: {
    color: Color.heading,
    fontWeight: '700',
    fontSize: 32,
    fontFamily: 'Inter',
    lineHeight: 40,
    marginTop: 20,
    marginBottom: 20,
  },
  task: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: Color.heading,
    marginBottom: scaleSizeUI(20, true),
  },
  taskEditing: {
    borderColor: Color.secondary,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 6,
    color: Color.primary,
    fontSize: 16,
    marginBottom: 25,
  },

  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  tagIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  tagText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 20,
    lineHeight: 30,
    color: Color.heading,
  },
  buttonContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Color.third,
    borderRadius: 4,
    flexShrink: 0,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagEditContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tagEditButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    backgroundColor: Color.third,
    borderRadius: 4,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagChooseButton: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    backgroundColor: Color.third,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
