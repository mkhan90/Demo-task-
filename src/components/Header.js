import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
// component

const Header = props => {
  const { textStyle, viewStyle, container } = styles;
  return (
    <SafeAreaView style={container}>
      <View style={viewStyle}>
        <Text style={textStyle}> {props.headetext} </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  container: {
    flex: 0,
    marginTop: 0,
    backgroundColor: '#F0FFFF',
  },
  viewStyle: {
    //backgroundColor: '#F0FFFF',
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    hight: 10,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, hight: 20 },
    shadowOpacity: 0.5,
  },
  textStyle: {
    fontSize: 30,
  },
};

export default Header;
