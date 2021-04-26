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
          Build your workout! <Emoji name="muscle" />
        </Title>
        <Paragraph>Add exercises to build your workout</Paragraph>
      </Card.Content>
    </Card>
  )
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
})
