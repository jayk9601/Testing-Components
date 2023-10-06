import React from 'react';
import {Text, View} from 'react-native';
import {Button, RNText, RadioButtonGroup} from 'theme-component';

const Testing = () => {
  return (
    <View>
      <Button label="test" />
      <RNText label="test" />
      <RadioButtonGroup
        data={[
          {
            title: 'string',
            value: 's',
          },
        ]}
        onSelect={e => {
          console.log(e);
        }}
      />
    </View>
  );
};

export default Testing;
