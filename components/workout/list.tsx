import React from "react"
import { List } from "react-native-paper"
import { useGetAllWorkoutsQuery } from "../../generated/graphql"
import { useNavigation } from "@react-navigation/native"
import { EmptyListPlaceholder } from "./emptyList"

export const WorkoutList = () => {
  const [result] = useGetAllWorkoutsQuery({
    requestPolicy: "cache-and-network",
  })
  const { navigate } = useNavigation()

  console.log(!result.data?.workouts)
  return (
    <List.Section>
      <List.Subheader>Workouts</List.Subheader>
      {(!result.data?.workouts || result.data?.workouts.length === 0) && (
        <EmptyListPlaceholder />
      )}
      {result.data?.workouts.map(({ name, id }) => (
        <List.Item
          title={name}
          key={id}
          left={() => <List.Icon icon="dumbbell" />}
          right={() => <List.Icon icon="chevron-right" />}
          onPress={() => {
            navigate("WorkoutDetail", { workoutId: id })
          }}
        />
      ))}
    </List.Section>
  )
}
