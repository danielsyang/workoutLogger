import React from "react"
import { List } from "react-native-paper"
import { useGetAllWorkoutsQuery } from "../../generated/graphql"
import { useNavigation } from "@react-navigation/native"

export const WorkoutList = () => {
  const [result] = useGetAllWorkoutsQuery()
  const { navigate } = useNavigation()
  return (
    <List.Section>
      <List.Subheader>Workouts</List.Subheader>
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
