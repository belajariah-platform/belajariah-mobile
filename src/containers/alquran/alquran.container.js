import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

import {
  QURAN_LIST_REQ,
  QURAN_LIST_SUCC,
  QURAN_LIST_FAIL
} from '../../action'
import { QuranAPI } from '../../api'
import { Response } from '../../utils'

const Alquran = (props) => {
  const dispatch = useDispatch()
  const { data, loading } = useSelector((state) => state.QuranReducer)

  const fetchDataQuran = async () => {
    try {
      const response = await QuranAPI.GetAllQuran()
      if (response.status === Response.SUCCESS) {
        await dispatch({
          type: QURAN_LIST_SUCC,
          payload: response.data.data,
        })
      }
    } catch (err) {
      dispatch({
        type: QURAN_LIST_FAIL
      })
      return err
    }
  }

  useEffect(() => {
    dispatch({ type: QURAN_LIST_REQ })
    fetchDataQuran()
  }, [])

  return !loading &&(
    <View>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => props.navigation.navigate('AlquranDetail', item)}
          >
            <Text>{item.surat_name}</Text>
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

Alquran.propTypes = {
  navigation : PropTypes.object,
}


export default Alquran
