import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { 
    Text, 
    Icon, 
} from '@ui-kitten/components'
import { Card } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import {
    View,
    Image,
    FlatList,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
} from 'react-native'

import { Images, Color } from '../../../assets'
import styles from './user-notification.style'

const UserNotification = (props) => {
    const navigation = useNavigation()
    const [filterSelected, setFilterSelected] = useState(0)
    const [isNotificationEmpty, setIsNotificationEmpty]  = useState(true)

    const ListNotif = [
        {id: 1, TxtMentor: 'Ustadz Hamdan Ngaja', TxtDate: '21 Sep  2021, 10:09 WIB', TxtStNotif: 'Masyaallah akhi, Makhorijul hurufnya udah bener... jumpa lagi dipertemuan berikutnya y'},
        {id: 2, TxtMentor: 'Ustadz Hamdan Ngaja', TxtDate: '10 Sep  2021, 10:19 WIB', TxtStNotif: 'Luar biasa akhi..'},
        {id: 3, TxtMentor: 'Ustadz Hamdan Ngaja', TxtDate: '04 Jan  2021, 11:09 WIB', TxtStNotif: 'Masyaallah akhi, Makhorijul hurufnya udah bener... jumpa lagi dipertemuan berikutnya y'},
    ]

    const ListFilter = [
        { id: 0, name: 'Terbaru' },
        { id: 1, name: 'Semua' },
      ]

    const Header = () => {
        return (
          <View style={styles.containerHeaderNotif}>
            <View style={styles.flexHeaderInNotif}>
              <View style={styles.flexHeaderNotif}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Images.ButtonBack.default style={styles.iconBackNotif} />
                </TouchableOpacity>
                <Text style={styles.textTitleHeader}>Notifikasi</Text>
              </View>
            </View>
            <View style={styles.semiBoxNotif} />
          </View>
        )
    }

    const NotificationEmpty = () => {
        return (
            <View style={styles.ContainerNo}>
                <Images.IconNotificationEmpty.default />
                <Text style={styles.TxtNoNotif}>Belum ada notifikasi</Text>
            </View>
        )
    }

    const FilterNotification = () => {
        return (
            <View style={styles.ContainerListFilter}>
                <Card containerStyle={styles.cardStyleFilter}>
                    <View style={styles.ViewListFilter}>
                        {ListFilter.map((list, index) => {
                            return (
                                <View key={index} style={{marginBottom: 10, width: '40%'}}>
                                    <TouchableOpacity
                                        onPress={() => {setFilterSelected(list.id)}}>
                                        <Text style={[
                                            styles.textList,
                                            list.id == filterSelected
                                            ? {
                                                color: Color.white,
                                                borderColor: Color.transparent,
                                                backgroundColor: '#AB69C6',
                                            }
                                            : {
                                                color: '#AB69C6',
                                                backgroundColor: '#FEF5FF',
                                            },
                                        ]}>{list.name}</Text>
                                    </TouchableOpacity>
                                </View>
                            )
                        })}
                    </View>
                </Card>
            </View>
        )
    }

    const NotificationBody = () => {
        return (
            <View style={styles.ContainerBody}>
                <Card containerStyle={styles.cardStyle}>
                    {ListNotif.map((item, index) => {
                        return (
                            <View key={index}>
                                <TouchableOpacity>
                                    <View style={styles.ViewListNotif}>
                                        <Text style={styles.TxtListMentorMeet}>Pertemuan {item.id}</Text>
                                        <View style={styles.ViewListBody}>
                                            <Text style={styles.TxtListMentor}>From ; {item.TxtMentor}</Text>
                                        </View>
                                        <Text style={styles.TxtDateNotif}>{item.TxtDate}</Text>
                                        <Text style={styles.TxtListSt}>{item.TxtStNotif}</Text>
                                    </View>
                                </TouchableOpacity>
                                <Card.Divider style={styles.divider} />
                            </View>
                        )
                    })}
                </Card>
            </View>
        )
    }
    return (
        <View style={styles.containerMainNotif}>
            <Header />
            <FilterNotification />
            <ScrollView>
                {isNotificationEmpty ? <NotificationEmpty /> : <NotificationBody /> }
            </ScrollView>
        </View> 
    )
}

UserNotification.propTypes = {
    route: PropTypes.object,
}

export default UserNotification