import React from 'react'
import {Text,View,StyleSheet, useColorScheme} from 'react-native'

function AppPro() {

    const isdarkMode = useColorScheme()==='light'
    console.log(isdarkMode);

  return (
    <View style={styles.container}>
        <Text style={isdarkMode?styles.darkText:styles.whiteText}>Hello World!</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    whiteText:{
        color: 'black',
        backgroundColor:'white'
    },
    darkText:{
        color: 'white',
        backgroundColor:'black'
    }
})

export default AppPro