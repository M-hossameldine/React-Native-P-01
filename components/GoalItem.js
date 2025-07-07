import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (props) => {
  const deleteGoalHandler = () => {
    setTimeout(() => {
      props.onDeleteGoal(props.id);
    }, 300); // * 300ms delay to be able to see the ripple effect
  };

  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }} // * ripple effect for Android
        onPress={deleteGoalHandler}
        style={({ pressed }) => pressed && styles.pressedItem} // * apply any styles for iOS platforms (ripple effect)
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginBottom: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem: {
    opacity: 0.5, // * apply any styles for iOS platforms (ripple effect)
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
