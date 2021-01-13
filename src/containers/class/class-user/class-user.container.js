import React, {useState} from 'react'
import {ImageBackground, Text, View, Image, FlatList, SafeAreaView} from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { array, object } from 'yup/lib/locale'
import {Images} from '../../../assets'
import { Buttons } from '../../../components'
import {Button} from 'react-native-elements'
import { styles } from '../class-user/class-user.style'
import { ScrollView } from 'react-native'
import Textarea from 'react-native-textarea'
import { Icon } from '@ui-kitten/components'
import { StatusBar } from 'expo-status-bar'


const ClassUser = (props) => {
    let [ShowComment, setShowModelComment] = useState(false);
    const [available, setAvailable] = useState(false)

    // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(0);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);

  const Comment = [{'value' : 'Terima kasih'}, {'value' : 'Pengajar berkompeten'}, {'value' : 'Belajariah keren'}, {'value' : 'Banyak hadiah'}, {'value' : 'Materinya mudah dipahami'}];
  const [defaulComment, setDefaultComment] = useState('');

  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
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
          );
        })}
      </View>
    );
  };
  
    return (
        <>        
        <View style={styles.containerView}>
            <View style={styles.containerHeader}>
                <Text style={styles.containerTextHeader}>Kelas Saya</Text>
                <TouchableOpacity>
                    <Images.Filter.default width={70} height={50} style={styles.containerButtonFilter}/>
                </TouchableOpacity>
            </View>
            <ImageBackground source={Images.BgClassUser}  style={{height: '100%', width: '100%', marginTop: '5%',}} imageStyle={{ borderRadius: 30}}>
                {available ? (
                    <View style={styles.containerViewClass}>
                        <Images.IconClass.default></Images.IconClass.default>
                        <Text style={styles.containerTextClass} onPress = {() => props.navigation.navigate('ClassLearning')}>Oops!</Text>
                        <Text style={styles.containerChildTextClass}>Saat ini tidak ada kelas</Text>
                        <Text style={styles.containerChildTextClass}>yang anda ikuti, <Text style={styles.containerChildTextClass2}>Yuk gabung</Text></Text>
                        <Text style={styles.containerChildTextClass2}>kelas sekarang juga</Text>    
                    </View>
                ) :
                    (
                        <>
                        <View style={{paddingBottom: '15%',}}>
                        <ScrollView>   
                                <View style={{margBottom: 100,}}>
                                    <View style={styles.containerClassProgress}>
                                        <Images.IconStepStart.default />
                                        <Images.IconStepProgress.default />
                                        <Images.IconStepFinish.default />
                                    </View>
                                    <View></View>
                                    <View style={{bottom: '13%',}}>
                                        <ImageBackground source={Images.BgClassLearning} style={{height: 'auto', width: '95%', marginTop: '5%', marginBottom: 10, marginHorizontal: '5%',  zIndex:10,}} imageStyle={{ borderRadius: 30}}>
                                            <View style={styles.containerIconProgress}>
                                                <Image source={Images.TahsinImage} style={styles.ImageClass}/>
                                                <Text style={styles.TextClass}>Belajar Al-Qur'an dari dasar dengan metode yang mudah dan menyenangkan</Text>
                                            </View>
                                            <Text style={styles.ButtonTextClass}>Nilai Exam : 0</Text>
                                            <View style={styles.containerIconProgress}>
                                            <StatusBar hidden />
                                                <TouchableOpacity>
                                                    <Buttons title='Lanjut' style={styles.ButtonClass} onPress = {() => props.navigation.navigate('ClassLearning')}></Buttons>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                </View>
                                <View style={styles.containerReview}>
                                <FlatList
                                    numColumns={2}
                                    keyExtractor={(item, index) => index}
                                    data={Comment}
                                    renderItem={({item, index}) => (
                                    <TouchableOpacity onPress={() => setDefaultComment(item.value)}>
                                        <Text style={styles.ButtonClassReview}>{item.value}</Text>
                                        {/* <Buttons title='Terima kasih' style={styles.ButtonClassReview} ></Buttons> */}
                                    </TouchableOpacity>
                                    )}
                                />
                                    
                                    {/* <View style={styles.containerClassReview}>
                                        <Buttons title='Terima kasih' style={styles.ButtonClassReview} ></Buttons>
                                        <Buttons title='Pengajar berkompeten' style={styles.ButtonClassReview} ></Buttons>
                                    </View>
                                    <View style={styles.containerClassReview}>
                                        <Buttons title='Belajariah keren' style={styles.ButtonClassReview} ></Buttons>
                                        <Buttons title='Banyak hadiah' style={styles.ButtonClassReview} ></Buttons>
                                    </View>
                                    <View style={styles.containerClassReview}>
                                        <Buttons title='Materinya mudah dipahami' style={styles.ButtonClassReview} ></Buttons>
                                    </View> */}
                                    <View style={{marginBottom: 20,}}>
                                        <Textarea
                                            onChangeText={text => setDefaultComment()}
                                            style={styles.textarea}   
                                            maxLength={120}
                                            placeholder={'Place'}
                                            placeholderTextColor={'#c7c7c7'}
                                            underlineColorAndroid={'transparent'}
                                        />
                                    </View>
                                    <View style={styles.containerRating}>
                                        <CustomRatingBar />
                                        <Buttons title='Kirim' style={styles.ButtonClass} ></Buttons>
                                    </View>
                                </View>
                                <View style={{top:'-3%',}}>
                                    <View style={styles.containerClassProgress}>
                                            <Images.IconStepStart.default />
                                            <Images.IconStepProgress.default />
                                            <Images.IconStepFinish.default />
                                    </View>
                                    <ImageBackground source={Images.BgClassLearning} style={{height: 'auto', width: '95%', marginTop: '5%', marginHorizontal: '5%', top: '-12.5%',}} imageStyle={{ borderRadius: 30}}>
                                        <View style={styles.containerIconProgress}>
                                            <Image source={Images.TilawahImage} style={styles.ImageClass}/>
                                            <Text style={styles.TextClass}>Bisa Ngaji dengan nada indah (Tilawah) seperti Qari' profesional</Text>
                                        </View>
                                        <Text style={styles.ButtonTextClass}>Nilai Exam : 80</Text>
                                        <View style={styles.containerIconProgress}>
                                            <TouchableOpacity>
                                                <Buttons title='Akses Video' style={styles.ButtonClassNew}></Buttons>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Buttons title='Unduh Sertifikat' style={styles.ButtonClassNew}></Buttons>
                                            </TouchableOpacity>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </ScrollView>
                        </View>
                        </>
                    )
                 }
            </ImageBackground>
        </View>
        </>
    )
}

export default ClassUser