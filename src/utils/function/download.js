import RNFetchBlob from 'rn-fetch-blob'

import {
  ToastAndroid,
  PermissionsAndroid
} from 'react-native'


const DownloadFile = async (item) => {
  try {
    try {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
      ])
    } catch (err) {
      console.warn(err)
    }
    const readGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE)
    const writeGranted = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
    if(!readGranted || !writeGranted) {
      console.log('Read and write permissions have not been granted')
      return
    }
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ])
    if(granted === PermissionsAndroid.RESULTS.GRANTED) {
      //
    }
    var date = new Date()
    var url = item.path
    var ext = extention(url)
    ext = '.' + ext[0]
    const { config, fs } = RNFetchBlob
    let PictureDir = fs.dirs.PictureDir
    let options = {
      fileCache: true,
      addAndroidDownloads : {
        useDownloadManager : true,
        notification : true,
        path:  PictureDir + '/doc'+Math.floor(date.getTime() + date.getSeconds() / 2)+ext,
        description : 'Image'
      }
    }
    config(options).fetch('GET', url).then(() => {
      ToastAndroid.show('Download has Finished', ToastAndroid.SHORT)
    })
  } catch (err) {
    console.log(err)
  }
}

const extention = (filename) => {
  return (/[.]/.exec(filename)) ? /[^.]+$/.exec(filename) : undefined
}



export default DownloadFile