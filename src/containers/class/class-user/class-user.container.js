import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {
  Text,
  View,
  Image,
  FlatList,
  TextInput,
  ImageBackground,
} from 'react-native'

import { Images } from '../../../assets'
import { Buttons, ButtonGradient, Progressbar } from '../../../components'

import { styles } from '../class-user/class-user.style'


const ClassUser = (props) => {
  const maxRating = [1, 2, 3, 4, 5]
  const [available, setAvailable] = useState(false)
  const [defaultRating, setDefaultRating] = useState(0)

  const Comment = [
    { 'value' : 'Terima kasih' },
    { 'value' : 'Pengajar berkompeten' },
    { 'value' : 'Belajariah keren' },
    { 'value' : 'Banyak hadiah' },
    { 'value' : 'Materinya mudah dipahami' }
  ]
  const Progress = [
    { 'value' : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan', 'status' : 'start', 'progress' : 0 },
    { 'value' : 'Bisa Ngaji dengan nada indah (Tilawah) seperti Qari profesional', 'status' : 'in progress', 'progress' : 50 },
    { 'value' : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan', 'status' : 'in progress', 'progress': 100 },
    { 'value' : 'Belajar Al-Qur/an dari dasar dengan metode yang mudah dan menyenangkan', 'status' : 'completed', 'progress': 100 },
  ]

  const setFinishProgress = (item) => {
    if (item.status == 'in progress' &&
    item.progress == 100 ) {
      Progress[2].status = 'completed'
    }
  }

  const RatingbarClass = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, index) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={index}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? Images.BintangFull
                    : Images.BintangBorder
                }
              />
            </TouchableOpacity>
          )
        })}
      </View>
    )
  }

  const ReviewClass = () => {
    return (
      <View style={styles.containerReview}>
        <FlatList
          numColumns={2}
          keyExtractor={(item, index) => index}
          data={Comment}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              style={styles.touchClassReview}
            >
              <Text style={styles.buttonClassReview}>{item.value}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.containerTextArea}>
          <TextInput
            multiline={true}
            numberOfLines={10}
            style={styles.textArea}/>
        </View>
        <View style={styles.containerRating}>
          <RatingbarClass />
          <Buttons
            title='Kirim'
            style={styles.ButtonClass} />
        </View>
      </View>
    )
  }

  return (
    <>
      <View style={styles.containerView}>
        <View style={styles.containerHeader}>
          <Text style={styles.containerTextHeader}>Kelas Saya</Text>
          <TouchableOpacity onPress={() => setAvailable(!available)}>
            <Images.Filter.default
              width={40}
              height={40}
              style={styles.containerButtonFilter}
            />
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={Images.BgClassUser}
          style={styles.imageBackground}
          imageStyle={{ borderRadius: 30 }}
        >
          {available ? (
            <View style={styles.containerViewClass}>
              <Images.IconClassEmpty.default/>
              <Text style={styles.containerTextClass}>Oops!</Text>
              <Text style={styles.containerChildTextClass}>Saat ini tidak ada kelas</Text>
              <Text style={styles.containerChildTextClass}>yang anda ikuti, <Text style={styles.containerChildTextClass2}>Yuk gabung</Text></Text>
              <Text style={styles.containerChildTextClass2}>kelas sekarang juga</Text>
            </View>
          ) :
            (
              <FlatList
                data={Progress}
                style={{ width:'90%' }}
                showsVerticalScrollIndicator ={false}
                keyExtractor={(item, index) =>  index.toString()}
                renderItem={({ item, index }) => (
                  <>
                    <View key={index}>
                      <View style={styles.containerClassProgress}>
                        <Images.IconStepStart.default />
                        {item.status == 'in progress' ||
                        item.status == 'completed' ? (
                            <Images.IconLine.default style={styles.iconTop}/> ) : (
                            <Images.IconLineHide.default style={styles.iconTop}/>
                          )}
                        {item.status == 'in progress' ||
                          item.status == 'completed' ? (
                            <Images.IconStepProgress.default /> ) : (
                            <Images.IconStepProgressHide.default />
                          )}
                        {item.status == 'completed' ? (
                          <Images.IconLine.default style={styles.iconTop}/> ) : (
                          <Images.IconLineHide.default style={styles.iconTop}/>
                        )}
                        {item.status == 'completed' ? (
                          <Images.IconStepFinish.default /> ) : (
                          <Images.IconStepFinishHide.default />
                        )}
                      </View>
                      <View style={{ bottom: 20 }}>
                        <ImageBackground
                          source={Images.BgClassLearning}
                          imageStyle={{ borderRadius: 20 }}
                          style={{ height: 'auto' }}
                        >
                          <View style={styles.containerIconProgress}>
                            <Image source={Images.TahsinImage} style={styles.ImageClass}/>
                            <Text style={styles.TextClass}>{item.value}</Text>
                          </View>
                          <Text style={styles.ButtonTextClass}>Nilai Exam : 0</Text>
                          <View style={[styles.containerIconProgress, styles.customIconProgress]}>
                            {item.status  == 'completed' ? (
                              <ButtonGradient
                                title='Akses Video'
                                textStyle={styles.textButton}
                                styles={styles.buttonClassCustom}
                                icon={<Images.IconVideo.default style={styles.iconClassCustomLeft}/>}
                                onPress = {() => props.navigation.navigate('ClassLearning')}/>
                            ) : (
                              <View style={styles.progressBar}>
                                <Text style={styles.progressBarText}>Progress kelas</Text>
                                <Progressbar progress={item.progress}/>
                              </View>
                            )}
                            {item.status  == 'completed' ? (
                              <ButtonGradient
                                title='Unduh Sertifikat'
                                textStyle={styles.textButton}
                                styles={styles.buttonClassCustom}
                                icon={<Images.IconDownload.default
                                  style={styles.iconClassCustomRight}/>}
                                onPress = {() => props.navigation.navigate('ClassLearning')}/>
                            ) : (
                              <ButtonGradient
                                styles={styles.ButtonClass}
                                textStyle={styles.textButton}
                                title={
                                  item.status == 'in progress' && item.progress == 100 ? 'Selesai' :
                                    item.status == 'start' ? 'Mulai' : 'Lanjut'}
                                onPress = {() => setFinishProgress(item)}/>
                            )}
                          </View>
                        </ImageBackground>
                      </View>
                    </View>
                    <ReviewClass/>
                  </>
                )}
              />
            )
          }
        </ImageBackground>
      </View>
    </>
  )
}

ClassUser.propTypes = {
  navigation: PropTypes.object,
}


export default ClassUser