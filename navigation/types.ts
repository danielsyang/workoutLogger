import { StackNavigationProp } from "@react-navigation/stack"

export type RootStackParamList = {
  Workout: undefined
}

export type NavigationProps = {
  navigation: StackNavigationProp<RootStackParamList>
}
