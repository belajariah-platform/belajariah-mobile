import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, ScrollView, } from 'react-native'

import { Text } from '@ui-kitten/components'
import { Images, Color } from '../../../assets'
import { styles } from './modal-filter-admin.style'

const ModalFilterUserTransaction = (props) => {
  const horizontalScrollRef = useRef()
  const [categorySelected, setCategorySelected] = useState(0)
  const [StatuscategorySelected, setStatuscategorySelected] = useState(0)

  const categoriesStatus = [
    { id: 1, name: 'Lunas' },
    { id: 2, name: 'Pending' },
    { id: 3, name: 'Gagal' },
  ]

  const categoriesWaktu = [
    { no: 1, Desc: 'Terbaru ke Terlama' },
    { no: 2, Desc: 'Terlama ke Terbaru' },
  ]

  return(
    <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
        onBackButtonPress={props.backButtonPress}
      >
        <View style={[styles.modalStyle, props.containerStyle]}>
          <View style={styles.containerHeader}>
            <Text style={styles.TxtTitleFilter}>Filter</Text>
            <TouchableOpacity
              onPress={props.backdropPress}
              style={styles.closeStyle}>
              <Images.ButtonClose.default/>
            </TouchableOpacity>
          </View>
          <View style={styles.modalContentSyle}>
            <View style={styles.viewReset}>
              <Text style={styles.TxtTitleReset}>Status</Text>
              <TouchableOpacity>
                <Text style={styles.TxtButtonReset}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewKategoriKelas}>
              <ScrollView
                ref={horizontalScrollRef}
                horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoriesStatus.map((category, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={ () => {
                        setStatuscategorySelected(category.id)
                        // await horizontalScrollRef.current.scrollTo({
                        //   x: 4000,
                        //   animated: true,
                        // })
                      }}>
                      <Text
                        style={[
                          styles.textCategories,
                          category.id === StatuscategorySelected
                            ? {
                              color: Color.white,
                              borderColor: Color.transparent,
                              backgroundColor: Color.purpleButton,
                            }
                            : {
                              borderWidth: 1,
                              color: Color.purpleText,
                              borderColor: Color.purpleButton,
                              backgroundColor: Color.bgColorWhite,
                            },
                        ]}>
                        {category.name}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </ScrollView>
            </View>
            <View style={styles.viewReset}>
              <Text style={styles.TxtTitleReset}>Waktu</Text>
            </View>
            <View style={styles.viewKategoriKelas}>
              <ScrollView
                ref={horizontalScrollRef}
                horizontal={true} showsHorizontalScrollIndicator={false}>
                {categoriesWaktu.map((categoriesWaktu, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={ () => {
                        setCategorySelected(categoriesWaktu.no)
                        // await horizontalScrollRef.current.scrollTo({
                        //   x: 4000,
                        //   animated: true,
                        // })
                      }}>
                      <Text
                        style={[
                          styles.textCategories,
                          categoriesWaktu.no === categorySelected
                            ? {
                              color: Color.white,
                              borderColor: Color.transparent,
                              backgroundColor: Color.purpleButton,
                            }
                            : {
                              borderWidth: 1,
                              color: Color.purpleText,
                              borderColor: Color.purpleButton,
                              backgroundColor: Color.bgColorWhite,
                            },
                        ]}>
                        {categoriesWaktu.Desc}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </ScrollView>
            </View>
            <View>
              <TouchableOpacity>
                <Text style={styles.ButtonFilter}>Terapkan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalFilterUserTransaction.propTypes = {
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalFilterUserTransaction