import React, { useState } from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity, View, TextInput } from 'react-native';
import { Ionicons} from '@expo/vector-icons';

import Texto from '../componentes/Texto';

import setaEsquerda from '../../assets/arrowLeft.png'
import logo from '../../assets/icon.png'
import eyePass from '../../assets/eyepass.png'


import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";

const width = Dimensions.get('screen').width;


export default function Login(){
    const [input, setInput] = useState('');
    const [hidePass, setHidePass] =  useState(true);


    return (
        <>
        <View style={estilos.topo}>
            <Image style={estilos.setaEsquerda} source={setaEsquerda}/>    
            <Texto style={estilos.loginTitulo}>Login</Texto>    
        </View>
        
        <Image style={estilos.logo} source={logo}/>    


       <View style={estilos.boxLogin}>


            <Texto style={estilos.emailSenha}>E-MAIL</Texto>
            <View style={estilos.inputArea}>
                <TextInput
                style={estilos.input}
                placeholder="Digite seu e-mail"
                />
            </View>  

            <Texto style={estilos.emailSenha} >SENHA</Texto>

            <View style={estilos.inputArea}>
                <TextInput
                style={estilos.input}
                placeholder="Digite sua senha"
                value={input}
                onChangeText={(texto) => setInput(texto)}
                secureTextEntry={hidePass}
                 />

                <TouchableOpacity style={estilos.icon} onPress={() => setHidePass(!hidePass)}>
                    { hidePass ?
                        <Ionicons name="eye" size={20}/>
                        :
                        <Ionicons name="eye-off" size={20}/>
                    }
               </TouchableOpacity>
             </View>

        </View>

        <Texto style={estilos.esqueciSenha}>Esqueci a senha</Texto>

        <Texto style={estilos.ou}>Ou</Texto>

        </>
    )
}

const estilos = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: "90%",
    },

    topo:{
        flexDirection: "row",
        paddingVertical: 3,
    },

    loginTitulo: {
        fontSize: 16,
        marginTop: 80,
        marginLeft: 130,
        fontWeight: "bold",
        color:`#2e8b57`,
    },

    setaEsquerda: {
        width: 25,
        height: 25,
        marginLeft: 30,
        marginTop: 80,
        },

    logo:{
        width: 250,
        height: 55,
        marginLeft: 70,
        marginTop: 60,
    },

    loginSenha: {
        flexDirection: "column",
        alignItems: 'center',
    },

    emailSenha: {
        fontSize: 10,
        marginLeft: 30,
        marginTop: 20,
    },

    inputArea: {
        flexDirection: 'row',
        width: '98%',
        alignItems: 'center',
        alignItems: 'center',
        marginLeft: 35,
    },

    input: {
        borderWidth: 1,
        borderRadius:5,
        width: "85%",
        height: 40,
        padding: 8,
        
    },

    boxLogin: {
        marginTop: 40,
    },

    icon: {
        position: 'absolute',
        marginLeft: 290,
        width: "15%",
    },

    esqueciSenha:{
        color:`#2e8b57`,
        textDecorationLine: 'underline',
        marginLeft: 245,
        marginTop: 8,
    },

    ou: {
        textAlign: 'center',
        marginTop: 50,

    },
    
    
});