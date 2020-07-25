import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import {userLogout} from '../../Redux/Action/userAction';

function Profile(props) {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 9}}>
      <Button
        style={{
          borderRadius: 50,
          backgroundColor: '#bbbbc0',
          fontSize: 18,
          color: '#2d2d2d',
          fontWeight: 'bold',
        }}
        onPress={async () => await dispatch(userLogout())}>
        Log Out
      </Button>
    </View>
  );
}
export default Profile;

const styles = StyleSheet.create({
  button: {
    margin: 2,
  },
});
