import {Platform} from 'react-native'

import colors from './colors'

export default {
    text: {
        fontSize: 18,
        color: colors.dark,
        fontFamily: Platform.OS === 'android' ? "Roboto" : "Arial",
        flex: 1, // this flex may cause problems with other components
    }
}