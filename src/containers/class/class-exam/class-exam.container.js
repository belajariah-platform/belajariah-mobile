import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import NetInfo from '@react-native-community/netinfo'
import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useRef } from 'react'
import { Text, View, TouchableOpacity, ScrollView } from 'react-native'

import { Response } from '../../../utils'
import { Images, Color } from '../../../assets'
import { TestAPI, UserClassAPI } from '../../../api'
import { Buttons, Alerts, Loader, ModalNoConnection } from '../../../components'

import { styles } from './class-exam.style'

const ClassExam = (props) => {
  const dispatch = useDispatch()
  const { item, type } = props.route.params

  const mainScrollViewRef = useRef()
  const navigation = useNavigation()
  const [states, setStates] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingBtn, setLoadingBtn] = useState(false)
  const [optionSelected, setOptionSelected] = useState(0)
  const [answerSelected, setAnswerSelected] = useState([])
  const [connectStatus, setconnectStatus] = useState(false)
  const [questionSelected, setQuestionSelected] = useState({})
  const [dataState] = useState({ skip: 0, take: 20, filter: [], filterString: '[]' })

  const togglemodalNoConnection = () => setconnectStatus(!connectStatus)
  const retryConnection = () => {
    setconnectStatus(!connectStatus)
  }

  const fetchDataTest = async ({ skip, take, filterString }) => {
    try {
      setLoading(true)
      const response = await TestAPI.GetAllClassTest(skip, take, filterString)
      if (response.status === Response.SUCCESS) {
        setStates(response.data.data)
        setAnswerSelected(response.data.data)
        if (response.data.data.length != 0 && optionSelected == 0) {
          setQuestionSelected(response.data.data[0])
        }
        setLoading(false)
      }
    } catch (err) {
      setLoading(false)
      return err
    }
  }

  const handleSubmit = async (state) => {
    let count = 0
    state.forEach((v) => {
      if (v.Answer == 0) {
        count = count + 1
      }})
    const values = {
      ID : item.ID,
      Answers : state,
      Test_Type : type,
    }

    if (count == 0) {
      try {
        let msg
        setLoadingBtn(true)
        dispatch(UserClassAPI.GetUserClass(item.Class_Code))
        const response = await TestAPI.UpdateClassTest(values)
        if (response.data.result) {
          response.data.message <= 50 ?
            msg = 'Opps sepertinya kamu harus belar lagi, ayo tetap semangat belajarnya ya' :
            response.data.message > 50 &&  response.data.message <= 70 ?
              msg = 'Wahh skor kamu lumayan ya, ayo tingkatkan lagi' :
              response.data.message > 70 && response.data.message <= 90 ?
                msg = 'Luar biasa, skor kamu hampir sempurna' :
                response.data.message > 90 && response.data.message <= 100 ?
                  msg = 'Masyaallah, skor kamu sangat sempurna' : ''

          Alerts(true, `Kamu mendapatkan nilai ${response.data.message}, ${msg}`,
            () =>  navigation.navigate('ClassLearning')
          )
        }
        setLoadingBtn(false)
      } catch (err) {
        setLoadingBtn(false)
        NetInfo.fetch().then(res => {
          setconnectStatus(!res.isConnected)
        })
        return err
      }
    } else {
      Alerts(false, 'Mohon selesaikan semua pertanyaan')
    }
  }

  const onNumberSelected = (item, index) => {
    setOptionSelected(index)
    setQuestionSelected(item)
  }

  useEffect(() => {
    fetchDataTest(dataState, item.Class_Code)
  }, [])

  const Header = () => {
    return (
      <View style={styles.containerHeader}>
        <View style={styles.flexHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Images.ButtonBack.default style={styles.iconBack} />
          </TouchableOpacity>
          <Text style={styles.textTitleWhite}>Pre-Test</Text>
          {/* <Text style={styles.textTimer}> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</Text> */}
        </View>
      </View>
    )
  }

  const ScrollNumber = () => {
    return (
      <View style={styles.containerScrollNumber}>
        <ScrollView
          horizontal={true}
          ref={mainScrollViewRef}
          style={styles.scrollBox}
          showsHorizontalScrollIndicator={false}>
          {answerSelected.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => onNumberSelected(item, index)}
                  style={[styles.scrollTouch,
                    index === optionSelected ?
                      { backgroundColor: Color.purpleMedium } :
                      { backgroundColor: Color.purpleOpacity }
                  ]}>
                  <Text style={styles.textScroll}>{index+1}</Text>
                </TouchableOpacity>
              </View>
            )
          })}
        </ScrollView>
        <View style={styles.questionBox} >
          <Question/>
          {!loading &&( <ButtonQuestion/>)}
        </View>
      </View>
    )
  }

  const Question = () => {
    const optionArr = []
    Object.keys(questionSelected)
      .filter((val) =>
        val == 'Option_A' || val == 'Option_B' ||
        val == 'Option_C' || val == 'Option_D')
      .forEach((v) => {
        optionArr.push(questionSelected[v])
      })

    return (
      <View style={{ flex : 1 }}>
        <Text style={styles.textQuestion}>
          {!loading && (optionSelected+1 + '. ' + questionSelected.Question)}
        </Text>
        {!loading && optionArr.map((value, index) => {
          return (
            <View
              key={index}
              style={styles.containerOption}>
              <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.touchOption,
                  (index+1) == questionSelected.Answer ?
                    { backgroundColor : Color.purpleMedium } :
                    { backgroundColor : Color.greyExam }
                ]}
                onPress={() => {
                  answerSelected.forEach((val, i) => {
                    if (val.ID == questionSelected.ID) {
                      let newAnswer = [...answerSelected]
                      newAnswer[i] = { ...val, Answer :
                        index == 0 ? 1 :
                          index == 1 ? 2 :
                            index == 2 ? 3 : 4 }
                      setAnswerSelected([...newAnswer])
                      setQuestionSelected(newAnswer[i])
                    }
                  })
                }
                }>
                <Text style={styles.textAlfabeth}>
                  {index == 0 ? 'A' :
                    index == 1 ? 'B' :
                      index == 2 ? 'C' : 'D'}
                </Text>
              </TouchableOpacity>
              <Text style={styles.textOption}>
                {value}
              </Text>
            </View>
          )
        })}
      </View>
    )
  }

  const ButtonQuestion = () => {
    return (
      <View style={styles.containerButton}>
        {optionSelected != 0 &&(
          <Buttons
            title='Sebelumnya'
            style={styles.buttonPrev}
            textStyle={{ color : Color.purpleExHint }}
            onPress={() => {
              answerSelected.forEach((v, i ) => {
                if (v.ID == questionSelected.ID) {
                  onNumberSelected(answerSelected[i-1], i-1)
                }
              })
            }}
          />
        )}
        {(optionSelected+1) != states.length ? (
          <Buttons
            title='Selanjutnya'
            style={styles.buttonNext}
            onPress={() => {
              answerSelected.forEach((v, i ) => {
                if (v.ID == questionSelected.ID) {
                  onNumberSelected(answerSelected[i+1], i+1)
                }
              })
            }}
          />
        ) : (
          <Buttons
            title='Selesai'
            style={styles.buttonNext}
            onPress={() => handleSubmit(answerSelected)}
          />
        )}
      </View>
    )
  }

  return (
    <View style={styles.containerMain}>
      <ModalNoConnection
        isVisible={connectStatus}
        retry={() => retryConnection()}
        backdropPress={() => togglemodalNoConnection()}
        backButtonPress={() => togglemodalNoConnection()}
      />
      <Loader loading={loadingBtn}/>
      <Header />
      <ScrollNumber />
    </View>
  )
}

ClassExam.propTypes = {
  route: PropTypes.object,
}

export default ClassExam
