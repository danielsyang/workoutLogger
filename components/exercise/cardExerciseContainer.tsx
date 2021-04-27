import React, { useState } from "react"
import { View } from "react-native"
import { Card, Colors, IconButton, TextInput } from "react-native-paper"
import { Exercise, Perception } from "../../generated/graphql"

interface CardExerciseContainerProps {
  exercise: Pick<Exercise, "id" | "name" | "reps" | "sets">
}

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
}: CardExerciseContainerProps) => {
  const { name, sets } = exercise
  const [perception, setPerception] = useState(Perception.Good)
  const [reps, setReps] = useState<number[]>([])

  const handleChangeInputText = (val: string, index: number) => {
    const newReps = [...reps]
    newReps[index] = +val
    setReps(newReps)
  }
  return (
    <Card>
      <Card.Title title={name} />
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
    </Card>
  )
}
