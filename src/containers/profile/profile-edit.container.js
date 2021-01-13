import React, {useState} from 'react'
import {ImageBackground, ScrollView, TextInput, Text, View, Alert, TouchableWithoutFeedback} from 'react-native'
import {styles} from './profile.style'
import {Images} from '../../assets'
import { Avatar, Datepicker, Icon, Radio, RadioGroup } from '@ui-kitten/components'
import { Buttons} from '../../components'
import { TouchableOpacity } from 'react-native-gesture-handler'


const CalendarIcon = (props) => (
    <Icon {...props} name='calendar'/>
  );

const ProfileEdit = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [date, setDate] = React.useState(new Date());
    const [secureTextEntry, setSecureTextEntry] = useState(true)

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
      };
      
      const renderIcon = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
          <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
      )
    return (
        <>
            <View style = {styles.containerView}>
                <ScrollView>
                    <View style = {styles.containerAvatar}>
                        <TouchableOpacity style={styles.containerTouch}>
                            <Avatar source={Images.AvatarProfile} style={styles.Avatar}></Avatar>
                        </TouchableOpacity>
                        <Text style={styles.containerJudulAvatar}>Rico</Text>
                    </View>
                    <View style = {styles.containerViewBg}>
                        <ImageBackground source={Images.BgProfileEdit} style = {styles.image}>
                            <TouchableOpacity style={styles.containerTouchButton}>
                                <Images.ButtonBack.default style={styles.containerButtonBack}/>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                    <View style = {styles.containerViewAtas}>
                        <Text style = {styles.containerTextJudul}>DATA PERSONAL</Text>
                        <Text style = {styles.containerText}>Nama Anda</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <Text style = {styles.containerText}>Nomor Telepon</Text>
                        <TextInput keyboardType='phone-pad' placeholder='+62' style = {styles.containerInput}></TextInput>
                        <Text style = {styles.containerText}>Profesi</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <Text style = {styles.containerText}>Jenis Kelamin</Text>
                        <View >
                            <RadioGroup style = {styles.containerRadio} selectedIndex={selectedIndex} onChange={index => setSelectedIndex(index)}>
                                <Radio style = {styles.containerInputRadio}>Laki-laki</Radio>
                                <Radio style = {styles.containerInputRadio}>Perempuan</Radio>
                            </RadioGroup>
                        </View>
                        <Text style = {styles.containerText}>Tanggal Lahir</Text>
                        <Datepicker date={date} onSelect={nextDate => setDate(nextDate)} accessoryRight={CalendarIcon} style={styles.containerInput}/>
                        <Text style = {styles.containerText}>Provinsi</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <Text style = {styles.containerText}>Kota</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <Text style = {styles.containerText}>Alamat</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <View style={styles.fixToText}>
                            <Buttons title="Batal" onPress={() => Alert.alert} style={styles.containerButton} ></Buttons>
                            <Buttons title="Simpan" style={styles.containerButton}></Buttons>
                        </View>
                    </View>
                    <View style = {styles.containerViewBawah}>
                        <Text style = {styles.containerTextJudul}>UBAH KATA SANDI</Text>
                        <Text style = {styles.containerText}>Kata Sandi Lama</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <Text style = {styles.containerText}>Kata Sandi Baru</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <Text style = {styles.containerText}>Konfirmasi Kata Sandi</Text>
                        <TextInput style = {styles.containerInput}></TextInput>
                        <View style={styles.fixToText}>
                            <Buttons title="Batal" onPress={() => Alert.alert} style={styles.containerButton} ></Buttons>
                            <Buttons title="Simpan" style={styles.containerButton}></Buttons>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default ProfileEdit