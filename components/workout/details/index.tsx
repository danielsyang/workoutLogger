import { StackScreenProps } from "@react-navigation/stack"
import React, { useState } from "react"
import { ScrollView, StyleSheet } from "react-native"
import { FAB } from "react-native-paper"
import { useGetWorkoutByIdQuery } from "../../../generated/graphql"
import { RootStackParamList } from "../../../navigation/types"
import { WorkoutDetailHeader } from "./header"
import { ExercisesList } from "./list"

export const WorkoutDetail = ({
  route,
  navigation,
}: StackScreenProps<RootStackParamList, "WorkoutDetail">) => {
  const [isModalOpen, setModal] = useState(false)
  const { fab } = styles
  const [result] = useGetWorkoutByIdQuery({
    variables: { data: { id: route.params.workoutId } },
  })

  result.data?.workout?.Exercise

  return (
    <>
      <WorkoutDetailHeader
        goBack={navigation.goBack}
        title={result.data?.workout?.name || ""}
      />
      <ExercisesList exercises={result.data?.workout?.Exercise} />
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
