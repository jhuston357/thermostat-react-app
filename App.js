import React from "react";
import { StyleSheet, Text, View, Slider, SafeAreaView } from "react-native";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devicename: "Jerimiah's Thermostat",
      ctemp: 70,
      stemp: 71,
      status: true,
      mode: true
    };
  }
  render() {
    return (
      <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{ fontSize: 40 }}>{this.state.devicename + "\n"}</Text>
          </View>
          <View style={styles.contentarea}>
            <View style={styles.contentcolumn}>
              <View style={styles.contentrow}>
                <Text style={styles.headings}>Temperature:</Text>
                <Text style={styles.status}>{this.state.ctemp}</Text>
              </View>
              <View style={styles.contentrow}>
                <Text style={styles.headings}>Status:</Text>
                <Text style={styles.status}>
                  {this.state.status ? "ON" : "OFF"}
                </Text>
              </View>
              <View style={styles.contentrow}>
                <Text style={styles.headings}>Mode:</Text>
                <Text style={styles.status}>
                  {this.state.mode ? "HEAT" : "AIRCON"}
                </Text>
              </View>
              <View style={styles.contentrow}>
                <Text style={styles.headings}>Setting:</Text>
                <Slider
                  style={{ width: 175 }}
                  step={1}
                  minimumValue={40}
                  maximumValue={90}
                  minimumTrackTintColor="#111111"
                  maximumTrackTintColor="#000000"
                  value={this.state.stemp}
                  onValueChange={val => this.setState({ stemp: val })}
                  //onSlidingComplete={val => this.sendTemp(val)}
                />
              </View>
              <View style={[styles.contentrow, { justifyContent: "center" }]}>
                <Text style={styles.status}>{this.state.stemp}</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  safearea: {
    flex: 1,
    backgroundColor: "#000"
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  contentarea: {
    flex: 9,
    marginLeft: 50,
    marginRight: 50
  },
  contentrow: {
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  contentcolumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly"
  },
  headings: {
    fontSize: 30,
    fontWeight: "bold"
  },
  status: {
    fontSize: 30,
    fontWeight: "normal"
  }
});
