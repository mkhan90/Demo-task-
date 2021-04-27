import React from 'react';
import { Text, View, Image, ScrollView,Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button'
const AlbumDetail = ({ album }) => {

    const { title, artistName,trackName,artistViewUrl, collectionPrice,thumbnail_image,artworkUrl30,artworkUrl100, artworkUrl60, previewUrl } = album
    const { thumbnailStyle, headerContentStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles
    return (
        <ScrollView>
            <Card>
                <CardSection>
                    <View style={thumbnailContainerStyle}>
                        <Image
                            style={thumbnailStyle}
                            source={{ uri: artworkUrl30 }} />
                    </View>
                    <View style={headerContentStyle}>
                        <Text style={headerTextStyle}>{trackName}</Text>
                        <Text>{artistName}</Text>
                    </View>
                </CardSection>
                <CardSection>
                    <Image
                        style={imageStyle}
                        source={{ uri: artworkUrl100 }}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={()=> Linking.openURL(previewUrl)}>
                        Buy Now $ {collectionPrice}
                    </Button>
                </CardSection>
            </Card>
        </ScrollView>

    )
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null

    }

}
export default AlbumDetail;
