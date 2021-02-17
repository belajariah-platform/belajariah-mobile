import PropTypes from 'prop-types'
import Modal from 'react-native-modal'
import React, {useState, useRef} from 'react'
import { View, TouchableOpacity, ScrollView, } from 'react-native'

import { Text } from '@ui-kitten/components'
import { Images, Color } from '../../../assets'
import {styles} from './modal-filter-admin.style'

const ModalFilterUser = (props) => {

  const [categorySelected, setCategorySelected] = useState(0)
  const [categoryWaktuSelected, setcategoryWaktuSelected] = useState(0)
    const horizontalScrollRef = useRef()

    const categoriesKelas = [
        { id: 1, name: 'Tahsin' },
        { id: 2, name: 'Tilawah' },
    ]

    const categoriesWaktu = [
        { no: 1, Desc: 'Mulai' },
        { no: 2, Desc: 'Progres' },
        { no: 3, Desc: 'Selesai' },
    ]

    return(
      <>
      <Modal
        backdropOpacity={0.25}
        isVisible={props.isVisible}
        style={styles.backdropStyle}
        onBackdropPress={props.backdropPress}
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
                <TouchableOpacity>
                    <Text style={styles.TxtButtonReset}>Reset</Text>
                </TouchableOpacity>
             </View>
             <View style={styles.viewKategoriKelas}>
                 <ScrollView
                    ref={horizontalScrollRef}
                    horizontal={true} showsHorizontalScrollIndicator={false}>
                    {categoriesKelas.map((category, index) => {
                      return (
                        <TouchableOpacity
                          key={index}
                          onPress={ () => {
                            setCategorySelected(category.id)
                            // await horizontalScrollRef.current.scrollTo({
                            //   x: 4000,
                            //   animated: true,
                            // })
                        }}>
                          <Text
                            style={[
                                styles.textCategories,
                                category.id === categorySelected
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
                <Text style={styles.TxtTitleReset}>Status</Text>
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
                            setcategoryWaktuSelected(categoriesWaktu.no)
                            // await horizontalScrollRef.current.scrollTo({
                            //   x: 4000,
                            //   animated: true,
                            // })
                        }}>
                          <Text
                            style={[
                                styles.textCategories,
                                categoriesWaktu.no === categoryWaktuSelected
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

ModalFilterUser.propTypes = {
    isVisible : PropTypes.bool,
    renderItem : PropTypes.object,
    backdropPress : PropTypes.func,
    containerStyle : PropTypes.object,
}

export default ModalFilterUser