import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, ScrollView, } from 'react-native'

import { Text } from '@ui-kitten/components'
import { Images, Color } from '../../../assets'
import { styles } from './modal-filter-admin.style'

const ModalFilterUstadz = (props) => {
  const [categorySelected, setCategorySelected] = useState(0)
  const [filter, setFilter] = useState([])
  const [sort, setSort] = useState('DESC')
  const horizontalScrollRef = useRef()

  const sorting = [
    { ID: 1, Type : 'DESC',  Value: 'Terbaru' },
    { ID: 2, Type : 'ASC', Value: 'Terlama' },
  ]

  const onResetChange = () => {
    setFilter('[]')
    setSort('DESC')
    setCategorySelected(0)
  }

  const onFilterChange = (item) => {
    setCategorySelected(item.ID)
    if (filter.length != 0) {
      setFilter([{ type : 'text', field : 'class_category', value : item.Value }])
    } else {
      filter.push({ type : 'text', field : 'class_category', value : item.Value })
      setFilter(filter)
    }
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
              <TouchableOpacity onPress={onResetChange}>
                <Text style={styles.TxtButtonReset}>Reset</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.viewKategoriKelas}>
              <ScrollView
                ref={horizontalScrollRef}
                horizontal={true} showsHorizontalScrollIndicator={false}>
                {props.state.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index}
                      onPress={ () => {
                        onFilterChange(item)
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
                        setSort(item.Type)
                      }}>
                      <Text
                        style={[
                          styles.textCategories,
                          item.Type == sort
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
              <TouchableOpacity onPress={() => props.submit(sort, filter)}>
                <Text style={styles.ButtonFilter}>Terapkan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  )
}

ModalFilterUstadz.propTypes = {
  state : PropTypes.array,
  submit : PropTypes.func,
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalFilterUstadz