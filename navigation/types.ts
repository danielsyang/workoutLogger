import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
  Workout: undefined
  WorkoutDetail: { workoutId: string }
  ExercisesCard: { workoutId: string }
}

export type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList>
}
