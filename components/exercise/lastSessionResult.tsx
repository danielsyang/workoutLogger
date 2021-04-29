import React from "react"
import { View } from "react-native"
import { IconButton, Paragraph, Colors } from "react-native-paper"
import { ExerciseRecord, Perception } from "../../generated/graphql"

interface LastSessionResultProps {
  lastSet?: Pick<ExerciseRecord, "id" | "reps" | "perception" | "rpe">
}

const getPerception = (perception: Perception) => {
  if (perception === Perception.Good) {
    return <IconButton icon="arrow-up" color={Colors.green400} />
  }
  if (perception === Perception.Medium) {
    return <IconButton icon="minus" color={Colors.yellow400} />
  }

  return <IconButton icon="arrow-down" color={Colors.red900} />
}

export const LastSessionResult = ({ lastSet }: LastSessionResultProps) => {
  if (!lastSet || lastSet.reps.length === 0) {
    return <></>
  }

  const { id, perception, reps, rpe } = lastSet
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Paragraph>Last Session:</Paragraph>
      {reps.map((r, index) => (
        <Paragraph key={`${id}-${index}`}>{`${r}kg  `}</Paragraph>
      ))}
      {getPerception(perception)}
      <Paragraph>RPE: {rpe}</Paragraph>
    </View>
  )
}
