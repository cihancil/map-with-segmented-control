

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS,
  Switch,
} from 'react-native';

import ScrollableTabView from 'react-native-scrollable-tab-view';

export default class simpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      animate: false,
      draggable: false,
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SegmentedControlIOS
          values={['Map', 'Other']}
          style={{
            marginHorizontal: 16,
          }}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
          }}
        />
        <View style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}>
          <Text>Animate</Text>
          <Switch
            onValueChange={(value) => this.setState({ animate: value })}
            value={this.state.animate}
          />
        </View>
        <View style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          flexDirection: "row",
          alignItems: "center",
          alignSelf: "center",
        }}>
          <Text>Draggable</Text>
          <Switch
            onValueChange={(value) => this.setState({ draggable: value })}
            value={this.state.draggable}
          />
        </View>
        <ScrollableTabView
          page={this.state.selectedIndex}
          scrollWithoutAnimation={!this.state.animate}
          renderTabBar={false}
          locked={!this.state.draggable}
          prerenderingSiblingsNumber={Infinity}
        >
          <View
            key="view1"
            style={{
              flex: 1,
              backgroundColor: "blue",
            }}
          ></View>
          <View
            key="view2"
            style={{
              flex: 1,
              backgroundColor: "gray",
            }}
          ></View>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
  },
});

AppRegistry.registerComponent('simpleMap', () => simpleMap);

