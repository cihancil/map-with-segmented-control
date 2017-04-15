

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
  MapView,
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
          style={styles.segmentedControl}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({ selectedIndex: event.nativeEvent.selectedSegmentIndex });
          }}
        />
        <View style={styles.switchContainer}>
          <Text>Animate</Text>
          <Switch
            onValueChange={(value) => this.setState({ animate: value })}
            value={this.state.animate}
          />
        </View>
        <View style={styles.switchContainer}>
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
          <MapView
            key="view1"
            style={{
              flex: 1,
            }}
          />
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
  segmentedControl: {
    marginHorizontal: 16,
  },
  switchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },

});

AppRegistry.registerComponent('simpleMap', () => simpleMap);

