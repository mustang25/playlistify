import React from 'react';
import { Text, Image, View, Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import { Analytics } from 'aws-amplify-react-native';


const MusicDetail = (props) => {

    return (

        <Card>
            <CardSection>
                <View style={styles.headerContentStyle}>
                    <Text style={styles.headerTextStyle}>{props.music.name}</Text>
                    <Text>Number of Songs: {props.music.tracks.total}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image
                    source={{uri: props.music.images[0].url}}
                    style={styles.imageStyle}
                />
            </CardSection>


            <CardSection>
                <Button onPress={() => {
                    Analytics.record('OPENED-PLAYLIST');
                    Linking.openURL(props.music.external_urls.spotify);
                }}>
                    View Playlist
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

export default MusicDetail;
