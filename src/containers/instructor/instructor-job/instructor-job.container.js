import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View } from 'react-native'
import { Text } from '@ui-kitten/components'
import { styles } from './instructor-job.style'
import Images from '../../../assets/images'

const InstructorJob = () => {
  const navigation = useNavigation()
  const route = useRoute()

  let { idClass } = route.params ?? {}

  const classes = [
    {
      className: 'Kelas Tahsin',
      userQuestions: [
        {
          userName: 'Rico',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
        {
          userName: 'Rika',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
        {
          userName: 'Yudha',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
        {
          userName: 'Yudhi',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
      ],
    },
    {
      className: 'Kelas Tilawah',
      userQuestions: [
        {
          userName: 'Ada',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
        {
          userName: 'Adi',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
        {
          userName: 'Aduduh',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
        {
          userName: 'Mantab',
          avatar: 'Ava',
          date: '06/01/2021',
          time: '17:59',
          moment: 'date and time to now',
          sound: '8.12',
          desc: 'Ustadz curhat tad',
        },
      ],
    },
  ]

  return (
    <View>
      <View style={styles.containerHeader}>
        <Images.ButtonBackBlack.default width={24} />
        <View>
          <Text>Jobs List</Text>
          <Text>{classes[idClass].className}</Text>
        </View>
        <Images.IconFilterBlack.default width={20} />
      </View>
    </View>
  )
}

export default InstructorJob
