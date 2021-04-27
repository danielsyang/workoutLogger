import React from "react"
import { FlatList } from "react-native"
import { List, IconButton } from "react-native-paper"
import { Exercise } from "../../../generated/graphql"
import { EmptyListPlaceholder } from "./emptyList"

interface ExercisesListProps {
  exercises?: Pick<Exercise, "id" | "name" | "reps" | "sets">[]
  openMenu: (exerciseId: string) => () => void
}

export const ExercisesList = ({ exercises, openMenu }: ExercisesListProps) => {
  return (
    <>
      {exercises?.length === 0 && <EmptyListPlaceholder />}
      <FlatList
        data={exercises}
        keyExtractor={({ id }) => id}
        renderItem={({ item: { name, id, sets, reps } }) => {
          return (
            <List.Item
              title={name}
              key={id}
              description={`${sets} sets of ${reps}`}
              left={() => <List.Icon icon="dumbbell" />}
              right={() => (
                <IconButton icon="dots-horizontal" onPress={openMenu(id)} />
              )}
            />
          )
        }}
      />
    </>
  )
}
