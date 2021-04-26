import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { FAB } from "react-native-paper"
import { WorkoutHeader } from "../workoutHeader"
import { WorkoutList } from "./list"
import { WorkoutModal } from "./form"

export const WorkoutScreen = () => {
  const { fab } = styles
  const [isModalOpen, setModal] = useState(false)
  return (
    <>
      <WorkoutHeader />
      <WorkoutList />
      <WorkoutModal isVisible={isModalOpen} onDismiss={() => setModal(false)} />
      <FAB
        style={fab}
        icon="plus"
        onPress={() => {
          setModal(true)
        }}
      />
    </>
  )
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
})
