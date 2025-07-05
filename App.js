import { useState } from "react";

import { StyleSheet, View, FlatList, Button, TextInput } from "react-native";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [userGoals, setUserGoals] = useState([]);
  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.trim().length === 0) {
      return;
    }

    setUserGoals((currentUserGoals) => {
      setEnteredGoalText("");
      return [
        {
          text: enteredGoalText,
          key: Math.random().toString(), // * FlatList by default will use the key property to identify and render the items (if existed)
          id: Math.random().toString(),
        },
        ...currentUserGoals,
      ];
    });
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsOuterContainer}>
        <FlatList
          data={userGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          // * keyExtractor is used to identify the item to be rendered in the FlatList, in case of not providing the 'key' property in the data object
          keyExtractor={(item) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  // * The goalsOuterContainer is used to control the height of the ScrollView since the scrollable area is determined by the parent component
  goalsOuterContainer: {
    flex: 1,
  },
});
