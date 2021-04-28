import React from "react"
import { FlatList } from "react-native"
import { Exercise } from "../../../generated/graphql"
import { EmptyListPlaceholder } from "./emptyList"
import { ExerciseItem } from "./exerciseItem"

interface ExercisesListProps {
  exercises?: Pick<Exercise, "id" | "name" | "reps" | "sets">[]
  openUpdateModal: (exerciseId: string) => () => void
}

export const ExercisesList = ({
  exercises,
  openUpdateModal,
}: ExercisesListProps) => {
  return (
    <>
      {exercises?.length === 0 && <EmptyListPlaceholder />}
      <FlatList
        data={exercises}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <ExerciseItem exercise={item} openUpdateModal={openUpdateModal} />
        )}
      />
    </>
  )
}
