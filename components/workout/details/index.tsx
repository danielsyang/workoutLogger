import { StackScreenProps } from "@react-navigation/stack"
import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { FAB } from "react-native-paper"
import { useGetWorkoutByIdQuery } from "../../../generated/graphql"
import { RootStackParamList } from "../../../navigation/types"
import { ExerciseModal } from "./form"
import { WorkoutDetailHeader } from "./header"
import { ExercisesList } from "./list"

export const WorkoutDetail = ({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "WorkoutDetail">) => {
  const { workoutId } = route.params
  const [isModalOpen, setModal] = useState(false)
  const { fab } = styles
  const [result] = useGetWorkoutByIdQuery({
    variables: { data: { id: workoutId } },
    requestPolicy: "network-only",
  })

  return (
    <>
      <WorkoutDetailHeader
        goBack={navigation.goBack}
        title={result.data?.workout?.name || ""}
        workoutId={workoutId}
      />
      <ExercisesList exercises={result.data?.workout?.Exercise} />
      {isModalOpen && (
        <ExerciseModal
          workoutId={workoutId}
          isVisible={isModalOpen}
          onDismiss={() => setModal(false)}
        />
      )}
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
