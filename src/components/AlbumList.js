import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import axios from 'axios'
import AlbumDetail from './AlbumDetail'
class AlbumList extends Component {

  state = {
    albums: [],
    axiosData:null
  };
  componentDidMount() {
    axios.get('https://itunes.apple.com/search?term=Michael+jackson')
    .then(response => {
      //console.log('getting data from axios', response.data);
      this.setState({
        loading: false,
        axiosData: response.data,
        albums: response.data.results
    })


   // console.log('getting albums axios...', this.state.albums);

  })
  .catch(error => {
      console.log(error);
  });
    //https://rallycoding.herokuapp.com/api/music_albums
    //console.log("hey this is willmount!!")
    //debugger;
  }
  renderAlbums() {
    console.log('getting renderAlbums axios', this.state.albums);
    return this.state.albums.map(album =>
      <AlbumDetail key={album.artistName} album={album} />
    )
  }

  render() {
    return (
      <SafeAreaView  >
        <ScrollView>
          <View>
            {this.renderAlbums()}
          </View>
        </ScrollView>
      </SafeAreaView>


    );

  };
}



export default AlbumList;
