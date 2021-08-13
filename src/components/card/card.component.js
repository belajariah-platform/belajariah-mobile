import React from 'react'
import PropTypes from 'prop-types'
import { styles } from './card.style'
import { Images } from '../../assets'
import { Avatar, Card } from 'react-native-elements'
import { View, Text, Image } from 'react-native'
import { FormatRupiah } from '../../utils'

const  Cards = (props)  => {
  // console.log(props.item)
  const CardDirosa = () => {
    return (
      <View style={styles.container}>
        <View >
          <Image
            source={Images.CardDirosa}
            style={styles.images2}
          />
        </View>
        <View style={styles.content}>
          <View style={styles.rating}>
            {props.rating}
            <Text style={styles.text4}>Rp.600.000 - Rp.1.100.000</Text>
          </View>
          <Text style={styles.TxtPriceDirosa}>(Hemat Rp.400.000)</Text>
          <Text style={styles.TxtPriceDiscountDirosa}>Rp.315.000 - Rp.700.000</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <View style={styles.container}>
      {props.imageTitle}
      <View >
        <Image
          source={props.filepath == '' ? Images.ImgDefault3 :
            { uri : props.filepath }}
          style={styles.images}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.text1}>Instruktur :</Text>
        <View style={styles.instrukturView}>
          <Avatar
            containerStyle={styles.avatar}
            source={props.item.Instructor_Image == '' ?
              Images.ImageProfileDefault : { uri : props.item.Instructor_Image }}
          />
          <View style={styles.bioView}>
            <Text style={styles.text2}>{props.item.Instructor_Name}</Text>
            <Text style={styles.text3}>Pengajar Tahsin</Text>
          </View>
        </View>
        <Card.Divider style={styles.divider} />
        <View style={styles.rating}>
          {props.rating}
          <Text style={styles.text4}>Rp{FormatRupiah(props.item.Price_Start)}</Text>
        </View>
        <Text style={styles.text5}>Rp{FormatRupiah(props.item.Price_Start_Discount)}</Text>
      </View>
    </View>
    <CardDirosa />
    </View>
  )
}
Cards.propTypes = {
  item : PropTypes.object,
  price : PropTypes.object,
  rating : PropTypes.object,
  filepath : PropTypes.string,
  imageTitle : PropTypes.object,
}


export default Cards