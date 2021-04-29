import { useNavigation } from "@react-navigation/core"
import { StackScreenProps } from "@react-navigation/stack"
import React, { useState } from "react"
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
  const [result, refetch] = useGetWorkoutByIdQuery({
    variables: { data: { id: workoutId } },
  })
  const [shouldSaveWorkout, setWorkoutState] = useState(false)

  return (
    <View>
      <ExerciseCardHeader
        title={result.data?.workout?.name || ""}
        goBack={goBack}
      />

      {result.data?.workout?.Exercise.map((e) => (
        <CardExerciseContainer
          exercise={e}
          key={e.id}
          trigger={shouldSaveWorkout}
          refetch={refetch}
        />
      ))}

      <Button
        mode="contained"
        style={{ marginLeft: "auto", marginTop: 20, marginRight: 20 }}
        onPress={() => setWorkoutState(true)}
      >
        Finish workout
      </Button>
    </View>
  )
}
