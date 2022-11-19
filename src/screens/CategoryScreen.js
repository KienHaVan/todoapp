/* eslint-disable react/self-closing-comp */
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Color from '../utils/Color';
import {Img} from '../assets/images';
import Category from '../utils/Category';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setTaskItem} from '../redux-toolkit/todoSlice';

export const categories = [
  {
    type: 'WORK',
    payload: Category.WORK,
  },
  {
    type: 'SPORT',
    payload: Category.SPORT,
  },
  {
    type: 'DESIGN',
    payload: Category.DESIGN,
  },
  {
    type: 'UNIVERSITY',
    payload: Category.UNIVERSITY,
  },
  {
    type: 'SOCIAL',
    payload: Category.SOCIAL,
  },
  {
    type: 'MUSIC',
    payload: Category.MUSIC,
  },
  {
    type: 'HEALTH',
    payload: Category.HEALTH,
  },
  {
    type: 'MOVIE',
    payload: Category.MOVIE,
  },
  {
    type: 'HOME',
    payload: Category.HOME,
  },
];

const CategoryScreen = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => <CategoryCard data={item} />;

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => navigation.navigate(-1)}>
      <View style={styles.contentContainer}>
        <View style={styles.heading}>
          <Text style={styles.headingText}>Choose Category</Text>
        </View>
        <FlatList
          data={categories}
          numColumns={3}
          keyExtractor={item => '#' + item.type}
          renderItem={renderItem}
        />
      </View>
    </TouchableOpacity>
  );
};

const CategoryCard = ({data}) => {
  const {name, image, backgroundColor} = data.payload;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.categoryCardContainer}
      onPress={() => {
        dispatch(setTaskItem(data.payload));
        navigation.goBack();
      }}>
      <View style={[styles.categoryCard, {backgroundColor: backgroundColor}]}>
        <Image source={image}></Image>
      </View>
      <Text style={styles.categoryCardText}>{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,1)',
    zIndex: 10,
    justifyContent: 'center',
  },
  contentContainer: {
    marginHorizontal: 20,
    backgroundColor: Color.backgroundSecondary,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 8,
  },
  heading: {
    paddingBottom: 10,
    marginBottom: 15,
    borderBottomColor: Color.primary,
    borderBottomWidth: 2,
    width: '100%',
  },
  headingText: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 24,
    color: Color.heading,
    alignSelf: 'center',
  },
  categoryCardContainer: {
    alignItems: 'center',
    flex: 33.333,
    marginBottom: 16,
  },
  categoryCard: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF9680',
    borderRadius: 4,
    marginBottom: 5,
  },
  categoryCardText: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: '#fff',
  },
});
