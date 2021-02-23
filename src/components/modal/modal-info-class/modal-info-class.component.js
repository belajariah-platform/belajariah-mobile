import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import { Card } from 'react-native-elements'
import React, { useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, TouchableOpacity, Image } from 'react-native'
import {FormatRupiah} from '../../../utils'
import { Images } from '../../../assets'
import { Text } from '@ui-kitten/components'
import { styles } from './modal-info-class.style'

const ModalInfoClass = (props) => {

  const BenefitCategory = [
    { value : 'Akses video|video' },
    { value : 'Ringkasan materi|document' },
    { value : 'Akses konsultasi|consultation' },
    { value : 'Webinar|webinar' },
    { value : 'Akses grub chat khusus|group' },
    { value : 'Sertifikat dan hasil evaluasi belajar|sertificate' },
  ]
  const navigation = useNavigation()
  const route = useRoute()

  const ViewClass = () => {
    return(
      <>
      {props.state && props.state.map((value, index) => {
        let icon
        let colors 
        value.Type == "Darussalam" ? (icon = Images.IconPaketDarussalam, colors = '#f9edff') : 
        value.Type == "Naim" ? (icon = Images.IconPaketNaim, colors = '#fff') :
        (icon = Images.IconPaketFirdaus, colors = '#e7fcf8')
        return (
          <TouchableOpacity
          key={index}
          onPress={() => {
            props.backdropPress
            navigation.navigate('ClassDetail', value)}}>
          <View style={[styles.containerPaketDarussalam, {backgroundColor: colors,}]}>
          <View style={styles.viewTitlePaket}>
            <icon.default 
              width={50}
              height={50}
            />
            <View style={styles.viewTxtTitlePaket}>
              <Text style={styles.TxtTitlePaketDarussalam}>Paket {value.Type}</Text>
              <Text style={styles.textBold}>Keuntungan yang kamu dapatkan</Text>
            </View>
          </View>
          <View style={styles.flexBenefits}>
            <Images.IconBenefit1Darussalam.default 
              width={23}
              height={23}
              style={styles.IconBenefit}
            />
            <Text style={styles.TxtDescPaket}>Langganan {value.Duration} bulan</Text>
          </View>
          <View style={styles.flexBenefits}>
            <Images.IconBenefit2Darussalam.default 
              width={23}
              height={23}
              style={styles.IconBenefit}
            />
            <Text style={styles.TxtDescPaket}>Akses Konsultasi {value.Consultation}x</Text>
          </View>
          <View style={styles.flexBenefits}>
            <Images.IconBenefit3Darussalam.default 
              width={23}
              height={23}
              style={styles.IconBenefit}
            />
            <Text style={styles.TxtDescPaket}>Webinar {value.Webinar}x</Text>
          </View>
          <View style={styles.flexBenefits}>
            <Text style={styles.TxtHargaCoret}>Rp {FormatRupiah(value.Price_Discount)}</Text>
            <Text style={styles.TxtTitlePaketDarussalam}>Rp {FormatRupiah(value.Price_Package)}</Text>
          </View>
        </View>
        </TouchableOpacity>
        )
      })}
      </>
     
    )
  }

  const ViewClassNaim = () => {
    return(
      <TouchableOpacity>
        <View style={styles.containerPaketNaim}>
        <View style={styles.viewTitlePaket}>
          <Images.IconPaketNaim.default 
            width={50}
            height={50}
          />
          <View style={styles.viewTxtTitlePaket}>
            <Text style={styles.TxtTitlePaketNaim}>Paket Na'im</Text>
            <Text style={styles.textBold}>Keuntungan yang kamu dapatkan</Text>
          </View>
        </View>
        <View style={styles.flexBenefits}>
          <Images.IconBenefit1Naim.default 
            width={23}
            height={23}
            style={styles.IconBenefit}
          />
          <Text style={styles.TxtDescPaket}>Langganan 3 bulan</Text>
        </View>
        <View style={styles.flexBenefits}>
          <Images.IconBenefit2Naim.default 
            width={23}
            height={23}
            style={styles.IconBenefit}
          />
          <Text style={styles.TxtDescPaket}>Akses Konsultasi 24x</Text>
        </View>
        <View style={styles.flexBenefits}>
          <Images.IconBenefit3Naim.default 
            width={23}
            height={23}
            style={styles.IconBenefit}
          />
          <Text style={styles.TxtDescPaket}>Webinar 3x</Text>
        </View>
        <View style={styles.flexBenefits}>
          <Text style={styles.TxtHargaCoret}>Rp1.000.000</Text>
          <Text style={styles.TxtTitlePaketNaim}>Rp899.000</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }

  const ViewClassFirdaus = () => {
    return(
      <TouchableOpacity>
        <View style={styles.containerPaketFirdaus}>
        <View style={styles.viewTitlePaket}>
          <Images.IconPaketFirdaus.default 
            width={50}
            height={50}
          />
          <View style={styles.viewTxtTitlePaket}>
            <Text style={styles.TxtTitlePaketFirdaus}>Paket Firdaus</Text>
            <Text style={styles.textBold}>Keuntungan yang kamu dapatkan</Text>
          </View>
        </View>
        <View style={styles.flexBenefits}>
          <Images.IconBenefit1Firdaus.default 
            width={23}
            height={23}
            style={styles.IconBenefit}
          />
          <Text style={styles.TxtDescPaket}>Langganan 6 bulan</Text>
        </View>
        <View style={styles.flexBenefits}>
          <Images.IconBenefit2Firdaus.default 
            width={23}
            height={23}
            style={styles.IconBenefit}
          />
          <Text style={styles.TxtDescPaket}>Akses Konsultasi 32x</Text>
        </View>
        <View style={styles.flexBenefits}>
          <Images.IconBenefit3Firdaus.default 
            width={23}
            height={23}
            style={styles.IconBenefit}
          />
          <Text style={styles.TxtDescPaket}>Webinar 6x</Text>
        </View>
        <View style={styles.flexBenefits}>
          <Text style={styles.TxtHargaCoret}>Rp1.699.000</Text>
          <Text style={styles.TxtTitlePaketFirdaus}>Rp1.499.000</Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }

    return(
    <>
        <Modal
            backdropOpacity={0.25}
            isVisible={props.isVisible}
            style={styles.backdropStyle}
            onBackdropPress={props.backdropPress}
            >
            <View style={[styles.modalStyle, props.containerStyle]}>
                <View style={styles.modalContentSyle}>
                   <View style={styles.viewTxtJudulModal}>
                    <Text style={styles.TxtJudulModal}>Pilih Paket Belajar</Text>
                   </View>
                   <ViewClass />
                   {/* <ViewClassNaim />
                   <ViewClassFirdaus /> */}
                </View>
            </View>
        </Modal>
    </>
    )
}

ModalInfoClass.propTypes = {
    title : PropTypes.string,
    isVisible : PropTypes.bool,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    containerStyle : PropTypes.object,
}

export default ModalInfoClass
