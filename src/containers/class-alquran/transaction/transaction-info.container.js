import moment from 'moment'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import { useSelector } from 'react-redux'
import { Card } from 'react-native-elements'
import { RadioButton } from 'react-native-paper'
import React, { useState, useEffect } from 'react'
import { Icon, Text } from '@ui-kitten/components'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Image,
    ScrollView,
    ToastAndroid,
    TouchableOpacity,
} from 'react-native'

const TransactionInfoQuran = (props) => {
    const navigation = useNavigation()
    return (
        <View>
            <Text>Hai Info</Text>
        </View>
    )
}

export default TransactionInfoQuran