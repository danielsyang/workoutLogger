import React from "react"
import { Appbar } from "react-native-paper"

interface ExerciseCardHeaderProps {
  goBack: () => void
  title: string
}

export const ExerciseCardHeader = ({
  goBack,
  title,
}: ExerciseCardHeaderProps) => {
  return (
    <Appbar.Header>
      <Appbar.BackAction onPress={goBack} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  )
}
