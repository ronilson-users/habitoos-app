/** @format */

import React from 'react';
import {
 View,
 Text,
 StyleSheet,
 ToastAndroid,
 Button,
 StatusBar
} from 'react-native';

const AppToast = () => {
 const showToast = () => {
  ToastAndroid.show('Ola', ToastAndroid.SHORT);
 };

 const showToastWithGravity = () => {
  ToastAndroid.showWithGravity(
   'OI',
   ToastAndroid.SHORT,
   ToastAndroid.CENTER
  );
 };

 const showToastWithGravityAndOffset = () => {
  showToastWithGravityAndOffset(
   'ai',
   ToastAndroid.LONG,
   ToastAndroid.BOTTOM,
   25,
   20
  );
 };
 return (
  <View style={styles.container}>
   <Button
    title='Toggle Toast'
    onPress={() => showToast()}
   />

   <Button
    title='Toggle Toast With Gravity '
    onPress={() => showToastWithGravity()}
   />
   <Button
    title='Toggle Toast With Gravity & Offset'
    onPress={() =>
     showToastWithGravityAndOffset()
    }
   />
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  paddingTop: StatusBar.currentHeight,
  backgroundColor: '#88888',
  padding: 8
 }
});

export default AppToast;
