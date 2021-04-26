import React from "react"
import { List, Title } from "react-native-paper"
import { Exercise } from "../../../generated/graphql"
import { EmptyListPlaceholder } from "./emptyList"

interface ExercisesListProps {
  exercises?: Pick<Exercise, "id" | "name">[]
}

export const ExercisesList = ({ exercises }: ExercisesListProps) => {
  return (
    <List.Section>
      {exercises?.length === 0 && <EmptyListPlaceholder />}
      {exercises?.map(({ name, id }) => (
        <List.Item
          title={name}
          key={id}
          left={() => <List.Icon icon="dumbbell" />}
          right={() => <List.Icon icon="chevron-right" />}
        />
      ))}
    </List.Section>
  )
}
