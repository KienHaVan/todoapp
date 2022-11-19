/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {Img} from '../assets/images';
import Color from '../utils/Color';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {readData, storeData} from '../redux-toolkit/todoThunk';

const SplashScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    // const data = dispatch(readData());
    // console.log(data);
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 2000);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Image source={Img.SPLASH} style={styles.splashImg} />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImg: {
    width: 180,
    height: 180,
    tintColor: Color.third,
  },
});
