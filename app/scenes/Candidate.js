import React, {Component} from 'react';
import {Alert, AsyncStorage, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FetchData} from '../utils/Utils'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

/*
  API usage :  https://playground-test-api.herokuapp.com/api/candidate/:id
*/

export default class Candidate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            candidateName: '',
            candidateId: '',
            location: null
        }
        this.onLocationSelect = this.onLocationSelect.bind(this)
    }

    componentDidMount() {
        FetchData('https://playground-test-api.herokuapp.com/api/candidate/5c3091bba7e5240017caa570').then((response) => {
            console.log('response', response)
            this.setState({
                candidateName: response.candidate.candidateName,
                candidateId: response.candidate.candidateId,
            })
        })

        AsyncStorage.getItem('location').then((location) => {
            this.setState({location: JSON.parse(location)})
        })
    }

    _onPress() {
        Alert.alert('My Informations: \nCandidate id:' + this.state.candidateId)
    }

    onLocationSelect(data) {
        AsyncStorage.setItem('location', JSON.stringify(data))
        this.setState({location: data})
    }


    render() {
        const location = this.state.location  ? this.state.location.description : 'Please select location'

        return (
            <View style={styles.container}>
                <Text styles={styles.welcome}>Welcome</Text>
                <Text styles={styles.welcome}>{this.state.candidateName}</Text>
                <Text
                    styles={styles.welcome}>{"Location: " + location}</Text>

                <TouchableOpacity onPress={() => this._onPress()} style={styles.actionButton}>
                    <Text style={styles.actionText}>Get My Informations</Text>
                </TouchableOpacity>
                <GooglePlacesAutocomplete
                    placeholder='Search for location'
                    minLength={2}
                    autoFocus={false}
                    returnKeyType={'search'}
                    listViewDisplayed='auto'
                    fetchDetails={true}
                    renderDescription={row => row.description}
                    onPress={(data, details = null) => {
                        this.onLocationSelect(data)
                    }}

                    getDefaultValue={() => ''}

                    query={{
                        key: 'AIzaSyDeH1bnkc_3M26oNY_bK1rLd7lQ6sQr0-0',
                        language: 'tr',
                        types: '(cities)'
                    }}

                    styles={{
                        textInputContainer: {
                            width: '100%'
                        },
                        description: {
                            fontWeight: 'bold'
                        },
                        predefinedPlacesDescription: {
                            color: '#1faadb'
                        }
                    }}

                    currentLocation={true}
                    nearbyPlacesAPI='GooglePlacesSearch'
                    GoogleReverseGeocodingQuery={{}}
                    GooglePlacesSearchQuery={{
                        rankby: 'distance',
                        types: 'food'
                    }}

                    filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3']}

                    debounce={200}
                />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10,
    },
    actionButton: {
        borderWidth: 1,
        overflow: "hidden",
        marginTop: "3%",
        backgroundColor: "white",
        width: "80%", height: "6%",
        borderRadius: 20,
        borderColor: "#4286f4",
        marginBottom: 10
    },
    actionText: {
        marginTop: 3,
        textAlign: "center",
        alignContent: 'center',
        fontSize: 20,
        color: "#4286f4",
        backgroundColor: 'rgba(0,0,0,0)'
    }
});
