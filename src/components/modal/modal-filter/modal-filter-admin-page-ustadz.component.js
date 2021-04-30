import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, { useState, useRef } from 'react'
import { View, TouchableOpacity, ScrollView, } from 'react-native'

import { Text } from '@ui-kitten/components'
import { Images, Color } from '../../../assets'
import { styles } from './modal-filter-admin.style'

const ModalFilterAdminPageUstadz = (props) => {
  const [sort, setSort] = useState(1)
  const horizontalScrollRef = useRef()

  const sorting = [
    { ID: 1, Type : 'DESC',  Value: 'Terbaru' },
    { ID: 2, Type : 'ASC', Value: 'Terlama' },
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
              <Text style={styles.TxtTitleReset}>Nama</Text>
              <TouchableOpacity>
                <Text style={styles.TxtButtonReset}>Reset</Text>
              </TouchableOpacity>
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
                          item.ID == sort
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

ModalFilterAdminPageUstadz.propTypes = {
  isVisible : PropTypes.bool,
  renderItem : PropTypes.object,
  backdropPress : PropTypes.func,
  backButtonPress : PropTypes.func,
  containerStyle : PropTypes.object,
}

export default ModalFilterAdminPageUstadz