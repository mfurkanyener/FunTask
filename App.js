import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, AsyncStorage } from 'react-native';
import { Router, Scene } from "react-native-router-flux";
import { connect, Provider } from "react-redux";
import configureStore from "./app/store/configureStore";
const store = configureStore();
const RouterWithRedux = connect()(Router);

import Main from "./app/scenes/Main.js";
import Candidate from "./app/scenes/Candidate.js";

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      hasToken: false,
      isLoading: true,
      token:null,
    };
    console.disableYellowBox = true;
  }

  componentDidMount() {
    AsyncStorage.getItem("token").then(token => {
      if (token) {
        this.setState({
          hasToken: true,
          isLoading: false,
          token:token
        });
      } else {
        this.setState({
          hasToken: false,
          isLoading: false
        });
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="modal" modal hideNavBar>
            <Scene key="root">
              <Scene key="Main" component={Main} hideNavBar={true} initial={!this.state.hasToken} panHandlers={null} title="Fun Task is very fun" />
              <Scene key="Candidate" component={Candidate} hideNavBar={true} token={this.state.token} initial={this.state.hasToken} panHandlers={null} title="Hello" />
            </Scene>
          </Scene>
        </RouterWithRedux>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
