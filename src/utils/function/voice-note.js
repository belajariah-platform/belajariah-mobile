import { Buffer } from 'buffer'
import Sound from 'react-native-sound'
import AudioRecord from 'react-native-audio-record'
import { Platform, PermissionsAndroid } from 'react-native'

const StartRecord = () => {
  AudioRecord.start()
}

const StopRecord = async () => {
  let audioFile = await AudioRecord.stop()
  return audioFile
}

const PauseRecord = (sound) => {
  sound.pause()
}

const load = (sound, audioFile) => {
  return new Promise((resolve, reject) => {
    if (!audioFile) {
      const reason = 'File path is empty !'
      return reject(reason)
    }

    sound = new Sound(audioFile, '', error => {
      if (error) {
        console.log('failed to load the file', error)
        return reject(error)
      }
      return resolve()
    })
  })
}

const ReplayRecord = async (sound, audioFile) => {
  try {
    await load(sound, audioFile)
  } catch (error) {
    console.log(error)
  }
  Sound.setCategory('Playback')

  try {
    sound.play(success => {
      if (success) {
        console.log('successfully finished playing')
      } else {
        console.log('playback failed due to audio decoding errors')
      }
    })
  } catch (error) {
    console.log('ERROR =>', error)
  }
}

const StartPathRecord = (music, musicUrl) => {
  music = new Sound(musicUrl, Sound.MAIN_BUNDLE, (e) => {
    if (e) {
      console.log('error loading track:', e)
    } else {
      music.play()
    }
  })
}

const StopPathRecord = (music) => {
  music.stop()
}

const requestWriteStoragePermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return true
    }
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Access',
        message: 'App need access to storage'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }
    return false
  } catch (err) {
    console.warn(err)
  }
}

const requestAudioPermission = async () => {
  try {
    if (Platform.OS === 'ios') {
      return true
    }
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      {
        title: 'Audio Access',
        message: 'App need access to audio'
      }
    )
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true
    }
    return false
  } catch (err) {
    console.warn(err)
  }
}

const AskPermissionsRecording = async () => {
  await requestAudioPermission()
  await requestWriteStoragePermission()
  const options = {
    sampleRate: 16000,
    channels: 1,
    bitsPerSample: 16,
    audioSource: 6,
    wavFile: 'test.wav'
  }
  AudioRecord.init(options)
  AudioRecord.on('data', data => {
    const chunk = Buffer.from(data, 'base64')
    console.log('data', data)
    console.log('chubk', chunk)
  })
}

export default {
  StopRecord,
  StartRecord,
  PauseRecord,
  ReplayRecord,
  StopPathRecord,
  StartPathRecord,
  AskPermissionsRecording,
}