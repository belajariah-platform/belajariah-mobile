import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, ScrollView, } from 'react-native'

import { Text } from '@ui-kitten/components'
import { Images, Color } from '../../../assets'
import { styles } from './modal-filter-admin.style'

const ModalFilterAdminPageUser = (props) => {
  const horizontalScrollRef = useRef()
  const [sort, setSort] = useState(1)
  const [categorySelected, setCategorySelected] = useState(0)

  const category = [
    { ID: 1, Value: 'Al-Quran' },
    { ID: 2, Value: 'Fiqih' },
  ]

  const sorting = [
    { ID: 1, Type : 'DESC',  Value: 'Terbaru' },
    { ID: 2, Type : 'ASC', Value: 'Terlama' },
  ]

  const handleReset = () => {
    setCategorySelected(0)
  }

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
              <Text style={styles.TxtTitleReset}>Kelas</Text>
              <TouchableOpacity onPress={handleReset}>
                <Text style={styles.TxtButtonReset}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewKategoriKelas}>
              <ScrollView
                ref={horizontalScrollRef}
                horizontal={true} showsHorizontalScrollIndicator={false}>
                {category.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={ () => {
                        setCategorySelected(item.ID)
                      }}>
                      <Text
                        style={[
                          styles.textCategories,
                          item.ID === categorySelected
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
                        {item.Value}
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
                {sorting.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={ () => {
                        setSort(item.ID)
                      }}>
                      <Text
                        style={[
                          styles.textCategories,
                          item.ID === sort
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
                        {item.Value}
                      </Text>
                    </TouchableOpacity>
                  )
                })}
              </ScrollView>
            </View>
            <View>
              <TouchableOpacity onPress={props.setFilter}>
                <Text style={styles.ButtonFilter}>Terapkan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalFilterAdminPageUser.propTypes = {
  setSort : PropTypes.func,
  isVisible : PropTypes.bool,
  setFilter : PropTypes.func,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalFilterAdminPageUser