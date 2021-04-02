import * as Yup from 'yup'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { Text,Icon, } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'

import { 
    View, 
    ScrollView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    } 
from 'react-native'
import { 
    Topbar, 
    Loader, 
    Buttons, 
    TextBox,
 } from '../../../components'
import { styles } from './user-edit-password.style'

const UserEditPassword = () => {
    const navigation = useNavigation()

    const [loading, setLoading] = useState(false)
    const [success] = useState(true)
    const [secureTextEntry, setSecureTextEntry] = useState(true)
    const [secureTextEntryNewPassword, setSecureTextEntryNewPassword] = useState(true)
    const [secureTextEntryConfirmPassword, setSecureTextEntryConfirmPassword] = useState(true)
    const FormSubmit = useFormik({
        initialValues: { old_password: '', new_password: '', confirm_password: '' },
        validationSchema: Yup.object({
        old_password: Yup.string().required('Password lama harus diisi'),
        new_password: Yup.string().required('Password baru harus diisi'),
        confirm_password: Yup.string().required('Konfirmasi password harus diisi'),
        }),
        onSubmit: () => {
        setLoading(true)
        try {
            if (success === true) {
            navigation.navigate('Profil')
            }
        } catch (err) {
            return err
        }
        setLoading(false)
        },
    })

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry)
    }

    const toggleSecureEntryNewPassword = () => {
        setSecureTextEntryNewPassword(!secureTextEntryNewPassword)
    }

    const toggleSecureEntryConfirmPassword = () => {
        setSecureTextEntryConfirmPassword(!secureTextEntryConfirmPassword)
    }

    const renderIcon = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntry}>
        <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    )

    const renderIconNewPassword = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntryNewPassword}>
        <Icon {...props} name={secureTextEntryNewPassword ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    )

    const renderIconConfirmPassword = props => (
        <TouchableWithoutFeedback onPress={toggleSecureEntryConfirmPassword}>
        <Icon {...props} name={secureTextEntryConfirmPassword ? 'eye-off' : 'eye'} />
        </TouchableWithoutFeedback>
    )

    return(
        <>
        {loading && <Loader loading={loading} setLoading={setLoading} />}
        <Topbar title='Ubah Password' backIcon={true} />
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginTop: 30 }}>
                <Text style={styles.text}>Masukkan password lama</Text>
                <TextBox
                name='old_password'
                form={FormSubmit}
                placeholder='Password Lama'
                accessoryRight={renderIcon}
                secureTextEntry={secureTextEntry}
                />
                <Text style={styles.text}>Masukkan password baru</Text>
                <TextBox
                name='new_password'
                form={FormSubmit}
                placeholder='Password Baru'
                accessoryRight={renderIconNewPassword}
                secureTextEntryNewPassword={secureTextEntryNewPassword}
                />
                <Text style={styles.text}>Konfirmasi password baru</Text>
                <TextBox
                name='confirm_password'
                form={FormSubmit}
                placeholder='Konfirmasi Password Baru'
                accessoryRight={renderIconConfirmPassword}
                secureTextEntryConfirmPassword={secureTextEntryConfirmPassword}
                />
                <Buttons title='Ubah Password'
                onPress={FormSubmit.handleSubmit}/>
            </View>
            </ScrollView>
        </View>
        </>
    )
}

UserEditPassword.propTypes = {
    navigation : PropTypes.object
  }

export default UserEditPassword