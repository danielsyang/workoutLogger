import { useNavigation } from "@react-navigation/core"
import { StackScreenProps } from "@react-navigation/stack"
import React from "react"
import { View } from "react-native"
import { Button } from "react-native-paper"
import { useGetWorkoutByIdQuery } from "../../generated/graphql"
import { RootStackParamList } from "../../navigation/types"
import { CardExerciseContainer } from "./cardExerciseContainer"
import { ExerciseCardHeader } from "./header"

export const ExercisesCardScreen = ({
  route: {
    params: { workoutId },
  },
}: StackScreenProps<RootStackParamList, "ExercisesCard">) => {
  const { goBack } = useNavigation()
  const [result] = useGetWorkoutByIdQuery({
    variables: { data: { id: workoutId } },
  })

  return (
    <View>
      <ExerciseCardHeader
        title={result.data?.workout?.name || ""}
        goBack={goBack}
      />

      {result.data?.workout?.Exercise.map((e) => (
        <CardExerciseContainer exercise={e} key={e.id} />
      ))}

      <Button
        mode="contained"
        style={{ marginLeft: "auto", marginTop: 20, marginRight: 20 }}
      >
        Finish workout
      </Button>
    </View>
  )
}
