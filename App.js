import React from "react";
import { StyleSheet, Text, View, Slider, SafeAreaView } from "react-native";
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devicename: "Jerimiah'sThermostat",
      ctemp: 70,
      stemp: 71,
      heaterstate: true
    };
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
        <View style={styles.container}>
          <View style={{ flex: 1 }}>
            <Text>{this.state.devicename + "\n"}</Text>
          </View>
          <View
            style={{
              flex: 8,
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
            <Text style={styles.text}>
              Current Temperature: {this.state.ctemp + "\n"}
              Setting:
            </Text>
            <Slider
              style={{
                width: 200,
                height: 40,
                alignItems: "center",
                justifyContent: "center"
              }}
              minimumValue={40}
              maximumValue={90}
              minimumTrackTintColor="#111111"
              maximumTrackTintColor="#000000"
            />
            <View style={{ flex: 1 }} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  text: {
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});
