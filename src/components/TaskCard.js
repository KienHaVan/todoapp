import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import Color from '../utils/Color';
import {Img} from '../assets/images';
import CategoryCard from './CategoryCard';
import {useDispatch, useSelector} from 'react-redux';
import {toggleCompleted} from '../redux-toolkit/todoSlice';
import {useNavigation} from '@react-navigation/native';

const TaskCard = ({item}) => {
  const {name, category, completed, id} = item;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View style={styles.taskContainer}>
      <CheckBox
        value={completed}
        tintColors={{true: Color.third, false: '#292b35'}}
        onValueChange={() => dispatch(toggleCompleted(id))}
      />
      <TouchableOpacity
        style={styles.contentContainer}
        onPress={() => navigation.navigate('TaskDetail', {data: item})}>
        <Text style={styles.contentTask} numberOfLines={1}>
          {name}
        </Text>
        <View style={styles.contentMeta}>
          <Text style={styles.taskDeadline}>Today At 16:45</Text>
          <CategoryCard data={category} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  taskContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: Color.backgroundSecondary,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 5,
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
    marginBottom: 10,
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
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    backgroundColor: '#809CFF',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagText: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 21,
    color: 'white',
    marginLeft: 5,
  },
});
