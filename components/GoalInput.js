import { useState } from "react";

import { View, TextInput, Button, StyleSheet } from "react-native";

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const submitGoalInputHandler = () => {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal!"
        style={styles.textInput}
        onChangeText={goalInputHandler}
        value={enteredGoalText}
      />
      <Button title="Add Goal" onPress={submitGoalInputHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    padding: 8,
    marginRight: 8,
  },
});

export default GoalInput;
