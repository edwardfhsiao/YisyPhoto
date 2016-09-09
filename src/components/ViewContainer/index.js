'use strict'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import StatusBarBackground from '../StatusBarBackground/index'

class ViewContainer extends Component {
  render() {
    return (
      <View style={[styles.viewContainer, this.props.style || {}]}>
        <StatusBarBackground />
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({

  viewContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "stretch"
  }

})

module.exports = ViewContainer