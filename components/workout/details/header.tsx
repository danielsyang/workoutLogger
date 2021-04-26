import { useNavigation } from "@react-navigation/core"
import React from "react"
import { Appbar } from "react-native-paper"
import { useDeleteWorkoutMutation } from "../../../generated/graphql"

interface WorkoutDetailHeaderProps {
  goBack: () => void
  title: string
  workoutId: string
}

export const WorkoutDetailHeader = ({
  goBack,
  title,
  workoutId,
}: WorkoutDetailHeaderProps) => {
  const [_, mutation] = useDeleteWorkoutMutation()
  const { navigate } = useNavigation()

  const onDeleteHandler = async () => {
    await mutation({ data: { id: workoutId } })
    navigate("Workout")
  }

  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
      <Appbar.Action icon="delete" onPress={onDeleteHandler} />
    </Appbar.Header>
  )
}
