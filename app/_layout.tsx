import { Stack, Tabs } from 'expo-router'
import React from 'react'

export default function layout() {
  return (
    <Tabs>
      <Tabs.Screen name="login"/>      
      <Tabs.Screen name="home"/>      

    </Tabs>
  )
}
