import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppNavigator from '../AppNavigator/index'
import NewsItem from '../NewsItem/index'
import {
  fetchArticles
} from '../../actions/index'

import { Navigator, StyleSheet, TabBarIOS } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'messageIndex'
    }
  }

  render() {

    let messageIndexInitialRoute = {ident: 'messageIndex'}
    let contactIndexInitialRoute = {ident: 'contactIndex'}
    let discoverIndexInitialRoute = {ident: 'discoverIndex'}
    let accountIndexInitialRoute = {ident: 'accountIndex'}

    return (
     <TabBarIOS selectedTab={this.state.selectedTab}>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "messageIndex"}
          title={`信息`}
          iconName="question-answer"
          onPress={() => this.setState({selectedTab: "messageIndex"})}
        >
          <AppNavigator
           initialRoute={messageIndexInitialRoute}
          />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "contactIndex"}
          title={`通讯录`}
          iconName="contacts"
          onPress={() => this.setState({selectedTab: "contactIndex"})}
        >
          <AppNavigator
            initialRoute={contactIndexInitialRoute}
          />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "discoverIndex"}
          title={`发现`}
          iconName="wifi-tethering"
          onPress={() => this.setState({selectedTab: "discoverIndex"})}
        >
          <AppNavigator
            initialRoute={discoverIndexInitialRoute}
          />
        </Icon.TabBarItemIOS>
        <Icon.TabBarItemIOS
          selected={this.state.selectedTab === "accountIndex"}
          title={`我`}
          iconName="person"
          onPress={() => this.setState({selectedTab: "accountIndex"})}
        >
          <AppNavigator
            initialRoute={accountIndexInitialRoute}
          />
        </Icon.TabBarItemIOS>
     </TabBarIOS>
    );
  }
}

function mapStateToProps(state) {
  let { articleList } = state;
  return { articleList };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchArticles: (page) => {
      dispatch(fetchArticles(page));
    }
  };
}

App.propTypes = {
  fetchArticles: React.PropTypes.func.isRequired,
  articleList: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
