import React from 'react';
import { Text, Image} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const MusicDetail = (props) => {
    let image = props.music['images'][0].url;
    console.log(image);
    return (

        <Card>
            <CardSection>
                <Text>{props.music.name}</Text>
            </CardSection>
            <Image
                style={{width: 365, height: 365, justifyContent: 'center'}}
                source={{uri: props.music['images'][0].url}}
            />
        </Card>

    );
};

export default MusicDetail;
