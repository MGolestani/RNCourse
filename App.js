import { StyleSheet, View, FlatList, Button, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoal, setCourseGoal] = useState([]);

  function deleteGoalHandler(id) {
    setCourseGoal((currentCourseGoal) => {
      return currentCourseGoal.filter((item) => {
        return item.id !== id;
      });
    });
  }
  function modalVisibilityHandler() {
    setModalIsVisible((prevState) => !prevState);
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Text style={styles.goles}>Goles Goals</Text>
        <Button
          title="Add New Goal"
          color="#a065ac"
          onPress={modalVisibilityHandler}
        />
        {modalIsVisible && (
          <GoalInput
            setCourseGoal={setCourseGoal}
            modalVisibility={modalIsVisible}
            setModalVisibility={modalVisibilityHandler}
          />
        )}
        <View style={styles.goalContainer}>
          <FlatList
            data={courseGoal}
            renderItem={(item) => {
              return (
                <GoalItem
                  onDeleteItem={deleteGoalHandler}
                  id={item.item.id}
                  text={item.item.text}
                  index={item.index}
                />
              );
            }}
            keyExtractor={(item, index) => {
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
    overflow: "scroll",
  },
  goalContainer: {
    flex: 10,
  },
  goles: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#005500",
    padding: 12,
    marginBottom: 20,
    marginHorizontal: "auto",
  },
});
