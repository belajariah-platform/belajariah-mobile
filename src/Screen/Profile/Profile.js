import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Image, Avatar, Icon} from 'react-native-elements';
import Icons from 'react-native-vector-icons/FontAwesome5';
import {Button} from '@ui-kitten/components';
import {useDispatch} from 'react-redux';
import {userLogout} from '../../Redux/Action/userAction';

function Profile(props) {
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 2}}>
        <Image
          style={{width: '100%', height: 140, backgroundColor: '#5E34A1'}}
        />
        <View style={{alignSelf: 'center', alignItems: 'center'}}>
          <Avatar
            rounded
            // source={
            //   dataProfile.picture && { uri: API_URL + dataProfile.picture }
            // }
            size={130}
            containerStyle={style.avatar}
          />
          <View>
            <Text style={style.name}>Heri Heryanto</Text>
            <Text style={style.email}>herryheryanto22@gmail.com</Text>
          </View>
        </View>
        <View style={style.line} />
        <ScrollView>
          <View style={style.block}>
            <Text style={style.titleBlock}>Kelas</Text>
            <TouchableOpacity>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-person"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Kelas saya</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={{...style.titleBlock, marginTop: 15}}>Akun</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ProfileUpdate')}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-person"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Edit Profile</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('TopupNavigate')}>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  reverse
                  name="ios-cloud-upload"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Hasil Test</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={{...style.titleBlock, marginTop: 15}}>Security</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('SecurityCode')}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-code"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Tema</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('ChangePassword')}>
              <View style={{flexDirection: 'row', marginTop: 10}}>
                <Icon
                  reverse
                  name="ios-key"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>Change Password</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View style={style.line} />
            <Text style={{...style.titleBlock, marginTop: 15}}>About</Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('OnProgress')}>
              <View style={{flexDirection: 'row', marginTop: 20}}>
                <Icon
                  reverse
                  name="ios-information-circle"
                  type="ionicon"
                  color="grey"
                  size={15}
                />
                <Text style={style.list}>About us</Text>
                <Icons name="chevron-right" size={13} style={style.icons} />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={style.hastag}>#Belajariah</Text>
              <Button style={style.logout}>Logout</Button>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  avatar: {
    marginTop: -70,
    borderWidth: 5,
    borderColor: '#f6f6f8',
    padding: 0,
    backgroundColor: '#8f9bb3',
  },
  email: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 13,
    color: '#a6a6a6',
  },
  name: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 18,
    color: '#555555',
  },
  list: {
    fontWeight: '600',
    fontSize: 15,
    color: '#605f5f',
    marginLeft: 10,
    marginTop: 13,
  },
  line: {
    marginTop: 30,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    width: '100%',
    alignSelf: 'center',
  },
  icons: {
    color: '#c7c7c7',
    right: 0,
    width: 20,
    marginTop: 18,
    position: 'absolute',
  },
  block: {
    flex: 5,
    paddingHorizontal: 10,
    paddingLeft: 20,
    paddingTop: 20,
    marginBottom: 70,
  },
  titleBlock: {
    fontWeight: 'bold',
    color: '#4e4e4e',
    fontSize: 16,
  },
  logout: {
    marginTop: 15,
    backgroundColor: '#5E34A1',
    borderWidth: 0,
    borderRadius: 20,
    width: '100%',
    alignSelf: 'center',
  },
  hastag: {
    marginTop: 10,
    fontSize: 13,
    color: 'grey',
    textAlign: 'right',
    marginRight: 10,
  },
});

export default Profile;
