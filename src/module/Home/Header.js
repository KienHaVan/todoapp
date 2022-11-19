import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {scaleSizeUI} from '../../utils/scaleSizeUI';
import Color from '../../utils/Color';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';

const Header = () => {
  const {taskList} = useSelector(state => state.todo);
  const incomplete = taskList.filter(item => item.completed === false).length;
  const completed = taskList.filter(item => item.completed === true).length;
  var now = dayjs().format('MMMM DD, YYYY');
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{now}</Text>
      <View style={styles.taskManager}>
        <Text style={styles.text}>
          <Text style={styles.specialText}>{incomplete}</Text> incomplete
        </Text>
        <Text style={styles.text}>
          <Text style={styles.specialText}>{completed}</Text> completed
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: scaleSizeUI(50, true),
    paddingBottom: scaleSizeUI(16, true),
    marginBottom: scaleSizeUI(16, true),
    borderBottomColor: Color.secondary,
    borderBottomWidth: 2,
    flexShrink: 0,
  },
  heading: {
    color: Color.heading,
    fontWeight: '700',
    fontSize: 32,
    fontFamily: 'Inter',
    marginBottom: 8,
    lineHeight: 40,
  },
  taskManager: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Color.secondary,
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 17,
    marginRight: 20,
  },
  specialText: {
    color: Color.heading,
  },
});
