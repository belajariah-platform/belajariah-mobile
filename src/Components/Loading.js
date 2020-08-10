import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View style={Styles.loading}>
      <ActivityIndicator animating={true} color={'black'} size={40} />
    </View>
  );
};

export {Loading};

const Styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
