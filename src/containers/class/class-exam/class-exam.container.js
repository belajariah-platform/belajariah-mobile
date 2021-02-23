import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect, useRef } from 'react'
import { Text, View, TouchableOpacity, ScrollView,   ToastAndroid, } from 'react-native'

import { Buttons } from '../../../components'
import { Images, Color } from '../../../assets'

import { styles } from './class-exam.style'

const ClassExam = () => {
  const mainScrollViewRef = useRef()
  const navigation = useNavigation()
  // const [minutes, setMinutes] = useState(4)
  // const [seconds, setSeconds] =  useState(59)
  const [optionSelected, setOptionSelected] = useState(0)
  const [answerSelected, setAnswerSelected] = useState([])
  const [questionSelected, setQuestionSelected] = useState({})


  const state = [
    { id : 1, question : 'Apa yang disebut makhorijul huruf…?', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah', answer : 0 },
    { id : 2, question : 'Terdapat dua garis diatas disebut harokat apakah itu ..?', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 3, question : ' ...  مِنۡ شَرِّ مَا خَلَقَۙ Yang digaris bawahi merupakan Contoh bacaan dari', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 4, question : 'Jika ada nun mati (نْ  )  atau tanwin (ــًــ, ــٍــ, ــٌــ) bertemu dengan huruf ‘ain  عmaka dibaca jelas, hukum bacaanya disebut…?', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 5, question : 'Sebutkan lima huruf bacaan qalqalah…!', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 6, question : 'Apabila ada nun mati atau tanwin (نْ  )  bertemu dengan huruf lam (ل)  dan ra ر) ( maka hukum bacaan ini disebut..?', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 7, question : 'Hukum bacaan nun bertasydid dan mim bertasydid disebut...?', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 8, question : 'Contoh bacaan لَمْ يَلِدْ وَلَمْ يُوْلَدْۙ, yang digaris bawah adalah contoh bacaan..?', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 9, question : 'Sebutkan 3 huruf-huruf mad thobi’i..!', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
    { id : 10, question : 'Sebutkan huruf-huruf izhar..!', option_a : 'Sifat-sifat huruf', option_b : 'Tempat keluarnya huruf', option_c : 'Tempat masuknya huruf', 'option_d' : 'Huruf hijaiah',  answer : 0 },
  ]

  const handleSubmit = async (state) => {
    console.log(state)
    ToastAndroid.show('Exam selesai', ToastAndroid.SHORT)
    navigation.navigate('ClassLearning', { passPreExam : true })
  }

  const onScrollPosition = () => {
    mainScrollViewRef.current.scrollTo({
      x: 1000,
      y: 100,
      animated: true,
    })
  }

  const onNumberSelected = (item, index) => {
    setOptionSelected(index)
    setQuestionSelected(item)
  }

  // useEffect(()=>{
  //   const intervalId = setInterval(() => {
  //     if (seconds > 0) {
  //       setSeconds(seconds - 1)
  //     }
  //     if (seconds === 0) {
  //       if (minutes === 0) {
  //         handleSubmit(answerSelected)
  //         clearInterval(intervalId)
  //       } else {
  //         setMinutes(minutes - 1)
  //         setSeconds(59)
  //       }
  //     }
  //   }, 1000)
  //   return () => clearInterval(intervalId)
  // }, [seconds, minutes])

  useEffect(() => {
    setAnswerSelected(state)
    if (optionSelected == 0) {
      setQuestionSelected(state[0])
    }
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
                  activeOpacity={0.7}
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
        <Question/>
      </View>
    )
  }

  const Question = () => {
    const optionArr = []
    Object.keys(questionSelected)
      .filter((val) =>
        val == 'option_a' ||val == 'option_b' ||
        val == 'option_c' || val == 'option_d')
      .forEach((v) => {
        optionArr.push(questionSelected[v])
      })

    return (
      <View style={styles.questionBox} >
        <View style={{ flex : 1 }}>
          <Text style={styles.textQuestion}>
            {optionSelected+1}. {questionSelected.question}
          </Text>
          {optionArr.map((value, index) => {
            return (
              <View
                key={index}
                style={styles.containerOption}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={[styles.touchOption,
                    (index+1) == questionSelected.answer ?
                      { backgroundColor : Color.purpleMedium } :
                      { backgroundColor : Color.greyExam }
                  ]}
                  onPress={() => {
                    answerSelected.forEach((val, i) => {
                      if (val.id == questionSelected.id) {
                        let newAnswer = [...answerSelected]
                        newAnswer[i] = { ...val, answer :
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
        <ButtonQuestion/>
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
                if (v.id == questionSelected.id) {
                  onNumberSelected(answerSelected[i-1], i-1)
                }
              })
            }}
          />
        )}
        {(optionSelected+1) != state.length ? (
          <Buttons
            title='Selanjutnya'
            style={styles.buttonNext}
            onPress={() => {
              answerSelected.forEach((v, i ) => {
                if (v.id == questionSelected.id) {
                  onNumberSelected(answerSelected[i+1], i+1)
                  onScrollPosition(200)
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
      <Header />
      <ScrollNumber />
    </View>
  )
}

export default ClassExam
