import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Color from '../../utils/Color';
import {useDispatch} from 'react-redux';
import {deleteCompleted, showAddTask} from '../../redux-toolkit/todoSlice';

const CreateButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <TouchableOpacity
        style={styles.deleteContainer}
        onPress={() => dispatch(deleteCompleted())}>
        <Text style={styles.delete}>DELETE COMPLETED</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.container}
        onPress={() => dispatch(showAddTask())}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default CreateButton;

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: Color.third,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 20,
  },
  plus: {
    fontWeight: '400',
    fontSize: 30,
    color: 'white',
  },
  deleteContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#dc3545',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  delete: {
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
});
