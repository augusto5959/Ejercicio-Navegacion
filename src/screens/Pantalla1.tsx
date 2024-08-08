import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any,any>{};

export const Pantalla1 = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.tittleBienvenidos}>Bienvenido</Text>
        <Image style={styles.image} source={{uri:'https://servisoftcorp.com/wp-content/uploads/2019/02/aplicaciones-moviles-apps-servisoftcorp.com_.jpg'}}/>
        <TouchableOpacity style={styles.bottonAccerder}>
            <Text style={styles.textButton} onPress={()=> navigation.navigate('Pantalla2')}>Acceder</Text>
        </TouchableOpacity>
    </View>
  )
}
