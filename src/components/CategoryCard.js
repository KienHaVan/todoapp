/* eslint-disable curly */
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Img} from '../assets/images';

const CategoryCard = ({data}) => {
  if (!data) return;
  const {name, backgroundColor, image} = data;
  return (
    <View style={[styles.tagContainer, {backgroundColor: backgroundColor}]}>
      <Image source={image} />
      <Text style={styles.tagText}>{name}</Text>
    </View>
  );
};

export default CategoryCard;

const styles = StyleSheet.create({
  tagContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
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
