import { useNavigation } from "@react-navigation/core"
import { StackScreenProps } from "@react-navigation/stack"
import React, { useState } from "react"
import { StyleSheet } from "react-native"
import { Button, FAB, Colors, useTheme } from "react-native-paper"
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
  const [selectedExerciseId, setExerciseId] = useState("")
  const [result, refetch] = useGetWorkoutByIdQuery({
    variables: { data: { id: workoutId } },
    requestPolicy: "network-only",
  })
  const { navigate } = useNavigation()
  const { fab, startWorkoutButton } = styles
  const { colors } = useTheme()

  return (
    <>
      <WorkoutDetailHeader
        goBack={navigation.goBack}
        title={result.data?.workout?.name || ""}
        workoutId={workoutId}
      />
      <ExercisesList
        exercises={result.data?.workout?.Exercise}
        openUpdateModal={(exerciseId: string) => () => {
          setModal(true)
          setExerciseId(exerciseId)
        }}
      />
      <Button
        style={startWorkoutButton}
        mode="contained"
        onPress={() => {
          navigate("ExercisesCard", { workoutId })
        }}
      >
        Start workout
      </Button>
      {isModalOpen && (
        <ExerciseModal
          workoutId={workoutId}
          isVisible={isModalOpen}
          onDismiss={() => {
            setModal(false)
            setExerciseId("")
          }}
          exerciseId={selectedExerciseId}
          refetch={refetch}
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
  startWorkoutButton: {
    marginBottom: 30,
    marginLeft: 20,
    marginRight: 20,
  },
})
