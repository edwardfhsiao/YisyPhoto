'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigator, Text, StyleSheet } from 'react-native'

import ViewContainer from '../ViewContainer/index'
import MessageIndex from '../Screens/MessageIndex/index'
import ContactsIndex from '../Screens/ContactsIndex/index'
import DiscoverIndex from '../Screens/DiscoverIndex/index'
import AccountIndex from '../Screens/AccountIndex/index'


class AppNavigator extends Component {

  renderScene(route, navigator) {
    var globalNavigatorProps = { navigator }

    switch(route.ident) {
      case 'messageIndex':
        return (
          <MessageIndex {...globalNavigatorProps} />
        )
      case 'contactIndex':
        return (
          <ContactsIndex {...globalNavigatorProps} />
        )
      case 'discoverIndex':
        return (
          <DiscoverIndex {...globalNavigatorProps} />
        )
      case 'accountIndex':
        return (
          <AccountIndex {...globalNavigatorProps} />
        )
      default:
        return (
          <ViewContainer>
            <Text>
              {`YO YOU MESSED SOMETHING UP ${route}`}
            </Text>
          </ViewContainer>
        )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={this.props.initialRoute}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this.renderScene}
        configureScene={(route) => ({
            ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight
          })
        }
      />

    )
  }

}

const styles = StyleSheet.create({

  navigatorStyles: {

  }

})

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AppNavigator);