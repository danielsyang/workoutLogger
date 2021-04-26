import React from "react"
import { Appbar } from "react-native-paper"

interface WorkoutDetailHeaderProps {
  goBack: () => void
  title: string
}

export const WorkoutDetailHeader = ({
  goBack,
  title,
}: WorkoutDetailHeaderProps) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}
