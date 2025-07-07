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
        android_ripple={{ color: "#210644" }}
        onPress={deleteGoalHandler}
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
  goalText: {
    padding: 8,
    color: "white",
  },
});

export default GoalItem;
