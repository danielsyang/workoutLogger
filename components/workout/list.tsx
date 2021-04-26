import React from "react"
import { List } from "react-native-paper"
import { useGetAllWorkoutsQuery } from "../../generated/graphql"

export const WorkoutList = () => {
  const [result] = useGetAllWorkoutsQuery()
  return (
    <List.Section>
      <List.Subheader>Workouts</List.Subheader>
      {result.data?.workouts.map(({ name, id }) => (
        <List.Item
          title={name}
          key={id}
          left={() => <List.Icon icon="dumbbell" />}
          right={() => <List.Icon icon="chevron-right" />}
          onPress={() => console.log(1)}
        />
      ))}
    </List.Section>
  )
}
