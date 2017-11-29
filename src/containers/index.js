// import React from "react";

import { TabNavigator, StackNavigator } from 'react-navigation';

import Chat from './Chat';
import AllContract from './AllContract';
import RecentChat from './RecentChat';
import PingPong from './PingPong';

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChat },
  All: { screen: AllContract }
});

const SimpleApp = StackNavigator({
  PingPong: {
    screen: PingPong
  },
  Home: {
    screen: MainScreenNavigator,
    navigationOptions: {
      title: 'My Chats'
    }
  },
  Chat: { screen: Chat }
});

export default SimpleApp;