import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { API } from 'aws-amplify-react-native';
import MusicDetail from "./MusicDetail";

class MusicList extends Component {
    state = {
        music: [],
        newMusic: []
    };

    componentWillMount() {
        let path = '/spotify/get-playlists';

        API.get('Spotify', path).then(response => {
            this.setState({newMusic: response.body})
        });
    }

    renderMusic() {
        return this.state.newMusic.map(music =>
            <MusicDetail key={music.name} music={music}/>
        )
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
