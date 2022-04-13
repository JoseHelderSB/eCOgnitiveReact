import React from "react";
import { Image, StyleSheet, Dimensions, TouchableOpacity, View, TextInput } from 'react-native';

import Texto from '../componentes/Texto';

import setaEsquerda from '../../assets/arrowLeft.png'
import logo from '../../assets/icon.png'
import eyePass from '../../assets/eyepass.png'


import { Montserrat_700Bold } from "@expo-google-fonts/montserrat";

const width = Dimensions.get('screen').width;


export default function Login(){
    return (
        <>
        <View style={estilos.topo}>
            <Image style={estilos.setaEsquerda} source={setaEsquerda}/>    
            <Texto style={estilos.loginTitulo}>Login</Texto>    
        </View>
        
        <Image style={estilos.logo} source={logo}/>    


       <View style={estilos.boxLogin}>
            <Texto style={estilos.emailSenha}>E-MAIL</Texto>
            <View style={estilos.loginSenha}>
                <TextInput
                style={estilos.input}
                placeholder="Digite seu e-mail"
                />
            </View>

            <Texto style={estilos.emailSenha}>SENHA</Texto>

            <View>
                <View style={estilos.loginSenha}>
                    <TextInput
                    style={estilos.input}
                    secureTextEntry={true}
                    placeholder="Digite sua senha"
                    />
                    <TouchableOpacity>

                    </TouchableOpacity>
                </View>
            </View>

        </View>

        </>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
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

    input: {
        borderWidth: 1,
        borderRadius:5,
        width: 330,
        height: 40,
        padding: 8,
    },

    boxLogin: {
        marginTop: 40,
    },
    
    
});