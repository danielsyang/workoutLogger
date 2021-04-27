import { useNavigation } from "@react-navigation/core"
import React, { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { Card, Colors, IconButton, TextInput } from "react-native-paper"
import {
  Exercise,
  Perception,
  ExerciseRecord,
  useCreateExerciseRecordMutation,
} from "../../generated/graphql"
import { LastSessionResult } from "./lastSessionResult"

interface CardExerciseContainerProps {
  exercise: Pick<Exercise, "id" | "name" | "reps" | "sets"> & {
    Set: Array<
      { __typename?: "ExerciseRecord" } & Pick<
        ExerciseRecord,
        "id" | "reps" | "perception"
      >
    >
  }
  trigger: boolean
}

// TODO: refactor needed
const generateSetsInput = (
  sets: number,
  onChangeText: (text: string, index: number) => void,
  values: number[],
) => {
  let inputs: any[] = []
  const handleChangeText = (index: number) => (val: string) => {
    onChangeText(val, index)
  }
  for (let i = 0; i < sets; i++) {
    inputs = inputs.concat(
      <TextInput
        mode="flat"
        placeholder="kg"
        keyboardType="decimal-pad"
        onChangeText={handleChangeText(i)}
        value={values[i]?.toString() || ""}
      />,
    )
  }
  return inputs
}

export const CardExerciseContainer = ({
  exercise,
  trigger,
}: CardExerciseContainerProps) => {
  const { name, sets, id, Set } = exercise
  const lastSet = Set.filter((_, index) => index === Set.length - 1)[0]
  const [perception, setPerception] = useState(Perception.Good)
  const [reps, setReps] = useState<number[]>([])
  const [_, mutate] = useCreateExerciseRecordMutation()
  const { goBack } = useNavigation()
  const { container } = styles

  const handleChangeInputText = (val: string, index: number) => {
    const newReps = [...reps]
    newReps[index] = +val
    setReps(newReps)
  }

  useEffect(() => {
    const save = async () => {
      if (trigger && reps.length !== 0) {
        await mutate({
          data: {
            exercise: { connect: { id } },
            perception,
            reps: { set: reps },
          },
        })
        goBack()
      }
    }
    save()
  }, [trigger])

  return (
    <Card style={container}>
      <Card.Title title={name} />
      <Card.Content>
        <LastSessionResult lastSet={lastSet} />
        <View style={{ flexDirection: "row" }}>
          {generateSetsInput(sets, handleChangeInputText, reps)}
          <IconButton
            icon="arrow-up"
            color={
              perception === Perception.Good ? Colors.green400 : Colors.black
            }
            onPress={() => {
              setPerception(Perception.Good)
            }}
          />
          <IconButton
            icon="minus"
            color={
              perception === Perception.Medium ? Colors.yellow400 : Colors.black
            }
            onPress={() => {
              setPerception(Perception.Medium)
            }}
          />
          <IconButton
            icon="arrow-down"
            color={perception === Perception.Bad ? Colors.red900 : Colors.black}
            onPress={() => {
              setPerception(Perception.Bad)
            }}
          />
        </View>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 10, marginTop: 10, marginHorizontal: 10 },
})
