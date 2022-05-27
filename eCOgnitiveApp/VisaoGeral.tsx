import { useNavigation } from '@react-navigation/native';
import Texto from './componentes/Texto';
import React, { useState } from "react";
import { Image, View, TextInput, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from './estilosVisaoGeral';
import { ParametrosTelas } from './ParametrosTelas';

export default function VisaoGeral() {

    const navigation = useNavigation();


    return (
        <View style={styles.container}>


            <View style={styles.topo}>
                <TouchableOpacity  onPress={()=>{ navigation.navigate("Login" as never)}}>
                    <Image style={styles.setaEsquerda} source={require("./assets/options.png")}/>  
                </TouchableOpacity>
                <View>
                    <Texto style={styles.userTexto}>Visão Geral</Texto> 
                </View>
            </View>  

            <View >
                <View style={styles.meio}>
                    <Image style={styles.grafico} source={require("./assets/graficos.png")}/>
                </View>

            </View> 

        </View>
    );
}