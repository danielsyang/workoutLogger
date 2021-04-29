import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { FAB, useTheme, Colors } from "react-native-paper"
import { WorkoutHeader } from "../workoutHeader"
import { WorkoutList } from "./list"
import { WorkoutModal } from "./form"

export const WorkoutScreen = () => {
  const { fab } = styles
  const [isModalOpen, setModal] = useState(false)
  const { colors } = useTheme()
  return (
    <>
      <WorkoutHeader />
      <WorkoutList />
      {isModalOpen && (
        <WorkoutModal
          isVisible={isModalOpen}
          onDismiss={() => setModal(false)}
        />
      )}
      <FAB
        color={Colors.white}
        style={{ ...fab, backgroundColor: colors.primary }}
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
