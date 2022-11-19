import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../utils/Color';
import {scaleSizeUI} from '../../utils/scaleSizeUI';
import CheckBox from '@react-native-community/checkbox';
import {useSelector} from 'react-redux';
import TaskCard from '../../components/TaskCard';

const Completed = () => {
  const {taskList} = useSelector(state => state.todo);
  const data = taskList.filter(item => item.completed === true);
  const renderItem = ({item}) => <TaskCard item={item} />;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Completed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: scaleSizeUI(80, true),
  },
  heading: {
    fontFamily: 'inter',
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 18,
    color: Color.primary,
    marginBottom: scaleSizeUI(16, true),
  },
  taskContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: Color.backgroundSecondary,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  contentContainer: {
    marginLeft: 10,
    flex: 1,
  },
  contentTask: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    color: Color.primary,
    marginBottom: 5,
  },
  contentMeta: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  taskDeadline: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: Color.secondary,
  },
  tagContainer: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#809CFF',
  },
  tagText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
  },
});
