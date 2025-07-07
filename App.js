import { useState } from "react";

import { StyleSheet, StatusBar, View, FlatList, Button } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [userGoals, setUserGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  const addGoalHandler = (enteredGoalText) => {
    setUserGoals((currentUserGoals) => {
      return [
        {
          text: enteredGoalText,
          key: Math.random().toString(), // * FlatList by default will use the key property to identify and render the items (if existed)
          id: Math.random().toString(),
        },
        ...currentUserGoals,
      ];
    });

    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    setUserGoals((currentUserGoals) => {
      return currentUserGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <>
      <StatusBar />

      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalIsVisible}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsOuterContainer}>
          <FlatList
            data={userGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteGoal={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            // * keyExtractor is used to identify the item to be rendered in the FlatList, in case of not providing the 'key' property in the data object
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  // * The goalsOuterContainer is used to control the height of the ScrollView since the scrollable area is determined by the parent component
  goalsOuterContainer: {
    flex: 1,
    marginTop: 12,
  },
});
