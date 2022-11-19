import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Color from '../../utils/Color';
import {scaleSizeUI} from '../../utils/scaleSizeUI';
import TaskCard from '../../components/TaskCard';
import {useSelector} from 'react-redux';

const Incomplete = () => {
  const {taskList} = useSelector(state => state.todo);
  const data = taskList.filter(item => item.completed === false);
  const renderItem = ({item}) => <TaskCard item={item} />;

  return (
    <View style={styles.constainer}>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Incomplete;

const styles = StyleSheet.create({
  constainer: {
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
});
