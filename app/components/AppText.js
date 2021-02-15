import React from 'react'
import { Text } from 'react-native'

import defaultStyles from '../config/styles'

export default function AppText({children}) {
    return <Text style={defaultStyles.text}>{children}</Text>
}