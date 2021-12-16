import React, {useState} from 'react';
import { StyleSheet } from 'react-native';
import { Icon, Layout, Select, SelectItem } from '@ui-kitten/components';

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-forward'/>
);

const InputSelect = () => {

  const [selectedIndex, setSelectedIndex] = useState();

  return (
    <Layout style={styles.container} level='1'>
      <Select
        label='Label'
        caption='Caption'
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <SelectItem
          title='Option 1'
          accessoryLeft={StarIcon}
          accessoryRight={ForwardIcon}
        />
        <SelectItem
          title='Option 2'
          accessoryLeft={StarIcon}
          accessoryRight={ForwardIcon}
        />
        <SelectItem
          title='Option 3'
          accessoryLeft={StarIcon}
          accessoryRight={ForwardIcon}
        />
      </Select>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 128,
  },
});

export default InputSelect
