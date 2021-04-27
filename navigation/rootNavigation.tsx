import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { RootStackParamList } from "./types"
import { WorkoutScreen } from "../components/workout"
import { WorkoutDetail } from "../components/workout/details"
import { ExercisesCardScreen } from "../components/exercise"

const Stack = createStackNavigator<RootStackParamList>()

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Workout" component={WorkoutScreen} />
      <Stack.Screen name="WorkoutDetail" component={WorkoutDetail} />
      <Stack.Screen name="ExercisesCard" component={ExercisesCardScreen} />
    </Stack.Navigator>
  )
}
