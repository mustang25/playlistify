import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import Amplify, { API } from 'aws-amplify-react-native';
import MusicDetail from "./MusicDetail";

class MusicList extends Component {
    state = {
        music: []
    };

    componentWillMount() {
        axios.get('https://mj5481ufy5.execute-api.us-east-1.amazonaws.com/test/spotify/get-playlists')
            .then(response => this.setState({ music: response.data.body }));
    }

    renderMusic() {
        return this.state.music.map(music =>
            <MusicDetail key={music.name} music={music} />
        );
    }

    render() {

        return (
            <ScrollView>
                {this.renderMusic()}
            </ScrollView>
        );
    }
}

export default MusicList;
