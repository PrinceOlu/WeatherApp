import { TextInput, View, StyleSheet, Text } from "react-native";

const Form = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Open Weather App</Text>
      <TextInput
        onChangeText={props.onChangeText}
        keyboardAppearance="dark"
        style={styles.textInput}
        placeholder="Type city name"
        onEndEditing={props.onSubmit}
      ></TextInput>
    </View>
  );
};
export default Form;

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: 50,
  },
  textInput: {
    width: 300,
    height: 50,
    padding: 5,
    borderWidth: 2,
    borderColor: "black",
    fontSize: 10,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
  },
});
