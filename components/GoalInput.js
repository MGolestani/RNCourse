import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

function GoalInput(props) {
  const [goalText, setGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setGoalText(enteredText);
  }

  function addGoalHandler() {
    if (goalText !== "") {
      props.setCourseGoal((currentCourseGoals) => [
        ...currentCourseGoals,
        { text: goalText, id: Math.random().toString() },
      ]);
    }
    setGoalText("");
  }
  return (
    <Modal visible={props.modalVisibility} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/mehdi.jpg")}
          style={styles.ImageContainer}
        />
        <TextInput
          placeholder="Your Course Goal"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={goalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Done"
              color={"#a065ac"}
              onPress={props.setModalVisibility}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Add Goal"
              color={"#a065ac"}
              onPress={addGoalHandler}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
  },
  ImageContainer: {
    maxWidth: 200,
    maxHeight: 180,
    padding: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    backgroundColor: "#ddd",
    width: "90%",
    marginTop: 16,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    backgroundColor: "#5e0acc",
    borderRadius: 8,
    width: "30%",
    marginHorizontal: 10,
  },
});
