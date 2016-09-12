'use strict'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigator, NavigatorIOS, Text, StyleSheet } from 'react-native'

import ViewContainer from '../ViewContainer/index'


class AppNavigator extends Component {

  render() {
    return (
      <NavigatorIOS
        initialRoute={this.props.initialRoute}
        barTintColor='#000'
        titleTextColor='#fff'
        tintColor='#fff'
        style={{flex: 1}}
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