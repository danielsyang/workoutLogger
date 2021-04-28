import React from "react"
import { Card, Paragraph, Title } from "react-native-paper"
import Emoji from "react-native-emoji"
import { StyleSheet } from "react-native"

export const EmptyListPlaceholder = () => {
  const { container } = styles
  return (
    <Card style={container}>
      <Card.Content>
        <Title>
          Build your plan! <Emoji name="weight_lifter" />
        </Title>
        <Paragraph>Add workouts to build your plan</Paragraph>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
})
