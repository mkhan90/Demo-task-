/**
 * @format
 */

import React from 'react';
import { AppRegistry, SafeAreaView, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';
const App = () => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
            <Header headetext={'Albums!'} />
            <AlbumList />
        </View>
    </SafeAreaView>


);

AppRegistry.registerComponent('UdamyApp', () => App);
